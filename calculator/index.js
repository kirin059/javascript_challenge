// (1) (입력기능) 버튼을 누르면 입력창에 입력되도록(숫자와 연산자)
// (2) (연산기능) = 버튼을 누르면 계산되도록
// (3) (삭제기능) AC버튼은 전체 삭제, del버튼은 오른쪽부터 삭제

const numbers = document.querySelectorAll(".number"); // 복수이기 때문에 배열로 받아짐
const operators = document.querySelectorAll(".operator");
const pre = document.querySelector(".previous");
const crr = document.querySelector(".current");

//(1) (입력기능)
const btnClick = () => {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", (e) => {
            //console.log(e.target.value);
            crr.value += e.target.value;
        });
    }

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", (e) => {
            //console.log(e.target.value);
            crr.value += e.target.value;
        });
    }
};
btnClick();

//(2) (연산기능)
const result = document.querySelector(".result");
result.addEventListener("click", (e) => {
    pre.value = crr.value;
    crr.value = eval(crr.value);
});

//(3) (삭제기능)
const AC = document.querySelector(".clear");
AC.addEventListener("click", (e) => {
    pre.value = "";
    crr.value = "";
});

const del = document.querySelector(".del");
del.addEventListener("click", (e) => {
    crr.value = crr.value.slice(btnClick.length, -1);
});
