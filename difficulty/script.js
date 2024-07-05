var ch = "Easy"

function easy() {
    ch = "Easy"
    localStorage.setItem("mode", ch)
}

function medium() {
    ch = "Medium"
    localStorage.setItem("mode", ch)

}

function hard(){
    ch = "Hard"
    localStorage.setItem("mode", ch)
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
