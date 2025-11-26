// Data
const posts = [
    { title: "1", content: "1" },
    { title: "3", content: "4" }
];

const extras = [
    { title: "5", content: "6" }
];

// DOM
const postsContainer = document.getElementById("posts-container");
const extrasContainer = document.getElementById("extras-container");
const latestPostBtn = document.getElementById("latest-post-btn");
const latestExtraBtn = document.getElementById("latest-extra-btn");
const themeToggleBtn = document.getElementById("theme-toggle");

// Load posts
function loadPosts() {
    if (!postsContainer) return;
    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsContainer.appendChild(div);
    });
}

// Load extras
function loadExtras() {
    if (!extrasContainer) return;
    extras.forEach(extra => {
        const div = document.createElement("div");
        div.className = "extra";
        div.innerHTML = `<h2>${extra.title}</h2><p>${extra.content}</p>`;
        extrasContainer.appendChild(div);
    });
}

// Theme toggle 
if (themeToggleBtn) {
    themeToggleBtn.onclick = () => {
        const body = document.body;
        const current = body.getAttribute("data-theme");

        if (current === "light") {
            body.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "Light Mode";
        } else {
            body.setAttribute("data-theme", "light");
            themeToggleBtn.textContent = "Dark Mode";
        }
    };
}

// Initialize
window.onload = () => {
    loadPosts();
    loadExtras();
};

