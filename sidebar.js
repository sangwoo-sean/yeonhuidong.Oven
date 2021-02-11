const sidenav = document.querySelector("nav");
const body = document.querySelector(".body");
const openBtn = document.querySelector(".hamburger-button");


const SIDEMENUS = [
    "yeonhuidong.Oven",
    "Order cake",
    "Tart",
    "Baking class",
    "Q&A",
    "1:1 문의",
    "Tart Order"]


function createSidebar() {
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";

    const top = document.createElement("div");
    const closeBtn = document.createElement("div");
    top.className = "close-btn";
    closeBtn.innerText = "x";
    closeBtn.addEventListener("click", closeSidebar);

    top.appendChild(closeBtn);
    sidebar.appendChild(top);

    const rest = document.createElement("ul");
    rest.className = "sidebar-menu";
    for (i = 0; i < SIDEMENUS.length; i++) {
        const menu = document.createElement("li");
        menu.innerText = SIDEMENUS[i];
        rest.appendChild(menu);
    }

    sidebar.appendChild(rest);
    sidenav.appendChild(sidebar);

}

function openSidebar() {
    sidenav.classList.add("active");
}

function closeSidebar() {
    sidenav.classList.remove("active");
}

function init() {
    openBtn.addEventListener("click", openSidebar);
    createSidebar();
}

init();