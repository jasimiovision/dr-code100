// https://stackoverflow.com/questions/1763639/how-to-deal-with-page-breaks-when-printing-a-large-html-table
// thead {display:none;}
// table:first-child thead {display:table-header-group;}
const previewCss = `
<style>
@page {
  
        margin-top: 0mm;
  @bottom-right {
    content: counter(page) " of " counter(pages);
    --main-bg-color: counter(page);
  }
}

.table{
  margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    width: 100%;
}
.table table{
  width:100%;
  height:auto;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
      }
.report-container {
  border-collapse: collapse;
  border-spacing: 0;
  width:100%;
  height:100%;
}
td { 
  border-collapse: collapse; 
  padding:5px;
  vertical-align: top;
}
img{ 
  width: 100%;
}
body{
  width: 21cm;
  border: 1px solid black;
  padding: 0mm 30mm 30mm 30mm; 
  -webkit-print-color-adjust: exact; 
}
@media print { 
  thead, body{
    border: 0px;
    margin: 0;
  } 
  .report-footer {
    display:table-footer-group;
    page-break-before:always;
    margin:5px;
    bottom: 0;
  } 
  .report-header {
    display:table-header-group;
    margin:5px;
  }
  .report-container { 
    page-break-inside:auto;
    page-break-after:always;
  }
  tr { page-break-inside:avoid; page-break-after:auto }
}
div#footer {
  display:none;
position:fixed;
bottom:0px;
left:10%;
width:80%;
color:#000;
background:#fff;
border-top:1px solid #000;
padding:0;
margin-top: 35px; 
}
.header, .header-space,
.footer, .footer-space {
  height: 50px;
}
@media print {
  div#footer{
    display:block;
  }
    #page-number:after {
    content: "Page " counter(page);
    counter-increment: page;
  }
}


</style>
`

// const previewCss = `
// <style>
//     @page {
//       margin: 0mm
//     }
//     thead {display:none;}
//     table:first-child thead {display:table-header-group;}
//     body{
//       width: 21cm;
//       border: 1px solid black;
//       padding: 0mm 20mm 20mm 20mm;  
//       -webkit-print-color-adjust: exact; 
//     }
//     table {
//       border-collapse: collapse;
//       border-spacing: 0;
//     }
//     @media print { 
//       thead, body{
//         border: 0px;
//         margin: 0;
//       } 
//       table { page-break-inside:auto }
//       tr    { page-break-inside:avoid; page-break-after:auto }
//       thead { display:table-header-group }
//       hr    { display:none }
//     }
// </style>
// `
export default previewCss;