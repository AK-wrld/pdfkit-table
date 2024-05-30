const PDFDocument = require('pdfkit')
const Data = require('./Data.js')
const details = (doc)=> {
    doc
    .font('Helvetica-Bold')
    .fontSize(14)
    .text(Data.quote, (doc.page.width/2)-(doc.page.margins.left+doc.page.margins.right/2)-30, doc.y + 20, {
        width: 200,
        // align: 'center'
    })
// doc.y = y
doc.moveDown()
//left side
let y = doc.y;
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Requester Name - ', 50, doc.y)
// doc.moveDown()
doc.y = y
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.requesterName, 155, doc.y, {
        width: 230
    })
// doc.moveDown()
doc.y = y;
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Status - ', 400, doc.y)
doc.y = y;
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.status, 446, doc.y, {
        width: 100
    })
y = doc.y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Quote ID - ', 50, doc.y + 5)
doc.y = y
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.quoteId, 110, doc.y + 5, {
        width: 230
    })
doc.y = y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Total Items - ', 400, doc.y + 5)
doc.y = y
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.numberOfOrders, 472, doc.y + 5)
y = doc.y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Request Name - ', 50, doc.y + 5)
doc.y = y;
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.requestName, 145, doc.y + 5, {
        width: 230
    })

doc.y = y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Bid Date - ', 400, doc.y + 5)
doc.y = y;
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.bidDate, 458, doc.y + 5, {
        width: 100
    })
y = doc.y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Delivery Date - ', 400, doc.y + 5)
doc.y = y
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.deliveryDate, 486, doc.y + 5, {
        width: 100
    })
y = doc.y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Payment terms - ', 400, doc.y + 5)
doc.y = y
doc
    .font('Helvetica')
    .fontSize(12)
    .text(Data.paymentTerms, 495, doc.y + 5, {
        width: 100
    })
}
module.exports = details