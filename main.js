const main = document.querySelector(".main")


const MAIN_LOGO = "http://cdn.quv.kr/mzdpko2b0/up/5e4e8285ab55d_1920.png"

const ITEMS = 5
const MAIN1_TITLE = "yeonhuidong.Oven"
const MAIN1_STRING = [
    "연희동에 위치한 베이킹스튜디오 연희동오븐은",
    "누구에게나 특별한 기억으로 남을 수 있는 디저트를 만들고있습니다. "
]

const MAIN2_STRING = [
    "베이킹스튜디오 연희동오븐은",
    "한사람을 위한 이니셜케이크와 하트타르트케이크를 만들고,",
    "시즌별로 바뀌는 타르트와 티케이크등의 디저트를 주문제작합니다.",
    "-",
    "또한 월별로 공지되는 베이킹클래스를 통해",
    "누구나 즐길 수 있는 원데이 베이킹클래스를 운영하고 있습니다 :)",
]

const MAIN3_STRING = [
    "한 사람을 위해 특별히 제작되는 이니셜케이크와 하트케이크는",
    "마카롱과 과일, 생화로 데코가 되어지는 타르트케이크입니다."
]

const MAIN4_STRING = [
    "평범한 날도 소소하게 기념할 수 있도록,",
    "연희동오븐의 디저트, 타르트와 마카롱 입니다."
]

const MAIN5_STRING = [
    "달마다 공지되는 연희동오븐의 베이킹클래스는 ",
    "누구나 즐길수 있는 원데이 클래스입니다.",
    "연희동오븐의 시그니처 타르트를 포함한",
    "다양한 디저트들을 만들어보는 실습 수업입니다.",
    "수업메뉴와 일정은 매 달 21일, 블로그에 공지가됩니다."
]

function createMainItem1() {
    const mainItem1 = document.querySelector(".mainItem1");

    const LOGO = document.createElement("img");
    LOGO.src = MAIN_LOGO;
    LOGO.className = "main-logo";
    mainItem1.appendChild(LOGO);

    const title = document.createElement("span");
    title.className = "title";
    title.innerText = MAIN1_TITLE;
    mainItem1.appendChild(title);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN1_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN1_STRING[i];
        body.appendChild(span);
    }
    mainItem1.appendChild(body);
}

function createMainItem2() {
    const mainItem2 = document.querySelector(".mainItem2");

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN2_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN2_STRING[i];
        body.appendChild(span);
    }
    mainItem2.appendChild(body);
}

function createMainItem3() {
    const mainItem3 = document.querySelector(".mainItem3");

    const IMG_URL = "http://cdn.quv.kr/mzdpko2b0%2Fup%2F5e5403c8d0888_1920.jpg"
    const IMG = document.createElement("img");
    IMG.src = IMG_URL;
    mainItem3.appendChild(IMG);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN3_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN3_STRING[i];
        body.appendChild(span);
    }
    mainItem3.appendChild(body);

    const button = document.createElement("div");
    button.innerText = "케이크 소개";
    button.className = "button";
    mainItem3.appendChild(button);
}

function createMainItem4() {
    const mainItem4 = document.querySelector(".mainItem4");

    const IMG_URL = "http://cdn.quv.kr/mzdpko2b0/up/5f0f23532437b_1920.jpeg"
    const IMG = document.createElement("img");
    IMG.src = IMG_URL;
    mainItem4.appendChild(IMG);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN4_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN4_STRING[i];
        body.appendChild(span);
    }
    mainItem4.appendChild(body);

    const button = document.createElement("div");
    button.innerText = "디저트 소개";
    button.className = "button";
    mainItem4.appendChild(button);
}

function createMainItem5() {
    const mainItem5 = document.querySelector(".mainItem5");

    const IMG_URL = "http://cdn.quv.kr/mzdpko2b0/up/5e52866701f6c_1920.jpeg"
    const IMG = document.createElement("img");
    IMG.src = IMG_URL;
    mainItem5.appendChild(IMG);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN5_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN5_STRING[i];
        body.appendChild(span);
    }
    mainItem5.appendChild(body);

    const button = document.createElement("div");
    button.innerText = "베이킹클래스 소개";
    button.className = "button";
    mainItem5.appendChild(button);
}

function createLine() {
    const mainItem = document.createElement("div");
    mainItem.className = "seperate-line";
    main.appendChild(mainItem);
}

function loadMains() {
    for (i = 0; i < ITEMS; i++) {
        const mainItem = document.createElement("div");
        mainItem.className = `mainItem${i + 1} mainItem`;
        main.appendChild(mainItem);
        if (i != ITEMS - 1) {
            createLine();
        }
    }
    createMainItem1();
    createMainItem2();
    createMainItem3();
    createMainItem4();
    createMainItem5();

}


function init() {
    loadMains();
}

init();