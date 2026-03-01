const weddingDate = new Date("Nov 7, 2026 16:00:00").getTime();

setInterval(function(){

let now = new Date().getTime();
let distance = weddingDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML =
days + " días " + hours + "h " + minutes + "m " + seconds + "s";

}, 1000);
