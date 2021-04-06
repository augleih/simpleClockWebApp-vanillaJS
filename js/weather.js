const weather = document.querySelector(".js-weather");

const API_KEY = "c1ea224d7afbf7763beb4cd2814f9041";
const COORDS = "coords";

function getWeather(lati, longi) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`).then(function (response) {
        return response.json()
    }).then(function(json) {
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp}\u2103 @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const coordsObj = {
        latitude: lati,
        longitude: longi
    };

    saveCoords(coordsObj);
    getWeather(lati, longi);
}

function handleGeoError() {
    console.log("Geolocation should be permitted!");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);

    if (loadedCords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();