const minutes = document.getElementById("minutes")
minutes.textContent = "25"

const seconds = document.getElementById("seconds")
seconds.textContent = "00"

const buttonStart = document.getElementById("buttonStart")
buttonStart.textContent = "start"

const text = document.getElementById("text")
text.textContent = "Time to focus!"

let countdownInterval

const pomodoro = () => {
    let remaingMinutes = "25"
    minutes.textContent = remaingMinutes
    seconds.textContent = remaingSeconds
    text.textContent = "Time to focus!"
}

const shortBrake = () => {
    let remaingMinutes = "05"
    minutes.textContent = remaingMinutes
    text.textContent = "Time for a Brake!"
}

const longBrake = () => {
    let remaingMinutes = "15"
    minutes.textContent = remaingMinutes
    text.textContent = "Time for a Brake!"
}

const start = () => {

    let remaingMinutes = minutes.textContent
    let remaingSeconds = seconds.textContent

    const buttonPause = document.getElementById("buttonPause")
    buttonPause.textContent = "pause"
    buttonPause.style.display = 'block'

    countdownInterval = setInterval(() => {
        if (remaingSeconds == 0) {
            remaingSeconds = 59
            remaingMinutes--
        } else {
            remaingSeconds--
        }

        if (remaingSeconds >= 10) {
            seconds.textContent = remaingSeconds
        } else {
            seconds.textContent = '0' + remaingSeconds
        }

        if (remaingMinutes >= 10) {
            minutes.textContent = remaingMinutes
        } else {
            minutes.textContent = '0' + remaingMinutes
        }

        if (remaingMinutes == 0 && remaingSeconds == 0) {
            clearInterval(countdownInterval)
            buttonStart.textContent = "start"
            buttonPause.style.display = 'none'
        }
    }, 1000)
}

const pause = () => {
    clearInterval(countdownInterval)
     
}