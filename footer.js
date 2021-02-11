const footer = document.querySelector("footer")
const IMAGE_URL = "http://cdn.quv.kr/mzdpko2b0/up/5e4ead274c486_1920.png"
const INFOS = [
    "상호 : 연희동오븐｜ 대표 : 박경수",
    "소재지 : 서울 서대문구 연희로 11나길 7-5 신관 지1층 연희동오븐",
    "사업자등록번호 : 535-51-00342",
    "영업시간 - 10:00~19:00 (월요일 휴무)"
]

function loadFooter() {

    const footerImg = document.createElement("img");
    footerImg.src = IMAGE_URL;
    footerImg.className = "footer_img";
    footer.appendChild(footerImg);

    for (i = 0; i < INFOS.length; i++) {
        const footerLine = document.createElement("span");
        footerLine.innerText = INFOS[i];
        footer.appendChild(footerLine);
    }
}


function init() {
    loadFooter();
}

init();