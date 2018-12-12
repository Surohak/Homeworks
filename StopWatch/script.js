let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timer;
let stopwatchEl = document.querySelector('.time');
let laps = document.getElementById('laps');
document.getElementById('lapClick').disabled = true;

function start(){
	document.getElementById('lapClick').disabled = false;
	stoptimer();
	timer = setInterval(run, 10);
}
function run(){
	stopwatchEl.textContent = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s)  + ":" + (ms < 10 ? "0" + ms : ms);
	ms++;
	if(ms == 100) {
		ms = 0;
		s++;
		}
	if(s == 60) {
		s = 0;
		m++;
	   }
	if(m == 60) {
		m = 0;
		h++;
	   }
	}
function stoptimer(){
	clearInterval(timer)
}

function pause(){
	stoptimer();
	document.getElementById('lapClick').disabled = true;
}

function stop(){
    stoptimer();
    h=0;
	m=0;
	s=0;
	ms=0;
	stopwatchEl.textContent = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s)  + ":" + (ms < 10 ? "0" + ms : ms);
	removeChildren(laps);
	p  = document.getElementById('clear');
	p.style.display = "none";
	document.getElementById('lapClick').disabled = true;

}
function restart(){
	stop();
	start();
	document.getElementById('lapClick').disabled = false;

}
function lap(){
	p  = document.getElementById('clear');
	p.style.display = "inline-block";
	const l = document.createElement('li');
	l.innerText = stopwatchEl.innerText;
	laps.appendChild(l);
	updateScroll();
}

function clearLaps(){
	removeChildren(laps)
	p  = document.getElementById('clear');
	p.style.display = "none";
}
function removeChildren(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }
function updateScroll(){
   var element = document.getElementById("laps");
   element.scrollTop = element.scrollHeight;
}