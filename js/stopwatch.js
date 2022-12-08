const hours = document.querySelector('.stopwatch__hours')
const minutes = document.querySelector('.stopwatch__minutes')
const seconds = document.querySelector('.stopwatch__seconds')
const btn = document.querySelector('.stopwatch__btn')

function tick() {
    seconds.innerHTML++
        if (seconds.innerHTML >= 60) {
            minutes.innerHTML++
                seconds.innerHTML = 0
        }
    if (minutes.innerHTML >= 60) {
        hours.innerHTML++
            minutes.innerHTML = 0
    }
}

let intervalId
const stopwatchCotroller = () => {
    if (btn.innerHTML === "start") {
        intervalId = setInterval(tick, 1000)
        btn.innerHTML = "stop"
    } else if (btn.innerHTML === "stop") {
        btn.innerHTML = "clear"
        clearInterval(intervalId)
    } else if (btn.innerHTML === "clear") {
        hours.innerHTML = 0
        minutes.innerHTML = 0
        seconds.innerHTML = 0
        btn.innerHTML = "start"
    }
}

btn.onclick = stopwatchCotroller