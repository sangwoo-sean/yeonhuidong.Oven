const main = document.querySelector(".main");


const ITEMS = 7;
const MAIN1_TITLE = "Tart Cake";
const MAIN1_SUBTITLE = "Initial cake / Heart cake";

const MAIN1_STRING = [
    "연희동오븐의 모든 케이크는 당일에 제작되는 수제케이크입니다.",
    "이니셜케이크는 파트사블레아몬드로 만들어져 바삭한 타르트쿠키맛을",
    "느낄수 있으며, 타르트 사이의 크림은 크렘파티시에와 샹티크림으로 만든",
    "크렘디플로마가 필링됩니다.고메버터를 사용한 바닐라맛 이탈리안",
    "마카롱과 꼬끄, 화이트초콜릿 계절과일과 소독을 거친 생화로 장식됩니다 :)"
]


const MAIN2_SMALL_TITLE = "하트 타르트케이크";
const MAIN2_STRING = [
    "3단으로 제작되는 하트 모양의 타르트케이크입니다.",
    "1호, 2호 두가지 사이즈가 있으며 이니셜케이크와 맛은 동일합니다.",
    "-",
    "1호 : 45,000원 (지름 약 15cm)",
    "2호 : 58,000원 (지름 약 18cm)",
    "( 투명상자 리본포장은 3,000원 추가됩니다 )",
    "-",
    "더 많은 사진은 아래 버튼을 클릭해주세요 :)"
]

const MAIN3_SMALL_TITLE = "리스 하트타르트";
const MAIN3_STRING = [
    "2단으로 제작되는 하트 모양의 리스 타르트케이크입니다.",
    "3호사이즈 한 사이즈로 제작이됩니다.",
    "-",
    "3호 : 55,000원",
    "( 투명상자 리본포장은 3,000원 추가됩니다 )",
    "-",
    "더 많은 사진은 아래 버튼을 클릭해주세요 :)"
]
const MAIN4_SMALL_TITLE = "이니셜 케이크";
const MAIN4_STRING = [
    "이니셜케이크는 원하는 영문, 숫자로 만들어지는 케이크입니다.",
    "2단으로 제작되며, 1글자부터 2글자, 3글자 가능합니다.",
    "-",
    "1글자 - 35,000원 / 2글자 - 58,000원 / 3글자 - 79,000원",
    "(투명상자 리본포장 추가 +3,000원)",
    "-",
    "1글자는 2호 (케이크판 사이즈 24cm x 24cm)",
    "2자 기준으로 3호 (케이크판 사이즈 27cm x 27cm)",
    "2자 기준, 투명상자로 변경시33cm x 23cm",
    "3글자는 약 38cm x 28cm 케이크판에 제작됩니다.",
    "더 많은 사진은 아래 버튼을 클릭해주세요 :)"
]

const MAIN5_SMALL_TITLE = ["케이크 소개", "케이크 주문하기"];
const MAIN5_STRING = [
    [
        "이니셜케이크는 '생화 / 마카롱 / 꼬끄 / 과일 / 화이트초코'가 데코됩니다.",
        "원하지 않는 데코나, 추가적인 요구사항은 케이크 주문에 적어주세요.",
        "(레터링은 불가능합니다.)",
        "-",
        "색상에 대한 요구사항이 없을경우 기본색은 핑크톤으로 제작이됩니다.",
        "연희동오븐 케이크의 전체적인 색감은 은은한 파스텔톤입니다.",
        "핑크톤이 아닌 다른 색상은 여유있게 주문해주셔야합니다.",
        "'핑크 / 아이보리 / 블루 / 옐로 / 퍼플' 톤을 추천드리며,",
        "가급적 한가지 톤을 정해주셔야 케이크가 예쁘게 장식됩니다.",
        "(3일 이내인경우 원하는톤 제작이 불가능할 수 있습니다.)"],

    [
        "모든 타르트는 네이버예약을 통해 주문받고있습니다.",
        "하단의 [케이크 주문하기] 버튼을 통해 예약을 진행 하실 수 있습니다.",
        "예약 가능 시간은 '화-일, 10:00 ~ 19:00'입니다.",
        "주문서 작성을 통해 예약을 완료하신 후, 안내된 계좌로 입금을",
        "완료해주시면 예약이 확정됩니다. 예약후 꼭 플러스친구 메세지 부탁드립니다.",
        "(당일 미입금시 자동 취소됩니다.)",
        "-",
        "케이크 주문이 불가능한경우나 문의사항이 있는경우,",
        "카카오톡 플러스친구로 1:1 문의를 주시면 예약 도와드리겠습니다 :)",
        "(좌측 1:1 문의페이지를 누르시면 카카오톡 대화로 연결됩니다.)"]
]

const MAIN6_SMALL_TITLE = "케이크 설명 및 보관방법";
const MAIN6_STRING = [
    "* 케이크는 시간에 맞추어 제작이됩니다. 꼭 시간을 맞추어 방문해주세요.",
    "* 연희동오븐의 모든 케이크는 당일에 제작되는 수제케이크입니다.",
    "   보존제가 들어가지 않기때문에 가급적 픽업 당일에 드시는것을 권해드립니다. ",
    "* 케이크는 꼭 냉장보관을 해주셔야합니다. ",
    "* 데코되는 꽃과 나뭇잎은 소독을 하여 올라가는 생화입니다. ",
    "   케이크 드실때 꼭 제거하고 드셔야합니다 :)",
    "* 케이크는 케이크판에 화이트초코로 고정이 되어있습니다. ",
    "   다만 크림이 흔들릴 수 있기때문에,꼭 기울어지지 않게 이동해주셔야합니다.",
    "* 픽업 이후 1시간 이내 냉장 보관을 해주세요. 상온에 1시간 이상 있어야할 경우, ",
    "  보냉제와 보냉가방을 지참해주실것을 권해드리고 있습니다. ",
    "   보냉가방과 보냉제가 필요하신 경우 미리 말씀해주세요 :)",
    "* 케이크는 직접 픽업해주셔야 합니다. 퀵배송은 다마스퀵으로만 가능하며, ",
    "   직접 접수하셔서 픽업시간 기준으로 주문해주시면 기사님께 전달 해 드리고 ",
    "   있습니다. (퀵배송으로 인해 발생하는 문제에 대해서는 보장해드리지 않습니다.)",
]

const MAIN7_SMALL_TITLE = "예약환불규정";
const MAIN7_STRING = [
    "* 예약이후 날짜 및 시간 변경 절대 불가능합니다. (날짜변경 수수료 30% 추가됩니다.)",
    "* 케이크 픽업 10일전부터 - 5일전까지는 70% 환불해드리고 있으며, ",
    "    이후에는 환불이 불가능합니다. 환불 및 날짜 변경은 카카오톡으로 문의주세요.",
    "* 예약일 5일 전부터는 날짜 및 시간 변경 절대 불가능합니다"
]


function createMainItem1() {
    const mainItem1 = document.querySelector(".mainItem1");

    const title = document.createElement("span");
    const subtitle = document.createElement("span");
    title.className = "title";
    subtitle.className = "subtitle";
    title.innerText = MAIN1_TITLE;
    subtitle.innerText = MAIN1_SUBTITLE;
    mainItem1.appendChild(title);
    mainItem1.appendChild(subtitle);

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

    const IMG_URL = "//cdn.quv.kr/mzdpko2b0/up/5e4ea2f57528a_800.jpg"
    const IMG = document.createElement("img");
    IMG.src = IMG_URL;
    mainItem2.appendChild(IMG);

    const small_title = document.createElement("div");
    small_title.innerText = MAIN2_SMALL_TITLE;
    small_title.className = "smallTitle";
    mainItem2.appendChild(small_title);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN2_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN2_STRING[i];
        if (i >= 3 && i <= 4) {
            span.className = "bold";
        }
        body.appendChild(span);
    }
    mainItem2.appendChild(body);

    const button = document.createElement("div");
    button.innerText = "+ more";
    button.className = "button";
    mainItem2.appendChild(button);
}

function createMainItem3() {
    const mainItem3 = document.querySelector(".mainItem3");

    const IMG_URL = "//cdn.quv.kr/mzdpko2b0/up/5e53a4006dfb5_800.jpg"
    const IMG = document.createElement("img");
    IMG.src = IMG_URL;
    mainItem3.appendChild(IMG);

    const small_title = document.createElement("div");
    small_title.innerText = MAIN3_SMALL_TITLE;
    small_title.className = "smallTitle";
    mainItem3.appendChild(small_title);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN3_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN3_STRING[i];
        if (i === 3) {
            span.className = "bold";
        }
        body.appendChild(span);
    }
    mainItem3.appendChild(body);

    const button = document.createElement("div");
    button.innerText = "+ more";
    button.className = "button";
    mainItem3.appendChild(button);
}

function createMainItem4() {
    const mainItem4 = document.querySelector(".mainItem4");

    const IMG_URL = "//cdn.quv.kr/mzdpko2b0/up/5e5209e363f5f_800.jpg"
    const IMG = document.createElement("img");
    IMG.src = IMG_URL;
    mainItem4.appendChild(IMG);

    const small_title = document.createElement("div");
    small_title.innerText = MAIN4_SMALL_TITLE;
    small_title.className = "smallTitle";
    mainItem4.appendChild(small_title);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN4_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN4_STRING[i];
        if (i >= 3 && i <= 4) {
            span.className = "bold";
        }
        body.appendChild(span);
    }
    mainItem4.appendChild(body);

    const button = document.createElement("div");
    button.innerText = "+ more";
    button.className = "button";
    mainItem4.appendChild(button);
}

function createMainItem5() {
    const mainItem5 = document.querySelector(".mainItem5");

    for (j = 0; j < MAIN5_SMALL_TITLE.length; j++) {

        const small_title = document.createElement("div");
        small_title.innerText = MAIN5_SMALL_TITLE[j];
        small_title.className = "smallTitle";
        mainItem5.appendChild(small_title);

        const body = document.createElement("div");
        body.className = "desc";
        for (i = 0; i < MAIN5_STRING[j].length; i++) {
            const span = document.createElement("span");
            span.innerText = MAIN5_STRING[j][i];
            body.appendChild(span);
        }
        mainItem5.appendChild(body);

    }
    const button = document.createElement("div");
    button.innerText = "케이크 주문하기";
    button.className = "button";
    mainItem5.appendChild(button);
}

function createMainItem6() {
    const mainItem6 = document.querySelector(".mainItem6");
    const small_title = document.createElement("div");
    small_title.innerText = MAIN6_SMALL_TITLE;
    small_title.className = "smallTitle";
    mainItem6.appendChild(small_title);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN6_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN6_STRING[i];
        body.appendChild(span);
    }
    mainItem6.appendChild(body);
}

function createMainItem7() {
    const mainItem7 = document.querySelector(".mainItem7");
    const small_title = document.createElement("div");
    small_title.innerText = MAIN7_SMALL_TITLE;
    small_title.className = "smallTitle refundRull";
    mainItem7.appendChild(small_title);

    const body = document.createElement("div");
    body.className = "desc";
    for (i = 0; i < MAIN7_STRING.length; i++) {
        const span = document.createElement("span");
        span.innerText = MAIN7_STRING[i];
        body.appendChild(span);
    }
    mainItem7.appendChild(body);
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
    createMainItem6();
    createMainItem7();

}


function init() {
    loadMains();
}

init();