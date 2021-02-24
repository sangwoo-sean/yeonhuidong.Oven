const main = document.querySelector(".main");

TOP_TITLE = [
    "Baking Class"
]

TOP_STRING = [
    "연희동오븐의 베이킹클래스는 원데이로 이루어집니다.",
    "월별로 공지가 이루어지며 다양한 종류의 베이킹 수업이 진행되고 있습니다.",
    "-",
    "정규 수업 최대 정원은 3명입니다.",
    "모든 베이킹 클래스는 처음 재료소개부터 완성까지",
    "실습으로 진행되며, 수업의 일부 과정만 시연이 있을 수 있습니다."
]

TOP_STRING_BOTTOM = [
    "코로나로 인해 2020년 9월부로 베이킹클래스는",
    "잠시 쉬어가겠습니다. 양해 부탁드립니다."
]

IMAGES = [
    "//cdn.quv.kr/mzdpko2b0/up/5e4e8eeab8319_1920.jpg",
    "//cdn.quv.kr/mzdpko2b0/up/5e4e8f43c8315_1920.jpg",
    "//cdn.quv.kr/mzdpko2b0/up/5e4e8f43c473b_1920.jpg"
]

function createTop() {
    //위에 글
    const topItem = document.createElement("div");
    topItem.className = "top mainItem";

    const title = document.createElement("span"); //타이틀
    title.className = "title";
    title.innerText = TOP_TITLE;
    topItem.appendChild(title);

    const body = document.createElement("div"); // 설명
    body.className = "desc";
    for (i = 0; i < TOP_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = TOP_STRING[i];
        body.appendChild(span);
    }
    topItem.appendChild(body);

    //사진
    const image_container = document.createElement("div");
    image_container.className = "image-container";

    for (i = 0; i < IMAGES.length; i++) {
        const image = document.createElement("img");
        image.className = "image hidden";
        image.src = `${IMAGES[i]}`;
        image_container.appendChild(image);
    }

    topItem.appendChild(image_container);

    // 아래 글
    const button = document.createElement("div");
    button.className = "button";
    button.innerText = "코로나로 인해 잠시 쉬어갑니다.";
    topItem.appendChild(button);


    const body_bottom = document.createElement("div"); // 설명
    body_bottom.className = "desc";
    for (i = 0; i < TOP_STRING_BOTTOM.length; i++) {
        const span = document.createElement("span");
        span.innerText = TOP_STRING_BOTTOM[i];
        body_bottom.appendChild(span);
    }
    topItem.appendChild(body_bottom);


    main.appendChild(topItem);

    createLine()
}

function slider() {
    const imageContainer = document.querySelector(".image-container");
    const buttons = document.createElement("div");
    buttons.className = "button-container";
    for (i = 0; i < IMAGES.length; i++) {
        const button = document.createElement("div");
        button.className = "dot-button";
        button.addEventListener("click", changeImage);
        buttons.appendChild(button);
    }

    imageContainer.firstChild.classList.remove("hidden");
    buttons.firstChild.classList.add("showing");

    imageContainer.appendChild(buttons);

}


function changeImage(event) {
    const imageContainer = document.querySelector(".image-container");
    const buttonContainer = document.querySelector(".button-container");
    const images = [...imageContainer.children].slice(0, IMAGES.length);
    const buttons = [...buttonContainer.children];
    const target = event.target;
    const index = buttons.indexOf(target);


    buttons.forEach(button => {
        if (button === target) {
            button.classList.add("showing");
        } else {
            button.classList.remove("showing");
        }
    });

    images.forEach(image => {
        const idx = images.indexOf(image);
        if (idx === index) {
            image.classList.remove("hidden");
        } else {
            image.classList.add("hidden");
        }
    });

}


function createLine() {
    const lineDiv = document.createElement("div");
    lineDiv.className = "seperate-line";
    main.appendChild(lineDiv);
}

function loadMains() {
    createTop();

}


function init() {
    loadMains();
    slider();
}

init();