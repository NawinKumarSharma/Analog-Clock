const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

function displayTime() {
  // Function is called every second so second is incremented every second
  second++;
  // Minute is only increased when second is multiple of 60
  if (second % 60 == 0) {
    minute++;
  }
  // Hour is only increased when minute and second both are multiple of 60
  if (minute % 60 == 0 && second % 60 == 0) {
    hour++;
  }

  let h_rotation = 30 * hour + minute / 2;
  let m_rotation = 6 * minute;
  let s_rotation = 6 * second;

  hr.style.transform = `rotate(${h_rotation}deg)`;
  min.style.transform = `rotate(${m_rotation}deg)`;
  sec.style.transform = `rotate(${s_rotation}deg)`;
}

displayTime();
setInterval(displayTime, 1000);
