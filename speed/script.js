const wpm = document.getElementById("wpm")
const motiv = document.getElementById("motiv")

var b = localStorage.getItem("value")

wpm.innerHTML = b;

if(b < 20){
    motiv.innerHTML = "Try harder next time.Keep playing the game to improve your speed."
}
else if(b < 35) {
    motiv.innerHTML = "You gotta work on your typing speed. Keep playing the game to improve your speed."
}
else if(b < 50) {
    motiv.innerHTML = "You have an average typing speed for an adult.Keep playing the game to improve your speed."
}
else if(b < 60) {
    motiv.innerHTML = "You have above average typing speed for an adult.Keep playing the game to improve your speed."
}
else if(b < 70) {
    motiv.innerHTML = "You have productive typing speed for an adult.Keep playing the game to improve your speed."
}
else if(b < 120) {
    motiv.innerHTML = "You have high typing speed for an adult.Keep playing the game to improve your speed."
}
else if(b < 200) {
    motiv.innerHTML = "You have competitive typing speed for an adult.Keep playing the game to improve your speed."
}
else {
    motiv.innerHTML = "You are a god. Your typing skills are on another level."
}

let x = 0;

function toggle() {
    var audio = document.getElementById("aud");
    audio.muted = !audio.muted;
    var img = document.getElementById("tog");
    if(x == 0) {
        img.src = "/unmute.png";
        x = 1;
    }
    else if(x == 1) {
        img.src = "/mute.png";
        x = 0;
    }
}

