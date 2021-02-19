const menuBar = document.querySelector(".menu-tab");
const hamburgerBtn = document.querySelector(".hamburger-button");
const SNS = document.querySelector(".social-network");
const path = window.location.pathname;

const MEDIAS = [
    "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1504499304/in36bktetqoapibgeabo.png",
    "data:image/png;base64,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",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"]
const MENUS = [
    "yeonhuidong.Oven",
    "Order cake",
    "Tart",
    "Baking class",
    "Q&A",
    "1:1 문의",
    "Tart Order"]
const PAGES = [
    "/",
    "./yeonhuidong.Oven/pages/order.html",
    "./yeonhuidong.Oven/pages/tart.html",
    "./yeonhuidong.Oven/pages/bakingClass.html",
    "./yeonhuidong.Oven/pages/QNA.html",
    "./yeonhuidong.Oven/pages/query.html",
    "./yeonhuidong.Oven/pages/tartOrder.html"
]


function createHamburger() {
    const hamburgerLine1 = document.createElement("div");
    const hamburgerLine2 = document.createElement("div");
    const hamburgerLine3 = document.createElement("div");
    hamburgerLine1.className = "hamburger_line";
    hamburgerLine2.className = "hamburger_line";
    hamburgerLine3.className = "hamburger_line";
    hamburgerBtn.appendChild(hamburgerLine1);
    hamburgerBtn.appendChild(hamburgerLine2);
    hamburgerBtn.appendChild(hamburgerLine3);
}

function createMenus() {
    const ul = document.createElement("ul");

    for (i = 0; i < MENUS.length; i++) {
        const li = document.createElement("li");
        const tab = document.createElement("a");
        li.className = "menu-item";
        tab.innerText = MENUS[i];
        tab.href = PAGES[i];
        if (path === PAGES[i]) {
            tab.style.color = "rgba(0, 0, 0, 0.6)";
        }
        li.appendChild(tab);
        ul.className = "menu-items";
        ul.appendChild(li);
    }
    menuBar.appendChild(ul);

}

function createSNS() {
    const ul = document.createElement("ul");

    for (i = 0; i < MEDIAS.length; i++) {
        const li = document.createElement("li");
        const tab = document.createElement("img");
        li.className = "sns-item";
        tab.src = MEDIAS[i];
        li.appendChild(tab);
        ul.className = "sns-items";
        ul.appendChild(li);
    }
    SNS.appendChild(ul);
}

function loadMenus() {
    createHamburger();
    createMenus();
    createSNS();
}

function init() {
    loadMenus();
}

init();