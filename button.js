var video;
var display;
window.onload = function () {
    video = document.getElementById("videoPlayer");
    display = document.getElementById("displayStatus");
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
// 设置进度条
function progressUpdate() {
    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration * 100) + "&nbsp";
    display.innerHTML = (Math.round(video.currentTime * 100) / 100) + "s";
}
function VideoInput() {
    var file = document.getElementById('file').files[0];
    var url = URL.createObjectURL(file);
    document.getElementById("videoPlayer").src = url;
}