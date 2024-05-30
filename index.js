
const PDFDocument = require('pdfkit');
const fs = require('fs');
const data = require('./rfqData.json');
const doc = new PDFDocument({ margin: 30 });
const Data = require('./Data.json')
const details = require('./details')
const Table = require('./table.js')
const drawHeader = require('./Header.js')
const generatePDFTable = require('./Footer.js');
const Footer = require('./Footer.js');

doc.pipe(fs.createWriteStream('output.pdf'));
let pageNumber = 1;
drawHeader(doc)
details(doc)
const num = Table(doc,pageNumber)
Footer(doc,num)
doc.end();