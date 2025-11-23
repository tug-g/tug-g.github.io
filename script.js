
const posts = [
    {
        title: "1",
        content: "2"
    },
    {
        title: "3",
        content: "4"
    }
];

const container = document.getElementById("posts-container");

function loadPosts() {
    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;

        container.appendChild(div);
    });
}

window.onload = loadPosts;

