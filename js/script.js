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

const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");

intro.addEventListener("click", function(){

video.play();

video.onended = function(){

document.getElementById("intro").style.opacity = "0";

setTimeout(function(){
document.getElementById("intro").style.display = "none";
document.getElementById("website").style.display = "block";
}, 1200);

};

});


const buttons = document.querySelectorAll(".lang-btn");

function setLanguage(lang){

buttons.forEach(btn => {
btn.classList.remove("active");
if(btn.dataset.lang === lang){
btn.classList.add("active");
}
});

document.querySelectorAll("[data-lang-text]").forEach(el => {

if(el.dataset.langText === lang){
el.style.display = "";
}else{
el.style.display = "none";
}

});

}

buttons.forEach(button => {

button.addEventListener("click", () => {
setLanguage(button.dataset.lang);
});

});

setLanguage("es");

const scrollButton = document.getElementById("scrollDown");

scrollButton.addEventListener("click", function(){

document.getElementById("countdown").scrollIntoView({
behavior:"smooth"
});

});
