"use strict";

// (1) play & stop 기능 함수 생성
// (2) 비디오창 누르면 stop (한번 더 누르면 play) >> toggle 기능
// (3) play 버튼 누르면 재생 (한번 더 누르면 일시정지)
// (4) stop 버튼 누르면 range 처음으로
// (5) 재생 range에 따라 경과시간 upload

const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const video = document.querySelector("video");
const progress = document.querySelector(".progress");
const timestamp = document.getElementById("timestamp");

// play & stop 기능
function toggleVideoStatus(e) {
    // console.log(e.target);
    if (video.paused) {
        video.play(); // 영상 재생하는 메서드
    } else {
        video.pause(); // 영상 중지하는 메서드
    }
}

video.addEventListener("click", toggleVideoStatus);
playBtn.addEventListener("click", toggleVideoStatus);

// play 버튼 누르면 재생, 한번 더 누르면 일시정지
function updateIcon(e) {
    // console.log(e.target);
    //     if (video.paused) {
    //         play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    //     } else {
    //         // 비디오가 중지되는 경우를 제외한 모든 경우(=재생)에 '일시정지'아이콘 들어가기
    //         play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    //     }
    // }
    if (video.played) {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    } else {
        // 비디오가 중지되는 경우를 제외한 모든 경우(=재생)에 '일시정지'아이콘 들어가기
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
}
playBtn.addEventListener("click", updateIcon);
video.addEventListener("click", updateIcon);
// 아래와 같이 eventListner를 걸어도 동일함
// video.addEventListener("play", updateIcon);
// video.addEventListener("pause", updateIcon);

// stop 버튼 누르면 range 처음으로
function stopVideo(e) {
    // console.log(e.target);
    video.currentTime = 0;
    // 비디오 현재 시간을 0초로 변경
    video.pause();
}
stopBtn.addEventListener("click", stopVideo);

//range 설정
video.addEventListener("timeupdate", (e) => {
    // "timeupdate" : currentTime이 변경될 때 발생하는 이벤트
    //console.log(e.target);
    progress.value = (video.currentTime / video.duration) * 100;
    // 현재 재생중인 시간  // 미디어의 재생 길이

    let mins = Math.floor(video.currentTime / 60); // 현재 시간을 60으로 나눈 몫
    if (mins < 10) {
        mins = "0" + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60); // 현재 시간을 60으로 나눈 나머지
    if (secs < 10) {
        secs = "0" + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
});

// range bar 시간 설정
timestamp.addEventListener("change", (e) => {
    // console.log(e.target);
    video.currentTime = (+timestamp.value * video.duration) / 100;
    // (진행시간 더한값 X 전체 재생길이) / 100
});
