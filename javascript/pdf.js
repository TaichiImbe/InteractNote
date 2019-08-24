// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = 'middle2019.pdf';
// Loaded via <script> tag, create shortcut to access PDF.js exports.

// The workerSrc property shall be specified.
PDFJS.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@1.10.100/build/pdf.worker.js';
// PDFJS.workerSrc = 'node_modules/pdfjs-dist@1.10.100/build/pdf.worker.js';
PDFJS.cMapUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@1.10.100/cmaps/';
// PDFJS.cMapUrl = 'npm_modules/pdfjs-dist@1.10.100/cmaps/';
PDFJS.cMapPacked = true;

var pageNum = 1;
var pdf = null
const loadingTask = PDFJS.getDocument(url);
loadingTask.then(function (pdf_) {
  pdf = pdf_;
  pageRender(pageNum);
});
function pageRender(pageNum) {
  pdf.getPage(pageNum).then(function (page) {
  var scale = 1;
  var viewport = page.getViewport(scale);
  var pdfCan = document.getElementById('pdfCan');
  var context = pdfCan.getContext('2d');
  Canvas.setHeight(viewport.height);
  Canvas.setWidth(viewport.width);
  pdfCan.height = viewport.height;
  pdfCan.width = viewport.width;
  var renderContext = {
    canvasContext: context,
    viewport: viewport
  };
  page.render(renderContext);
});
}

