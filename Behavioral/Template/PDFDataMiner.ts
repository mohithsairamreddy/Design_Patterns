import DataMiner from "./DataMiner";

class PDFDataMiner extends DataMiner {
    openFile(path: string) {
        console.log(`Opening PDF file: ${path}`);
    }

    extractData() {
        console.log("Extracting data from PDF file");
    }

    closeFile() {
        console.log("Closing PDF file");
    }

    parseData() {
        console.log("Parsing data from PDF file");
    }
}

export default PDFDataMiner;
