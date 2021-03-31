const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector(".js-title"); // ,를 통해 const 선언 시 선언 중복을 피할 수 있습니다.

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
}

init();