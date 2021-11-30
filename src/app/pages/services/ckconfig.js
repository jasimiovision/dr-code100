// import { environment } from '../../../environments/environment';
const ckconfig = {
    toolbar: [
      'heading','undo','redo','|',
      'bold','italic','underline',"strikethrough","subscript","superscript","specialCharacters","insertTable",'|',
      'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor', 'highlight', 'removeFormat', '|', 
      'alignment', 'outdent', 'indent', 'bulletedList', 'numberedList', 'horizontalLine', '|', 
      'imageInsert', 'link', '|'
    ],
    image: {
      toolbar: [
         'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight','|',
        'imageResize', '|',
        'imageTextAlternative'
      ],
      // styles: [
      //   'alignLeft', 'alignCenter', 'alignRight'
      // ], // doesn't work outside of CKeditor
      resizeOptions: [{
            name: 'imageResize:original',
            label: 'Original',
            value: null
        },{
            name: 'imageResize:50',
            label: '50%',
            value: '50'
        },{
            name: 'imageResize:75',
            label: '75%',
            value: '75'
        }],
    },
    // simpleUpload: {
    //   // The URL that the images are uploaded to.
    //   uploadUrl: environment.apiURL + "/report/report-image",
    //   // Enable the XMLHttpRequest.withCredentials property.
    //   withCredentials: true,
    //   // Headers sent along with the XMLHttpRequest to the upload server.
    //   headers: {
    //       'X-CSRF-TOKEN': 'CSRF-Token',
    //       Authorization: 'Bearer <JSON Web Token>',
    //       "Project-name": "test"
    //   }
    // },
    table: {
      contentToolbar: [
        'tableColumn', 'tableRow', 'mergeTableCells',
        'tableProperties', 'tableCellProperties'
      ]
    },
    placeholder: 'Type the content here!'
}

export default ckconfig;