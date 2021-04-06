'use strict';

// 1) 버튼 입력 기능
// 2) 연산 기능  >> 식과 값 input 분리하기
// 3) AC 기능
// 4) del 기능

const num = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".cal")

const next = document.querySelector(".next");
const pre = document.querySelector(".previous");

// 숫자버튼+연산버튼 누르면 input에 입력되도록 하는 함수
const btnClick = () => {
    for (let i = 0; i < num.length; i++) {
        num[i].addEventListener('click', e => {
            // console.log(e.currentTarget)
            next.value = (next.value += e.target.value).toLocaleString();
        })
    }

    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', e => {
            next.value = (next.value += e.target.value)
        })
    }
}
btnClick()


// 연산 기능
const result = document.querySelector('.result');

const resultNumber = () => {
    result.addEventListener('click', e => {
        // console.log(e.target)
        pre.value = next.value;
        next.value = eval(next.value).toLocaleString();
    })
}
resultNumber()



// 초기화(AC)기능
const reset = document.querySelector('.clear')
// console.log(reset)

const resetAll = () => {
    reset.addEventListener('click', e => {
        pre.value = '';
        next.value = '';
    })
}
resetAll()

// 삭제(del) 기능
const del = document.querySelector('.del');

const deleteValue = () => {
    del.addEventListener('click', e => {
        next.value = next.value.slice(btnClick.length, -1)
    })
}
deleteValue()