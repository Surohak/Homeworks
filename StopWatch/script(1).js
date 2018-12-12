let st = 0;
let time = 0;
let timerId;

function start () {
  st = 1;
  document.getElementById('startBin').disabled = true;
  timer();
}

function pause(){
  st = 0;
  document.getElementById('startBin').disabled = false;
}

function stop(){
  st = 0;
  time = 0;
  clearTimeout(timerId);
  document.getElementById('startBin').disabled = false;
  document.getElementById('time').innerHTML = "00:00:00";
}
function restart(){
	stop();
	start();
}
function timer(){
  clearTimeout(timerId);
  if(st == 1){
    timerId = setTimeout(function(){
      time ++;
      let min = Math.floor(time/100/60);
          sec = Math.floor(time/100);
          msec = time % 100;
          if (min < 10){
            min = '0' + min;
          }
          if(sec >= 60){
            sec %= 60; 
          }
          if(sec < 10){
            sec = '0' + sec;
          }
          document.getElementById('time').innerHTML = min + ":" + sec + ":" + msec;
          timer();
    },10)
  }
}