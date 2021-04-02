

"use strict";

const form = document.getElementById("login_form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// input에 error메시지(+ outline) 뜨는 함수 기능 구현
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error"; // css 적용

    const small = formControl.querySelector("small");
    small.innerText = message;
}

// input에 success outline 뜨는 함수 기능 구현
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// id를 대문자로 변환하여 텍스트 출력
function idName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// email 유효성 검사
function checkEmail(input) {
    if (input.value.trim() && input.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, `${idName(input)} is not valid`);
    }
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.length < 0) {
            //값이 없으면
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Get fieldname
function getFieldName(input) {
    console.log(input);
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }
});



// form의 submit을 눌렀을 때, 발생하는 success와 error메시지 관련 기능 구현
// 전체 input중에서 하나라도 정상입력이 아닐 경우, 해당 함수들이 실행
// 정상이면 초록색이 뜨고, 정상이 아닌 값에 대해선는 빨간색(error)이 뜬다