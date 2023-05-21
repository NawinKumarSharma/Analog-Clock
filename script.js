let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
  let date = new Date();
  //Getting hour, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let h_rotation = 30 * hh + mm / 2;
  let m_rotation = 6 * mm;
  let s_rotation = 6 * ss;

  hr.style.transform = `rotate(${h_rotation}deg)`;
  min.style.transform = `rotate(${m_rotation}deg)`;
  sec.style.transform = `rotate(${s_rotation}deg)`;

}
setInterval(displayTime, 1000)
//***********************LOGIC********************************************** */
// 12 hour = 360deg
// 1 hour = 360/12= 30 deg
// h hour = 30h + m/2

// 60 min = 30
// 1 min = 30 / 60 = 1/2

// 60 min = 360deg
// 1 min = 360 / 60 = 6 deg
// m min = 6m

// 60sec = 360 deg
// 1 sec = 360 / 60=6deg
// s secs = 6s
