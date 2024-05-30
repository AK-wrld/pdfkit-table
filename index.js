// const PDFDocument = require('pdfkit');
const PDFDocument = require('pdfkit-table');
const fs = require('fs');

const doc = new PDFDocument({ margin: 30 });
// console.log(y)
// const table = new PDFTable(doc, {bottomMargin: 30});
// Define your dynamic data
const data = {
    logoPath: './logo.png',
    address: 'ABC Society Plot No 1, Bisrak Road, Greater Noida, Uttar Pradesh - 422001',
    quote: 'REQUEST FOR QUOTE',
    requesterName: 'Ram Kumar',
    quoteId: 'PRISM/2024/SCAS/RFQ0139',
    requestName: 'Granite Gate Properties Private Limited jasdahdbahdhadshjsadhasfdtyafsghjdbahdvityafdhavsgdcatfydtasfdasgtdfastdasvdgasftdfasdasgdcgascdgyasvdghcasdfasycdga',
    status: 'Completed',
    numberOfOrders: '40',
    bidDate: '03-05-2024',
    deliveryDate: '03-05-2024',
    paymentTerms: '30 Days'
};
; (
    async function createTable() {

    }
)
const tableData = {
    headers: ['Name', 'Make', 'Specification', 'UOM', 'Quantity', 'Category'],
    rows: [
        ['PVC Socket', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Elbow', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC R-Tee', 'Supreme', '100x75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Tee', 'Supreme', '75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Door Socket lorem ipsum helloooooo', 'Supreme', '110mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Solvent', 'Supreme', 'Ltr', 'PCS', '2', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '40mm', 'PCS', '10', 'Plumbing Items'],
        ['UPVC Elbow', 'Supreme', '40mm', 'PCS', '10', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '15mm', 'PCS', '20', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '20mm', 'PCS', '20', 'Plumbing Items'],
        ['PVC Socket', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Elbow', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC R-Tee', 'Supreme', '100x75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Tee', 'Supreme', '75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Door Socket', 'Supreme', '110mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Elbow', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC R-Tee', 'Supreme', '100x75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Tee', 'Supreme', '75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Door Socket lorem ipsum helloooooo', 'Supreme', '110mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Solvent', 'Supreme', 'Ltr', 'PCS', '2', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '40mm', 'PCS', '10', 'Plumbing Items'],
        ['UPVC Elbow', 'Supreme', '40mm', 'PCS', '10', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '15mm', 'PCS', '20', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '20mm', 'PCS', '20', 'Plumbing Items'],
        ['PVC Socket', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Elbow', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC R-Tee', 'Supreme', '100x75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Tee', 'Supreme', '75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Door Socket', 'Supreme', '110mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Elbow', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC R-Tee', 'Supreme', '100x75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Tee', 'Supreme', '75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Door Socket lorem ipsum helloooooo', 'Supreme', '110mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Solvent', 'Supreme', 'Ltr', 'PCS', '2', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '40mm', 'PCS', '10', 'Plumbing Items'],
        ['UPVC Elbow', 'Supreme', '40mm', 'PCS', '10', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '15mm', 'PCS', '20', 'Plumbing Items'],
        ['UPVC Socket', 'Supreme', '20mm', 'PCS', '20', 'Plumbing Items'],
        ['PVC Socket', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Elbow', 'Supreme', '90mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC R-Tee', 'Supreme', '100x75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Tee', 'Supreme', '75mm', 'PCS', '6', 'Plumbing Items'],
        ['PVC Door Socket', 'Supreme', '110mm', 'PCS', '6', 'Plumbing Items']
    ]
};
doc.pipe(fs.createWriteStream('output.pdf'));
function drawHeader() {
    doc.image(data.logoPath, 50, 50, {
        fit: [125, 150],
        align: 'left',
        valign: 'top'
    });
    doc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text(data.address, 330, 60, {
            width: 250,
            align: 'center',
            continued: true,
        });
    doc.moveDown()
    console.log(doc.y)
}

// doc.on('pageAdded', drawHeader);

drawHeader()

doc
    .font('Helvetica-Bold')
    .fontSize(14)
    .text(data.quote, 170, doc.y + 20, {
        width: 100,
        align: 'center'
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
console.log(doc.y)
doc
    .font('Helvetica')
    .fontSize(12)
    .text(data.requesterName, 155, doc.y, {
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
    .text(data.status, 446, doc.y, {
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
    .text(data.quoteId, 110, doc.y + 5, {
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
    .text(data.numberOfOrders, 472, doc.y + 5)
y = doc.y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Request Name - ', 50, doc.y + 5)
doc.y = y;
doc
    .font('Helvetica')
    .fontSize(12)
    .text(data.requestName, 145, doc.y + 5, {
        width: 230
    })
console.log(doc.y)

doc.y = y
doc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Bid Date - ', 400, doc.y + 5)
doc.y = y;
doc
    .font('Helvetica')
    .fontSize(12)
    .text(data.bidDate, 458, doc.y + 5, {
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
    .text(data.deliveryDate, 486, doc.y + 5, {
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
    .text(data.paymentTerms, 495, doc.y + 5, {
        width: 100
    })
doc.table(tableData, {
    columnSize: [120, 90, 100, 50, 40, 100],
    width: 500,
    x: 50,
    y: doc.y + 30,
    prepareHeader: (header, i) => {
        doc.font("Helvetica-Bold").fontSize(10);
    },
    prepareRow: (row, indexColumn, indexRow, rectRow) => {

        doc.font("Helvetica").fontSize(10).lineGap(10);

    },
    headerAlign: "center"

});

doc.end();