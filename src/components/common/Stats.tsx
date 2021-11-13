import { StatProps, MeterProps } from '../../Types';

const Stats = (props: StatProps) => {
    const mapping: any[] = [];
    props.stats.forEach((val, key) => {
        mapping.push(
            <div key={key}>
                <label>{key}: </label>
                <Meter value={val}></Meter>
            </div>);
    })
    return (
        <aside>
            {mapping}
        </aside>
    )
}


const Meter = (props: MeterProps) => {
    return (
        <meter min="0" max="100" value={`${props.value}`}>
        </meter>
    );
}

export default Stats;