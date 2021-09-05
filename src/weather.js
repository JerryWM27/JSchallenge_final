const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
//const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
//const API_KEY = "7f8835cc771e44cee4d79447498c1647";

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

//경도 1265930.664, 위도 3733 06.890

//출처 : 서울문화투데이(http://www.sctoday.co.kr)

if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }
//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);