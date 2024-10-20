let hours=document.getElementById('hour');
let minutes=document.getElementById('minute');
let seconds=document.getElementById('second');
function displayTime(){
 let date = new Date;
 let hh = date.getHours();
 let mm = date.getMinutes();
 let ss = date.getSeconds();

 let hRotation = 30*hh + mm/2;
 let mRotation = 6*mm;
 let sRotation = 6*ss;


 hours.style.transform = `rotate(${hRotation}deg)`;
 minutes.style.transform= `rotate(${mRotation}deg)`;
 seconds.style.transform= `rotate(${sRotation}deg)`;
}
setInterval( displayTime, 1000);