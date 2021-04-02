const form = document.querySelector(".js-form"), // form 태그 상수
    input = form.querySelector("input"), // input 태그 상수
    greeting = document.querySelector(".js-greetings"); // greeting 문구 선언 상수

const USER_LS = "currentUser", // user의 Localstorage 저장 될 상수
    SHOWING_CN = "showing"; // showing 이라는 class name <-- display: block 활성화를 위해 존재.

// local storage에 입력 받을 user name을 저장하기 위한 함수
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

/** form 하위 input 태그에 입력 받은 text에 대해
 * local storage 저장 및, 불필요한 태그를 지우는 함수
 */
function handleSubmit(event) {
    event.preventDefault(); //기본 동작을 막음, input 태그의 경우 엔터 입력 시 페이지 새로고침 되는 동작
    const currentValue = input.value; // input 태그에 입력 받은 value 를 currnetValue 상수 선언 및 저장
    printGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN); // input 태그 활성화
    form.addEventListener("submit", handleSubmit); // form 태그에 엔터 입력에 대한 동작을 받고, handlesubmit 함수를 호출하도록 설정
}

function printGreeting(text) {
    form.classList.remove(SHOWING_CN); // 이미 name 값이 있을 때이므로, 불필요한 입력을 요구하는 input 태그 비활성화
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askForName();
    } else {
        printGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();