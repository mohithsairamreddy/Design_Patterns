import DataMiner from "./DataMiner";

class DocDataMiner extends DataMiner {
    openFile(path: string) {
        console.log(`Opening DOC file: ${path}`);
    }

    extractData() {
        console.log("Extracting data from DOC file");
    }

    closeFile() {
        console.log("Closing DOC file");
    }

    parseData() {
        console.log("Parsing data from DOC file");
    }
}

export default DocDataMiner;
