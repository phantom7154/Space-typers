const apiurl = 'http://api.quotable.io/random'
const qdis = document.getElementById('quoteDisplay')
const qin = document.getElementById('quoteInput')
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

qin.addEventListener('input', () => {
  const arrq = qdis.querySelectorAll('span')
  const arrv = qin.value.split('') 
  
  let words = arrq.length

  let correct = true
  arrq.forEach((characterSpan, index) => {
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
  
  let time = getTimerTime()
  time = time/60
  wpm = words/5
  wpm = wpm/time
  wpm = wpm.toFixed(2)

  if (correct) {
    send()
    changePage()
    }
})

function getRandomQuote() {
  return fetch(apiurl)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote() {
  const quote = await getRandomQuote()
  qdis.innerHTML = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    qdis.appendChild(characterSpan)
  })

  qin.value = null
  startTimer()
}

let startTime
function startTimer() {
  timer.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

function changePage() {
  window.location.replace('/speed/speed.html')
}

function send()
{
  localStorage.setItem("value", wpm)
}

renderNewQuote()