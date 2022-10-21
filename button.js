var video;
window.onload = function () {
    video = document.getElementById("videoPlayer");
}
// 定义播放按钮
function play() {
    video.play();
}
// 定义暂停按钮
function pause() {
    video.pause();
}
// 定义重新开始按钮
function stop() {
    video.pause();
    video.currentTime = 0;
}
function VideoInput() {
    var file = document.getElementById('file').files[0];
    var url = URL.createObjectURL(file);
    document.getElementById("videoPlayer").src = url;
}