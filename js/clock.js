const clockContainer = document.querySelector(".js-clock"),
    dateInfo = clockContainer.querySelector(".js-date"),
    clockTitle = clockContainer.querySelector(".js-title"); // ,를 통해 const 선언 시 선언 중복을 피할 수 있습니다.

function getTime() {
    const date = new Date();
    const today = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`

    const hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    dateInfo.innerText = today;

    clockTitle.innerText = `${ 
        hours < 10 ? `0${hours}` : hours // hours에 대하여 10 보다 작으면 0을 붙여서 반환, 아니라면 그냥 반환
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init() {
    getTime();
    /* setInterval function
    parameter: 실행시킬 함수, 실행 간격(milli second) */
    setInterval(getTime, 1000);
}

init();