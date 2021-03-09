"use strict";

const userName = document.getElementById("username");
const email = document.getElementById("email");
const pw1 = document.getElementById("password");
const pw2 = document.getElementById("password2");
const form = document.getElementById("form");

// (1) error 함수 / success 함수 생성
// (2) (validation) username은 10글자 미만(length)
// (2) (validation) email은 @와 .com 포함
// (3) (validation) pw는 8글자 이상 15글자 미만(length)
// (4) (validation) pw1과 pw2는 일치 여부(length)
// (5) (validation) 값이 없을 때
// (6) form 을 submit(클릭) 했을 때, 전체 validation 적용해서 event 적용
// (7) 제출버튼 눌렀을 떄, validator가 유효하지 않으면 error 함수 실행
// (8) 제출버튼 눌렀을 떄, validator가 유효하면 success 함수 실행

// error 표시 구현 기능(error 메시지 포함)
function showError(input, message) {
    //console.log(input.parentElement);
    const formControl = input.parentElement;
    formControl.className = "form-control error";

    const small = formControl.querySelector("small"); // 지역변수로 선언해줘야 한다
    small.innerText = message;
}

// success 표시 구현 기능
function showSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

// label의 첫 글자를 대문자로 변환
function idName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// (validation) input 값 길이(length) 유효성 검사 (username && password)
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${idName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${idName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// (validation) email 유효성 검사
function checkEmail(input) {
    if (input.value.trim() && input.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, `${idName(input)} is not valid`);
    }
}

// (validation) Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// 값이 없을 때
function checkRequired(inputArr) {
    // 모든 input값에 다 해당하므로 배열 형태로 매개변수 넣어줌
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.length < 0) {
            //값이 없으면
            showError(input, `${idName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// 위의 함수들을 실행시켜줄 addEventListner 걸어주기 (form 에 걸어주기)
form.addEventListener("submit", function (e) {
    e.preventDefault(); // 유효성 검사가 실행되기도 전에, submit 되는 것을 막아줌

    if (!checkRequired([userName, email, pw1, pw2])) {
        // value가 존재한다면
        checkLength(userName, 3, 15);
        checkLength(pw1, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(pw1, pw2);
    }
});
