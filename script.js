// Blog posts
const posts = [
    {
        title: "Welcome to My Blog",
        content: "This is the first post on my blog! More content coming soon."
    },
    {
        title: "Why I Created This Blog",
        content: "I wanted a place to share my thoughts and projects. Stay tuned!"
    }
];

// Extra content
const extras = [
    {
        title: "Bonus Artwork",
        content: "Here is a small piece of extra content for the blog!"
    }
];

// DOM references
const postsContainer = document.getElementById("posts-container");
const extrasContainer = document.getElementById("extras-container");
const latestPostBtn = document.getElementById("latest-post-btn");
const latestExtraBtn = document.getElementById("latest-extra-btn");

// Load postsunction loadPosts() {
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

// Redirect buttons
latestPostBtn.onclick = () => {
    window.location.hash = "#posts";
};

latestExtraBtn.onclick = () => {
    window.location.hash = "#extras";
};

// Initialize
window.onload = () => {
    loadPosts();
    loadExtras();
};
