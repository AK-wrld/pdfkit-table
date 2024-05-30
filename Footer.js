const PDFDocument = require('pdfkit');
const Footer = (doc,pageNumber)=> {
    const footerHeight = 20; // Adjust this value to control footer height
    doc.y+=20;
    const footerTop = doc.page.height - doc.page.margins.bottom - footerHeight+10;
      doc.fontSize(8);
      doc.text(`Page ${pageNumber}`, doc.page.margins.left, footerTop, { align: 'center' });
}
module.exports = Footer