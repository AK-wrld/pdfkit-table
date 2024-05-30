const PDFDocument = require('pdfkit');
const fs = require('fs');
const Data = require('./Data.js')
function drawHeader(doc) {
    doc.image(__dirname+'/logo.png', 50, 60, {
        fit: [125, 150],
        align: 'left',
        valign: 'top'
    });
    doc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text(Data.address, 330, 60, {
            width: 250,
            // align: 'center',
            // continued: true,
        });
    doc.moveDown()
}
module.exports = drawHeader