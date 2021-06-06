var numSquares = 6;
var colors = generateRandomColors (numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var mesageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn. addEventListener("click",function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0; i<squares.length; i++){
    if (colors[i]) {
      squares[i].style.backgroundColor=colors[i];
    }
    else{
      squares[i].style.display="none";
    }
  }
});

hardBtn. addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares=6;
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0; i<squares.length; i++){
      squares[i].style.backgroundColor=colors[i];
      squares[i].style.display="block";
   
  }
});


resetButton.addEventListener("click",function(){
  // genraete all new colors
  colors = generateRandomColors (numSquares);
  //pick a new Color From Array
  pickedColor = pickColor();
  //chnage Display to Match Color
  colorDisplay.textContent=pickedColor;
  mesageDisplay.textContent="";
  this.textContent="New Colrs";
  // change colors of squares
  for(var i=0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor="steelblue";
});


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	// Add Initial Color To The Square....
	squares[i].style.backgroundColor = colors[i];
	// Add Click Listener To th square...!!
	squares[i].addEventListener("click",function(){
    //  Grab Color of click Square.....!!!
    var clickedColor = (this.style.backgroundColor);
    //  Compare Color To Picked Color....!!
    if (clickedColor === pickedColor) {
    	mesageDisplay.textContent="Correct!";
      resetButton.textContent="Paly Again!";
      changeColor(clickedColor);
      h1.style.backgroundColor=clickedColor;
    }
    else{
    	this.style.backgroundColor="#232323";
      mesageDisplay.textContent="Try Again!";
    }
	});
}

function changeColor(color)
{
 //Loop through All Squares
 for(var i=0; i<squares.length;i++)
 {
   squares[i].style.backgroundColor=color;
 }

}

function pickColor()
{
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColors(num){
  // Make An Array
  var arr=[];
  // Add Random colors to array
  for(var i=0; i<num;i++){
   arr.push(randomColor());
  }
  //return array
  return arr;
}
function randomColor(){
  // pick a"red" from 0-255
  var r=Math.floor(Math.random() * 256);
  // pick a"green" from 0-255
  var g=Math.floor(Math.random() * 256);
  // pick a"blue" from 0-255
  var b=Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g +", " + b +")"; 
}