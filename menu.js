const menuBar = document.querySelector(".menu-tab");
const hamburgerBtn = document.querySelector(".hamburger-button");
const SNS = document.querySelector(".social-network");


const MEDIAS = [
    "http://yeonhuidongoven.com/img/sc/sns/icon/Square-Color-30/Naver.png",
    "http://yeonhuidongoven.com/img/sc/sns/icon/Square-Color-30/KakaoTalk.png",
    "http://yeonhuidongoven.com/img/sc/sns/icon/Square-Color-30/Instagram.png"]
const MENUS = [
    "yeonhuidong.Oven",
    "Order cake",
    "Tart",
    "Baking class",
    "Q&A",
    "1:1 문의",
    "Tart Order"]

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