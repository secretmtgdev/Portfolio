import DataStructurePageWrapper from "./DataStructurePageWrapper";

const HashMap = () => {
    let name = "HashMap";
    let runTimes = new Map<string, string>([
        ["Access", "O(1)"],
        ["Search", "O(1)"],
        ["Insertion", "O(1)"],
        ["Deletion", "O(1)"]
    ]);
    let commonApplications = [
        "Storing cookie information on the browser",
        "Filing user information based off an ID",
        "Catalog of a book",
        "Implementation in a database"
    ];
    console.error(runTimes);

    return (
        <DataStructurePageWrapper name={name} runTimes={runTimes} commonApplications={commonApplications}>
        </DataStructurePageWrapper>
    )
}

export default HashMap;