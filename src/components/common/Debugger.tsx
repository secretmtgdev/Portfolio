import { DebuggerProps } from '../../types/Types';
import { isNullOrUndefined, renderComponentDetails, renderDocumentDetails } from '../../Utils';
import { If, Then, Else } from 'react-if';

const Debugger = (props: DebuggerProps) => {
    return (
        <div id='debugger'>
            <h2>Debugger</h2>
            <If condition={!isNullOrUndefined(props)}>
                <Then>
                    {renderComponentDetails(props.state!)}
                </Then>
                <Else>
                    {renderDocumentDetails()}
                </Else>
            </If>
        </div>
    )
}

export default Debugger;