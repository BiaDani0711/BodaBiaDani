const weddingDate = new Date("Nov 7, 2026 16:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();
let distance = weddingDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}, 1000);

const video = document.getElementById("introVideo");

video.addEventListener("click", function(){

video.play();

video.onended = function(){

document.getElementById("intro").style.opacity = "0";

setTimeout(function(){
document.getElementById("intro").style.display = "none";
document.getElementById("website").style.display = "block";
}, 1200);

};

});
