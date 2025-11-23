// Blog posts
const posts = [
    { title: "1", content: "2" },
    { title: "3", content: "4" }
];

// Extras
const extras = [
    { title: "5", content: "6" }
];

// DOM references
const postsContainer = document.getElementById("posts-container");
const extrasContainer = document.getElementById("extras-container");
const latestPostBtn = document.getElementById("latest-post-btn");
const latestExtraBtn = document.getElementById("latest-extra-btn");
const themeToggleBtn = document.getElementById("theme-toggle");

// Load posts
function loadPosts() {
    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsContainer.appendChild(div);
    });
}

// Load extras
function loadExtras() {
    extras.forEach(extra => {
        const div = document.createElement("div");
        div.className = "extra";
        div.innerHTML = `<h2>${extra.title}</h2><p>${extra.content}</p>`;
        extrasContainer.appendChild(div);
    });
}

// Scroll buttons
latestPostBtn.onclick = () => { window.location.hash = "#posts"; };
latestExtraBtn.onclick = () => { window.location.hash = "#extras"; };

// Theme toggle
themeToggleBtn.onclick = () => {
    const body = document.body;
    if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "Light Mode";
    } else {
        body.setAttribute("data-theme", "light");
        themeToggleBtn.textContent = "Dark Mode";
    }
};

// Initialize
window.onload = () => {
    loadPosts();
    loadExtras();
};

// Scroll buttons
latestPostBtn.onclick = () => { window.location.hash = "#posts"; };
latestExtraBtn.onclick = () => { window.location.hash = "#extras"; };

// Theme toggle
themeToggleBtn.onclick = () => {
    const body = document.body;
    if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "Light Mode";
    } else {
        body.setAttribute("data-theme", "light");
        themeToggleBtn.textContent = "Dark Mode";
    }
};

// Initialize
window.onload = () => {
    loadPosts();
    loadExtras();
};
