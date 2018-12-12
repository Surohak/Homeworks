var input = document.querySelectorAll("input");
  for(let i = 0; i < input.length; i++){
    input[i].addEventListener("input", function(){
      let red = document.getElementById("red").value;
          green = document.getElementById("green").value;
          blue = document.getElementById("blue").value;
          let display = document.getElementById("display");
          display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
          
          let r = +red-100;          //(qayl * 5)
          	  g = +green-100;
          	  b = +blue-100;
          var erang = document.getElementsByClassName('erang');
          for(let k = 0; k < erang.length; k++){
          	erang[k].style.background = "rgb(" +  r + ", " + g + ", " + b + ")";
          	r += 20;
          	g += 20;
          	b += 20;
          console.log(erang[k].style.background)
          }
    });
  }


var slider1 = document.getElementById("red");
var output1 = document.getElementById("r1");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("green");
var output2 = document.getElementById("g1");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("blue");
var output3 = document.getElementById("b1");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  output3.innerHTML = this.value;
}

