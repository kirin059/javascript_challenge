
"use strict";

const input = document.querySelector(".input");
const btn = document.querySelector("button");
const lists = document.querySelector(".lists");

btn.addEventListener("click", (e) => {
    // console.log(e);
    let txt = input.value;

    if (txt < 1) {
        input.classList.add("error");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = `${txt} <button class="delBtn">❌</button>`;

        lists.appendChild(li);

        input.value = "";
        input.classList.remove("error");
    }

    const delBtn = document.querySelectorAll(".delBtn");

    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", (e) => {
            //console.log(e.currentTarget)
            console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
        });
    }
});

input.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
        btn.click();
    }
    return;
});