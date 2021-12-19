import { faPause, faPlay, faStepBackward, faStepForward, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Debugger from '../../common/Debugger';
import { LinearAlgebraState } from '../../../types/Types';
import { changeElementColors } from '../../../Utils';

const LinearAlgebra = () => {
    var partyTimer: NodeJS.Timeout;
    const defaultState: LinearAlgebraState = {
        playing: false, 
        paused: false,
        rows: 0,
        columns: 0,
        currentState: 0,
        currentMatrix: [[]],
        currentJsxMatrix: <></>,
        jsxMatrixStates: [<></>]
    };

    const [state, setState] = useState(defaultState);
    const togglePlay = () => {
        setState({
            ...state,
            playing: false,
            paused: true
        });
    };

    const togglePause = () => {
        setState({
            ...state,
            playing: true,
            paused: false
        });
    };

    const reset = () => {
        setState({
            ...state,
            playing: false,
            paused: false
        });
    };

    const updateRowCount = (e: any) => {
        setState({
            ...state,
            rows: e.target.value
        })
    };

    const updateColumnCount = (e: any) => {
        setState({
            ...state,
            columns: e.target.value
        });
    };

    const updateState = (isIncrement: boolean) => {
        var newState = isIncrement ?
            (state.currentState + 1) % state.jsxMatrixStates.length :
            state.currentState <= 0 ? state.jsxMatrixStates.length - 1 : state.currentState - 1;
        setState({
            ...state,
            currentState: newState
        })
    }

    const updateMatrix = (jsxMatrix: JSX.Element) => {
        setState({
            ...state, 
            currentJsxMatrix: jsxMatrix
        })
    }

    const createRandomMatrix = () => {
        const rowCount = state.rows, colCount = state.columns;
        if(rowCount <= 0 || colCount <= 0) return;

        const matrix: number[][] = [];
        const bounds = rowCount * colCount;
        for(let row = 0; row < rowCount; row++) {
            // generate a new row 
            const rowArr: number[] = [];
            for(let col = 0; col < colCount; col++) {
                // [0, bounds)
                const randomNumber = Math.floor(Math.random() * bounds);
                rowArr.push(randomNumber);
            }

            matrix.push(rowArr);
        }

        const matrixJsx = getMatrixJsx(matrix);
        updateMatrix(matrixJsx);
    }

    const getMatrixJsx = (matrix: number[][]) => {
        if(matrix == null) return <></>;
        const m = matrix.length, n = matrix[0].length;
        const matrixCSS = {
            gridTemplateColumns: `repeat(${n}, 1fr)`,
            gridTemplateRows: `repeat(${m}, 1fr)`
        };

        const renderedMatrix = [];
        for(let row = 0; row < matrix.length; row++) {
            for(let col = 0; col < matrix[0].length; col++) {
                let val = matrix[row][col];
                
                // render cell
                const cellCSS = {
                    gridColumn: `${col + 1}`,
                    gridRow: `${row + 1}`
                }

                renderedMatrix.push(
                    <div className='cell' style={cellCSS}>
                        {val}
                    </div>
                )
            }
        }

        return (
            <div className='matrix' style={matrixCSS}>
                {renderedMatrix}
            </div>
        )
    }

    const rowReduce = () => {
        let originalMatrix = state.currentMatrix;
        const matrixStates: JSX.Element[] = [getMatrixJsx(originalMatrix)];

        setState({
            ...state,
            jsxMatrixStates: matrixStates
        })
    }

    const startPartyMode = () => {
        partyTimer = setInterval(() => {
            changeElementColors('cell');  
        }, 100)
    }

    const endPartyMode = () => {
        if(partyTimer) {
            clearTimeout(partyTimer);
        }
    }

    return (
        <div data-testid='linear-algebra' className='page-container'>
            <div id='la-controls' className='controls'>
                <div className='controls-row'>
                        <label aria-labelledby='rows'>Rows</label>
                        <input 
                            className='number-input'
                            onChange={updateRowCount} 
                            placeholder='0' 
                            type='number'/>
                        <label aria-labelledby='columns'>Columns</label>
                        <input 
                            className='number-input'
                            onChange={updateColumnCount} 
                            placeholder='0' 
                            type='number'/>                                         
                </div>                
                <div className='controls-row'>
                    <button onClick={createRandomMatrix}>
                        Generate Random Matrix
                    </button>   
                    <button onClick={startPartyMode}>
                        Let's Party!
                    </button>
                    <button onClick={endPartyMode}>
                        Sorry for party rocking ):
                    </button>
                </div>
                <div className='controls-row'>
                    <button
                        className={'icon-wrapper-button can-hover ' + (state.playing ? 'disabled' : '')}
                        disabled={state.playing}
                        onClick={() => updateState(false)}
                        data-testid='step-backward'
                    >
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button 
                        onClick={state.playing ? togglePlay : togglePause}
                        className={'icon-wrapper-button can-hover ' + (state.playing  || state.paused ? 'active' : '')}
                        data-testid='play'>
                        <FontAwesomeIcon icon={state.playing ? faPause : faPlay} />
                    </button>
                    <button
                        className={'icon-wrapper-button can-hover'}
                        onClick={reset}
                        data-testid='stop'
                    >
                        <FontAwesomeIcon icon={faStop} />
                    </button>
                    <button
                        className={'icon-wrapper-button can-hover ' + (state.playing ? 'disabled' : '')}
                        disabled={state.playing}
                        onClick={() => updateState(true)}
                        data-testid='step-forward'
                    >
                        <FontAwesomeIcon icon={faStepForward} />
                    </button>
                </div>                
            </div>
            <div className='matrix-container'>
                {state.currentJsxMatrix}
            </div>
            <Debugger state={state} />
        </div>
    )
}


export default LinearAlgebra;