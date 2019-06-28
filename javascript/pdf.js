require('pdfjs-dist');

PDFJS.workerSrc = '../pdfjs/pdf.min.worker.js'

PDFJS.getDocument('../test.pdf').then(function(pdf){
  // PDF ドキュメント全体に関する処理を記述

  pdf.getPage(1).then(function(page){
    // 読み込んだ各ページの処理を記述

    // 描画時の設定を記述
    var scale = 1.5;
    var rotate = 0;
    var viewport = page.getViewport(scale, rotate);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    document.getElementById('pdf-container').appendChild(canvas);

    // 作成した canvas に読み込んだ pdf を描画
    page.render(renderContext);
  });

});