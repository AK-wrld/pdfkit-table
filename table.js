const PDFDocument = require('pdfkit');
const fs = require('fs');
const data = require('./rfqData.json');
const Footer = require('./Footer.js')
const drawHeader = require('./Header.js')
const TableHeading = (doc, table, y)=>{
    let x=30;
    doc.fontSize(12)
    doc.font('Helvetica-Bold')
    table.headers.forEach((heading, index)=>{
        doc.text(heading,x,y);
        x+=table.distance[index];
    })
    doc.moveDown();
    doc.moveTo(0+doc.page.margins.left,doc.y).lineTo((doc.page.width-doc.page.margins.right), doc.y).stroke();
    doc.moveDown();
}

const Table = (doc,pageNumber)=>{
    doc.moveDown()
    const table = {
        headers: ["Name", "Make", "Specification", "UOM", "Quantity", "Category"], 
        rows: [],
        distance: [100,100,100,75,75,150]
    };

    for (const row of data.items ){
        table.rows.push([row.item,row.brandName,row.size,row.quantityUOM,row.quantity,row.status])
    }

    
    doc.y+=20;
    doc.moveTo(0+doc.page.margins.left,doc.y).lineTo((doc.page.width-doc.page.margins.right), doc.y).stroke();
    doc.moveDown();

    TableHeading(doc, table, doc.y)


    let x=30;
    for ( const dataRow of table.rows ){
        let linePosition = doc.y;

        if((linePosition + 14) >(doc.page.height - doc.page.margins.bottom)){
            
            Footer(doc,pageNumber)
            pageNumber++;
            doc.addPage();
            doc.y = 0 + doc.page.margins.top
            drawHeader(doc)
            doc.moveDown()
            TableHeading(doc, table, doc.y)
            linePosition = doc.y;
        }
        dataRow.forEach((body, index) => {
            doc.fontSize(10)
            doc.font('Helvetica')
            doc.text(body,x, linePosition);
            x+=table.distance[index];
        });
        const endX = x;
        x = 30;
        doc.moveDown();
        doc.moveTo(0+doc.page.margins.left,doc.y).lineTo((doc.page.width-doc.page.margins.right), doc.y).stroke();
        doc.moveDown();
   
    }
    return pageNumber
}
module.exports = Table