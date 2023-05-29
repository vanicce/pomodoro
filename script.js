const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const buttonStart = document.getElementById("buttonStart")
const buttonPause = document.getElementById("buttonPause")

const text = document.getElementById("text")

const pomodoroButton = document.getElementById("pomodoro")
const shortBrakeButton = document.getElementById("shortBrake")
const longBrakeButton = document.getElementById("longBrake")

let countdownInterval

minutes.textContent = "25"
seconds.textContent = "00"
text.textContent = "Time to Focus!"

const setTimer = (mins, secs, timerText) => {
    clearInterval(countdownInterval)
    minutes.textContent = mins
    seconds.textContent = secs
    text.textContent = timerText
    buttonPause.style.display = 'none'
    pomodoroButton.classList.remove('active')
    shortBrakeButton.classList.remove('active')
    longBrakeButton.classList.remove('active')
}

const pomodoro = () => {
    setTimer("25", "00", "Time to Focus!")
    pomodoroButton.classList.add('active')
}

const shortBrake = () => {
    setTimer("05", "00", "Time for a Brake!")
    shortBrakeButton.classList.add('active')
}

const longBrake = () => {
    setTimer("15", "00", "Time for a Brake!")
    longBrakeButton.classList.add('active')
}

const start = () => {
    const remaingMinutes = parseInt(minutes.textContent)
    const remaingSeconds = parseInt(seconds.textContent)

    if (remaingMinutes > 0 && remaingSeconds >= 0) {
        buttonPause.style.display = 'block'

        countdownInterval = setInterval(() => {
            let mins = parseInt(minutes.textContent)
            let secs = parseInt(seconds.textContent)

            if (secs === 0) {
                secs = 59
                mins--
            } else {
                secs--
            }

            seconds.textContent = secs.toString().padStart(2, '0');
            minutes.textContent = mins.toString().padStart(2, '0');

            if (mins === 0 && secs === 0) {
                clearInterval(countdownInterval)
                buttonPause.style.display = 'none'
                window.alert('O Tempo Acabou')
            }
        }, 1000)
    } else {
        window.alert('Escolha um Pomodoro ou dê uma pausa')
    }
}

const pause = () => {
    clearInterval(countdownInterval)
}