
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

async function listFiles(type) {
    const url = `https://api.github.com/repos/tug-g/tug-g.github.io/contents/${type}`;
    const res = await fetch(url);
    return await res.json();
}

async function loadMarkdown(type, filename) {
    const url = `https://raw.githubusercontent.com/Ytug-g/tug-g.github.io/main/${type}/${filename}`;
    const res = await fetch(url);
    return await res.text();
}

function mdToHtml(md) {
    return md
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/gim, "<em>$1</em>")
        .replace(/---/gim, "<hr>")
        .replace(/\n/gim, "<br>");
}

const listContainer = document.getElementById("list-container");
const viewContent = document.getElementById("view-content");

// Posts/extras listing page
if (listContainer) {
    const type = document.title.includes("Extras") ? "extras" : "posts";

    listFiles(type).then(files => {
        files.forEach(file => {
            if (file.name.endsWith(".md")) {
                const item = document.createElement("div");
                item.classList.add("list-item");

                const title = file.name.replace(".md", "").replace(/-/g, " ");

                item.innerHTML = `
                    <a href="view.html?type=${type}&file=${file.name}">
                        ${title}
                    </a>
                `;

                listContainer.appendChild(item);
            }
        });
    });
}

// View page
if (viewContent) {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const file = params.get("file");

    loadMarkdown(type, file).then(md => {
        document.getElementById("view-title").textContent =
            file.replace(".md", "").replace(/-/g, " ");
        viewContent.innerHTML = mdToHtml(md);
    });
}
