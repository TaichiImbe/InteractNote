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