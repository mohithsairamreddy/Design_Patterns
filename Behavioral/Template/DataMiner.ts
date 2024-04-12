abstract class DataMiner {
    mine(path: string): void {
        this.openFile(path);
        this.extractData();
        this.parseData();
        this.analyzeData();
        this.sendReport();
        this.closeFile();
    }

    abstract openFile(path: string): void;
    abstract extractData(): void;
    abstract closeFile(): void;
    abstract parseData(): void;

    analyzeData() {
        console.log("Analyzing data... (Default implementation)");
    }

    sendReport() {
        console.log("Sending report... (Default implementation)");
    }
}

export default DataMiner;
