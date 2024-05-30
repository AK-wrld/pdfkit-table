const PDFDocument = require('pdfkit');
const fs = require('fs');
const Data = require('./Data.json')
function drawHeader(doc) {
    doc.image(__dirname+'/logo.png', 50, 60, {
        fit: [125, 150],
        align: 'left',
        valign: 'top'
    });
    doc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text('ABC Society Plot No 1, Bisrak Road, Greater Noida, Uttar Pradesh - 422001', 330, 60, {
            width: 250,
            // align: 'center',
            // continued: true,
        });
    doc.moveDown()
}
module.exports = drawHeader