var dlines = document.getElementsByClassName('diallines');
var clockface = document.getElementsByClassName('clock')[0];
for (var i=1;i<60;i++){
  clockface.innerHTML+="<div class='diallines'></div>";
  dlines[i].style.transform = "rotate("+6*i+"deg)";
}

function clock() {
      var days = new Array(7),
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth()+1,
      year = d.getFullYear(),
      hDeg = h*30+m*0.5,
      mDeg = m*6+s*0.10,
      sDeg = s*6,
      hhand = document.querySelector('.hour-hand'),
      mhand = document.querySelector('.minute-hand'),
      shand = document.querySelector('.second-hand'),
      datebox = document.querySelector('.date'),
      daybox = document.querySelector('.day');
      days[0] = "Sunday";
      days[1] = "Monday";
      days[2] = "Tuesday";
      days[3] = "Wednesday";
      days[4] = "Thursday";
      days[5] = "Friday";
      days[6] = "Saturday";
      var day = days[d.getDay()];
      if(month < 9) {
        month = "0"+month;
      } 
      hhand.style.transform = "rotate("+hDeg+"deg)";
      mhand.style.transform = "rotate("+mDeg+"deg)";
      shand.style.transform = "rotate("+sDeg+"deg)";
      datebox.innerHTML = date+"/"+month+"/"+year;
      daybox.innerHTML = day;
}setInterval("clock()", 100);