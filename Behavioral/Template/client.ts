import DocDataMiner from "./DocDataMiner";
import CSVDataMiner from "./CSVDataMiner";
import PDFDataMiner from "./PDFDataMiner";

const docDataMiner = new DocDataMiner();
const csvDataMiner = new CSVDataMiner();
const pdfDataMiner = new PDFDataMiner();

docDataMiner.mine("data.doc");
csvDataMiner.mine("data.csv");
pdfDataMiner.mine("data.pdf");
