const dis = document.getElementById('quoteDisplay')
const inp = document.getElementById('quoteInput')
const timer = document.getElementById('timer')

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

var ch = localStorage.getItem("mode")
var level = localStorage.getItem("level")
inp.addEventListener('input', () => {
  const arr = dis.querySelectorAll('span')
  const arrv = inp.value.split('') 
  
  let correct = true
  arr.forEach((characterSpan, index) => {
    const character = arrv[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })

  if (correct) {
    win()
    }
})

var para

if(level == 1) {
  para = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
else if(level == 2) {
  para = "aBcDEfghIjklMNopQrStuVwxYz"
}
else if(level == 3) {
  para = "gdqawsdeiomzdouiujjnpoweqe"
}
else if(level == 4) {
  para = "2+[7{8+6(13-9)/2}]"
}
else if(level == 5) {
para = "oeiwf2349@$(%XPj34gx%$df,mWH"
}
else if(level == 6) {
  para = "The universe is all yours."
}
else if(level == 7) {
  para = "Time and tide waits for none, so speed up pal."
}
else if(level == 8) {
  para = "Amazon Prime and chill."
}
else if(level == 9) {
  para = "Our galaxy will collide with Andromeda Galaxy in about 5 billion years. "
}
else if(level == 10) {
  para = "Outer space, commonly referred to simply as space, is the expanse that exists beyond Earth and its atmosphere and between celestial bodies. Outer space is not completely empty; it is a near-perfect vacuum containing a low density of particles. "
}


async function levelContent() {
  const str = para
  dis.innerHTML = ''
  str.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    dis.appendChild(characterSpan)
  })

  inp.value = null
  startTimer()
}

var a = 30
if(ch == "Easy") {
  a = 30
}
else if(ch == "Medium") {
  a = 20
}
else if(ch == "Hard") {
  a = 10
}

let startTime
function startTimer() {
  timer.innerText = a
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
    if(getTimerTime() == 0)
    {
      lose()
    }
  }, 1000)
}

function getTimerTime() {
  return Math.floor((a+1) - ((new Date() - startTime) / 1000))
}

function win() {
  window.location.replace('/win/win.html')
}

function lose() {
  window.location.replace('/lose/lose.html')
}

levelContent()