'use strict';

const operator = document.querySelectorAll(".operator"); // 연산자
const numBtn = document.querySelectorAll(".number"); // 숫자(0~9)
const input = document.querySelector(".input"); // 입력란


const previous = document.querySelector(".previous");
const current = document.querySelector(".current");


// 숫자 및 연산자는 "배열"로 받아진다(querySelectorAll)

// 버튼 클릭 시, 입력창에 입력 기능
const btnClick = () => {
    for (let i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener("click", function (e) {
            //console.log(e.target);
            current.value = (current.value += e.target.value).toLocaleString();
        });
    }

    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function (e) {
            //console.log(e.target);
            current.value += e.target.value;
        });
    }
};
btnClick();

// 연산 기능
const resultBtn = document.querySelector(".result");

resultBtn.addEventListener("click", (e) => {
    previous.value = current.value;
    current.value = eval(current.value).toLocaleString();
});

// 초기화(AC) 기능
const reset = document.querySelector(".clear");

reset.addEventListener("click", (e) => {
    previous.value = "";
    current.value = "";
});

// delete 기능
const del = document.querySelector(".del");

del.addEventListener("click", (e) => {
    current.value = current.value.slice(handleNumber.length, -1);
});