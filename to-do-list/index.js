// (1) input에 글을 쓰고 button을 누른다
// (2) input.value가 <ul>안의 <li>로 생성된다
// (3) input창은 defalt가 된다

// (4) ❌ 버튼을 누르면 해당 리스트가 삭제된다

const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
    // console.log(e.target);
    let txt = input.value;

    let li = document.createElement("li");
    if (txt < 1) {
        input.classList.add("error");
    } else {
        ul.appendChild(li);
        li.innerHTML = `${txt}  <button class="delBtn">❌</button>`;
        input.value = "";
        input.classList.remove("error");
    }

    delBtn = document.querySelectorAll(".delBtn");
    delBtn[delBtn.length - 1].addEventListener("click", (e) => {
        console.log(e.target);

        ul.removeChild(e.target.parentElement);
    });
});
