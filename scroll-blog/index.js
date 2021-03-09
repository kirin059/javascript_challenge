const postsContainer = document.getElementById("posts-container"); // 불러올 포스트s
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter"); // input

let limit = 5;
let page = 1;

// Fetch posts from API
async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await res.json();

    return data;
}

// Show posts in DOM
// getPosts() 함수를 불러온 뒤, async/await을 활용하여 비동기 처리 해준다
async function showPosts() {
    const posts = await getPosts();

    posts.forEach((post) => {
        const postEl = document.createElement("div");

        postEl.classList.add("post"); // fetch로 불러온 data를 posts로 담아주고, 이를 div(postEl)안에 넣어준다
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
      `;

        postsContainer.appendChild(postEl);
    });
}

// Show loader & fetch more posts
function showLoading() {
    loading.classList.add("show"); // 로딩바 나타나기

    setTimeout(() => {
        loading.classList.remove("show");

        setTimeout(() => {
            page++; // 0.3초 후에 페이지 1개 나타나고
            showPosts();
        }, 300);
    }, 1000); // 1초 후에 로딩바 제거하기
}

// Filter posts by input
function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll(".post");

    posts.forEach((post) => {
        const title = post.querySelector(".post-title").innerText.toUpperCase();
        const body = post.querySelector(".post-body").innerText.toUpperCase();

        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
}

// Show initial posts
showPosts();

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

filter.addEventListener("input", filterPosts);
