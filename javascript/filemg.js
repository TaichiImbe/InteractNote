var upload = document.getElementById('upload');

upload.addEventListener('click', function (){

    var uploadFile = document.getElementById('upload-file');
    var file = uploadFile.files[0];
    if (!file) alert('ファイルを選択してください');

    var uploadData;
    var uploadText = document.getElementById('upuload-text');
    var reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function () {
        uploadText.innerHTML = reader.result;
        uploadData = JSON.parse(reader.result);
    }
})