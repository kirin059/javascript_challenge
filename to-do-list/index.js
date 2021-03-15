  
"use strict";

const input = document.querySelector(".input");
const btn = document.querySelector("button");
const lists = document.querySelector(".lists");

btn.addEventListener("click", (e) => {
    //console.log("click");
    let txt = input.value;

    if (txt < 1) {
        input.classList.add("error");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${txt} <button class="delBtn">❌</button>`;

        list.appendChild(li);

        input.value = "";
        input.classList.remove("error");
    }

    const delBtn = document.querySelectorAll(".delBtn");

    delBtn[delBtn.length - 1].addEventListener("click", (e) => {
        console.log(e.target.parentElement);
        list.removeChild(e.target.parentElement);
    });
});

input.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
        btn.click();
    }
    return;
});