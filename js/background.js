const body = document.querySelector("body");

const IMG_NUMBER = 29;

function printImage(imgNumber) { // 실제 이미지를 출력하는 함수
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function generateRandom() { // 랜덤 숫자를 생성하는 함수
    const number = Math.ceil(Math.random() * IMG_NUMBER); // 올림, Math.floor() -- 내림
    return number;
}

function init () { // 페이지 호출 시 실행될 함수들을 호출하는 함수
    const randomNum = generateRandom();
    printImage(randomNum);
}

init();