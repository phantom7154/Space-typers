var login = document.getElementById("form")

login.addEventListener("submit",(e) => {
    var name = document.getElementById("name").value;

    localStorage.setItem("name", name)
})

function pl() {
var snd = new Audio();
snd.src = "click.mp3";
snd.play();
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