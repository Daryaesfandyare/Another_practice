
let player = document.getElementById("ball");


function up(){
    player.style.bottom = '250px';
}
function down(){
    player.style.bottom = '50px'; 
}
function left(){
    player.style.left = '1145px';
}
  
  document.addEventListener('keydown', up);
  document.addEventListener('keyup', down);
  document.addEventListener('keypress', left);

let heading = document.getElementById("second");
let container = document.getElementsByClassName("containertwo");

function changeHeading(){
    heading.innerHTML = '<h3>PUUURFECT. <br>THANK YOU FOR YOUR HELP.<br> OUR KITTEN IS SAFE AND SOUND NOW!</h3>';

}

document.addEventListener('keypress', changeHeading);
  




