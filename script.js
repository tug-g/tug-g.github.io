
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
    toggleBtn.onclick = () => {
        const current = body.getAttribute("data-theme");
        const next = current === "light" ? "dark" : "light";
        body.setAttribute("data-theme", next);
        toggleBtn.textContent = next === "dark" ? "Light Mode" : "Dark Mode";
        localStorage.setItem("theme", next);
    };
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    if (toggleBtn) toggleBtn.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
}

// markdown parser
function mdToHtml(md) {
    return md
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/gim, "<em>$1</em>")
        .replace(/---/gim, "<hr>")
        .replace(/\n/gim, "<br>");
}

// fetch
async function loadList(type) {
    const url = `https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/${type}/index.json`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const list = await res.json();
    return list;
}

async function loadMarkdown(type, filename) {
    const url = `https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/${type}/${filename}`;
    const res = await fetch(url);
    return await res.text();
}

// list
const listContainer = document.getElementById("list-container");
const viewContent = document.getElementById("view-content");

if (listContainer) {
    const type = document.title.includes("Extras") ? "extras" : "posts";
    loadList(type).then(items => {
        items.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("list-item");
            div.innerHTML = `<a href="view.html?type=${type}&file=${item.filename}">${item.title}</a>`;
            listContainer.appendChild(div);
        });
    });
}

// view
if (viewContent) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const file = params.get("file");

    loadMarkdown(type, file).then(md => {
        document.getElementById("view-title").textContent = file.replace(".md", "").replace(/-/g, " ");
        viewContent.innerHTML = mdToHtml(md);
    });
}
