"use strict";

const video = document.querySelector(".screen");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector(".progress");
const timestamp = document.querySelector("#timestamp");

// 비디오 화면 누르면 play, 한번 더 누르면 paused
function toggleVideoBtnStatus(e) {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
video.addEventListener("click", toggleVideoBtnStatus);

// 비디오 화면 누르면 play, 한번 더 누르면 paused
function toggleVideoStatus(e) {
    console.log(e);
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
play.addEventListener("click", toggleVideoStatus);

// update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);

// Stop video
function stopVideo(e) {
    // console.log(e);
    video.currentTime = 0;
    video.pause();
}
stop.addEventListener("click", stopVideo);

// Set video time to progress
function progressStatus(e) {
    video.currentTime = (+progress.value * video.duration) / 100;
}

progress.addEventListener("change", progressStatus);

// 비디오의 재생 위치가 변경 될 때 timeupdate 이벤트가 발생
video.addEventListener("timeupdate", (e) => {
    console.log(e.target);
    // 재생 슬라이드 bar (currentTime 속성은, 현재 재생중인 시간을 뜻한다)
    progress.value = (video.currentTime / video.duration) * 100;

    // 재생 시간 표시
    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = "0" + String(mins); // 10 미만은 1자리이기 때문에 앞에 0을 붙여준다
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = "0" + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
});