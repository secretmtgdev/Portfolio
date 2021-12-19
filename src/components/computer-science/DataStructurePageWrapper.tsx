import { DSPageProps } from "./CSProps";


const DataStructurePageWrapper = ({children, name, implementation, runTimes, commonApplications}: DSPageProps) => {
    let mapping = [];
    for(const [key, value] of runTimes) {
        mapping.push(<li key={key+value}><strong>{key}</strong>: {value}</li>)
    }
    return (<>
        <header>
            <h2>{name}</h2>
        </header>
        <section id="details">      
            {children}      
        </section>
        <section id="implementation">
            <h3>Implementation</h3>
            {implementation}
        </section>
        <section id="run-times">
            <h3>Run Times</h3>
            <ul>
                {mapping}
            </ul>            
        </section>
        <section id="applications">
            <h3>Applications</h3>
            <ul>
                {commonApplications.map((application, index) => (<li key={index}>{application}</li>))}
            </ul> 
        </section>
        <footer></footer>
    </>)           
}

export default DataStructurePageWrapper;