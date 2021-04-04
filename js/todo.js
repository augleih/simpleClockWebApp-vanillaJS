const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDos(event) {
    const btn = event.target,
        li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        console.log(toDo.id, li.id);
        console.log(toDo.id !== li.id);
        return toDo.id !== li.id;
    });

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function printToDo(text) {
    const list = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const toDoId = "toDos" + (toDos.length + 1);

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDos);
    span.innerText = text;

    list.appendChild(span);
    list.appendChild(delBtn);
    list.id = toDoId;

    toDoList.appendChild(list);

    const toDoObj = {
        text: text,
        id: toDoId,
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    printToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(function (toDo) {
            printToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();