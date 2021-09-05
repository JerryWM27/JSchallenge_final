
const clockDiv = document.querySelector("#clock");
//const clock= clockDiv.
const dayc = ["일","월","화","수","목","금","토"]
function getTime() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = year+ "년 " + month+ "월 " +date+ "일 ("+dayc[day] +")    "+hour + ":" + minutes + ":" + seconds;
}

function init() {
  setInterval(getTime, 1000);
}

init();
