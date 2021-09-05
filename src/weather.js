const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "588aaace04e64486c4b53fcdc22c0b83";

function callWeather(lat,lon) {
    console.log(lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
    callWeather(lat,lon);
    
}
function onGeoError() {
  //alert("Can't find you. No weather for you.");
  status.textContent = 'Your location cannot be found. Serve for the Default location'; 
    callWeather(37.89,126.664);

}

if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }