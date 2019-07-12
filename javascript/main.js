// ページ読み込みが完了したらコールバック
// *コールバック: 第2引数の無形関数(=関数名省略)
window.addEventListener('load', () => {
    //contextを使ってcanvasに絵を書く
    // const canvas = document.getElementById('draw-area');
    const context = canvas.getContext('2d'); 

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    //直前のマウスのcanvas上のx座標とy座標を登録
    const lastposition = { x: null, y: null };

    //マウスがドラッグされているのか
    let isDrag = false;

    function draw(x, y) {
        //マウスがドラッグされていないなら処理を中断
        // ドラッグ限定で描画
        if (!isDrag) {
            return;
        }


        // 「context.beginPath()」と「context.closePath()」を都度draw関数内で実行するよりも、
        // 線の描き始め(dragStart関数)と線の描き終わり(dragEnd)で1回ずつ読んだほうがより綺麗に線画書ける


        // 書き始めは lastPosition.x, lastPosition.y の値はnullとなっているため、
        // クリックしたところを開始点としている。
        // この関数(draw関数内)の最後の2行で lastPosition.xとlastPosition.yに
        // 現在のx, y座標を記録することで、次にマウスを動かした時に、
        // 前回の位置から現在のマウスの位置まで線を引くようになる。
        if (lastposition.x === null || lastposition.y === null) {
            //ドラッグの開始位置
            context.moveTo(x, y);
        } else {
            //ドラッグ中の線の開始位置
            context.moveTo(lastposition.x, lastposition.y);
        }
        // context.moveToで設定した位置から、context.lineToで設定した位置までの線を引く。
        // - 開始時はmoveToとlineToの値が同じであるためただの点となる。
        // - ドラッグ中はlastPosition変数で前回のマウス位置を記録しているため、
        //   前回の位置から現在の位置までの線(点のつながり)となる
        context.lineTo(x, y);

        // context.moveTo, context.lineToの値を元に実際に線を引く
        context.stroke();

        //現在のマウス位置を記録して、次回線の開始点にする
        lastposition.x = x;
        lastposition.y = y;
    }


    //マウスのドラッグを開始したらisDragのフラグをtrueにする
    function dragStart(event) {
        //これから新しい線を書き始めることを宣言
        //線画終了したらclosePathで終了を宣言
        context.beginPath()

        isDrag = true;
    }

    function dragEnd(event) {
        context.closePath();
        isDrag = false;

        //記録していた値をリセット
        lastposition.x = null;
        lastposition.y = null;
    }

    //イベント処理を定義
    function initEventHandler() {

        canvas.addEventListener('mousedown', dragStart);
        canvas.addEventListener('mouseup', dragEnd);
        canvas.addEventListener('mouseout', dragEnd);
        canvas.addEventListener('touchstart', dragStart);
        canvas.addEventListener('touchmove', (event) => {
            draw(event.layerX, event.layerY);
        })
        canvas.addEventListener('touchend', dragEnd);
        canvas.addEventListener('mousemove', (event) => {
           
            // eventの中の値を見たい場合は以下のようにconsole.log(event)で、
            // デベロッパーツールのコンソールに出力させると良い
            console.log(event);
            draw(event.layerX, event.layerY);
        });
        resize();
    }

    //イベント処理を初期化
    initEventHandler();

})