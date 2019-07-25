// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
// var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
var url = 'pro2-05.pdf';
// Loaded via <script> tag, create shortcut to access PDF.js exports.
// pdfjsLib = window['pdfjs-dist/build/pdf'];
// pdfjsLib.cMapUrl = 'js/vendor/pdfjs/cmaps/'

// The workerSrc property shall be specified.
// pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
PDFJS.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@1.10.100/build/pdf.worker.js';
// pdfjsLib.cMapUrl = '../cmaps/';
PDFJS.cMapUrl = '../cmaps/';
// console.log(pdfjsLib.CMapReaderFactory);
PDFJS.cMapPacked = true;

PDFJS.getDocument(url).then(function (pdf) {
  return pdf.getPage(1);
}).then(function (page) {
  var scale = 1;
  var viewport = page.getViewport(scale);
  var canvas = document.getElementById('pdfCan');
  var context = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  var renderContext = {
    canvasContext: context,
    viewport: viewport
  };
  page.render(renderContext);
});
// Asynchronous download of PDF
// var loadingTask = PDFJS.getDocument(url);
// loadingTask.promise.then(function (pdf) {
//   console.log('PDF loaded');

//   // Fetch the first page
//   var pageNumber = 1;
//   pdf.getPage(pageNumber).then(function (page) {
//     console.log('Page loaded');

//     var scale = 1.5;
//     var viewport = page.getViewport({ scale: scale });
//     // Prepare canvas using PDF page dimensions
//     var canvas = document.getElementById('pdfCan');
//     var context = canvas.getContext('2d');
//     // var context = canvas.contextTop;
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     // Render PDF page into canvas context
//     var renderContext = {
//       canvasContext: context, viewport: viewport
//     };
//     var renderTask = page.render(renderContext);
//     renderTask.promise.then(function () {
//       console.log('Page rendered');
//     });
//   });
// }, function (reason) {
//   // PDF loading error
//   console.error(reason);
// });