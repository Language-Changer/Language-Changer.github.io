
//播放
function play(){
    var video = document.getElementById("videoPlayer");
    video.play();
}

//暂停
function pause(){
    var video = document.getElementById("videoPlayer");
    video.pause();
}

//停止
function stop(){
    var video = document.getElementById("videoPlayer");
    video.pause();
    video.currentTime = 0;
}

//快放
function speedUp(){
    var video = document.getElementById("videoPlayer");
    video.play();
    video.playbackRate = 2;
}

//慢放
function slowDown(){
    var video = document.getElementById("videoPlayer");
    video.play();
    video.playbackRate = 0.5;
}

//正常速度
function normalSpeed(){
    var video = document.getElementById("videoPlayer");
    video.play();
    video.playbackRate = 1;
}

//进度条相关
function progressUpdate(){
    var video = document.getElementById("videoPlayer");

    //动态设置进度条
    var postionBar = document.getElementById("positionBar");
    postionBar.style.width = (video.currentTime / video.duration * 100) + "%";

    //设置播放时间
    displayStatus.innerHTML = (Math.round(video.currentTime*100)/100) + "秒";
}