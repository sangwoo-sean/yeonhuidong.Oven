const main = document.querySelector(".main");

TOP_TITLE = [
    "Tart"
]

TOP_STRING = [
    "시즌에 따라 다양한 타르트와 마카롱을 구워내고 있습니다.",
    "현재 시즌타르트는 딸기타르트입니다.",
    "",
    "딸기타르트 / 머랭타르트 / 쑥타르트 / 티라미수타르트",
    "네종류의 타르트가 준비되고 있습니다",
    "-",
    "마카롱은 네가지맛의 마카롱이 준비되어있습니다.",
    "바닐라 / 라즈베리 / 인절미 / 와인무화과."
]



TEMPLATES = [
    [// 1

        "//cdn.quv.kr/mzdpko2b0%2Fup%2F5fc6401ac5258_800.jpg",
        "딸기타르트",
        [
            "색소를 이용하지 않은 붉은 타르트로 제작되는 딸기타르트는",
            "라즈베리 필링과, 다크 크런치가 인서트 되어있으며,",
            "달콤한 마스카포네 크림치즈가 필링됩니다.",
            "",
            "지름 약 8cm로, 기존의 과일타르트 사이즈보다 큰 사이즈로 제작이됩니다.",
            "낱개로도 포장이 가능하며, 3구는 맞춤 상자에 포장이됩니다."
        ],
        [
            "딸기타르트 - 6,500원",
            "딸기타르트 3구 - 19,500원"
        ]

    ],
    [// 2

        "//cdn.quv.kr/mzdpko2b0/up/5fcdcaaa5c492_800.jpeg",
        "딸기타르트 1호",
        [
            "미니 딸기타르트와 동일한 라즈베리 필링과, 다크 크런치가 인서트 되어있으며,",
            "달콤한 마스카포네 크림치즈가 필링됩니다.",
            "",
            "지름 약 15cm로, 1호 케이크 사이즈입니다."
        ],
        [
            "딸기타르트 1호 - 30,000원",
            "(투명상자 3,000원 추가)"
        ]

    ],
    [// 3

        "//cdn.quv.kr/mzdpko2b0%2Fup%2F60236a0a18fd0_800.jpg",
        "머랭 / 티라미슈 / 쑥 타르트",
        ["머랭타르트는 비스퀴아몬드, 프랄리네옥튜즈,",
            "샹티크림이 인서트되며 이탈리안 머랭이 올라가 달콤함을 느낄 수 있습니다.",
            "",
            "티라미슈타르트는 비스퀴쇼콜라, 다크가나슈와 카카오닙스",
            "샹티크림이 인서트되며, 마스카포네 크림과 진한 발로나코코아가 데코됩니다.",
            "",
            "쑥 타르트는 앙버터크림과 제주쑥인절미 크럼블이 인서트되며",
            "쑥 마스카포네 크림이 올라가 깊은 쑥 향을 느낄 수 있습니다."],
        ["타르트 - 6,500원",
            "타르트 3구 - 19,500원"]

    ],
    [// 4

        "//cdn.quv.kr/mzdpko2b0%2Fup%2F5fc641ee15f7f_800.jpg",
        "마카롱",
        ["바닐라, 라즈베리, 인절미, 와인무화과 4가지맛으로 구성이되어있습니다.",
            "4가지맛을 한세트로 판매중이며 예약 없이도 매장에서 구매가 가능합니다."],
        ["마카롱 - 2,500원",
            "4가지맛 마카롱 - 10,000원 (4구 투명상자포장)"]

    ]
]

function createTop() {
    const topItem = document.createElement("div");
    topItem.className = `top mainItem`;

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

    main.appendChild(topItem);
    createLine()
}

function createMainItems() {

    for (i = 0; i < TEMPLATES.length; i++) {
        const Items = document.createElement("div");
        Items.className = `mainItem${i + 1} mainItem`;
        main.appendChild(Items);
        createLine();
    }
    for (i = 0; i < TEMPLATES.length; i++) {
        const thisItem = document.querySelector(`.mainItem${i + 1}`);


        const imageDiv = document.createElement("div");
        const image = document.createElement("img"); // 이미지
        imageDiv.className = "productImage";
        image.src = TEMPLATES[i][0];
        // image.style.backgroundImage = `url(${TEMPLATES[i][0]})`;
        imageDiv.appendChild(image);
        thisItem.appendChild(imageDiv);

        const subtitle = document.createElement("div"); // 부제
        subtitle.className = "subTitle";
        subtitle.innerText = TEMPLATES[i][1];
        thisItem.appendChild(subtitle);

        const body = document.createElement("div");
        body.className = "desc";
        for (j = 0; j < TEMPLATES[i][2].length; j++) { // 설명
            const span = document.createElement("span");
            span.innerText = TEMPLATES[i][2][j];
            body.appendChild(span);
        }
        for (j = 0; j < TEMPLATES[i][3].length; j++) { // 가격
            const span = document.createElement("span");
            span.innerText = TEMPLATES[i][3][j];
            span.className = "bold";
            body.appendChild(span);
        }
        thisItem.appendChild(body);

    }
}

function createLine() {
    const lineDiv = document.createElement("div");
    lineDiv.className = "seperate-line";
    main.appendChild(lineDiv);
}

function loadMains() {
    createTop();
    createMainItems();

}


function init() {
    loadMains();
}

init();