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

document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}` 

const setTimer = (mins, secs, timerText) => {
    clearInterval(countdownInterval)
    minutes.textContent = mins
    seconds.textContent = secs
    text.textContent = timerText
    document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}` 
    buttonPause.style.display = 'none'
    pomodoroButton.classList.remove('active')
    shortBrakeButton.classList.remove('active')
    longBrakeButton.classList.remove('active')
    buttonStart.classList.remove('active')
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

    buttonPause.classList.remove('active')

    if (remaingMinutes > 0 && remaingSeconds >= 0) {
        buttonStart.classList.add('active')
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
            
            document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}` 

            if (mins === 0 && secs === 0) {
                clearInterval(countdownInterval)
                buttonPause.style.display = 'none'
                window.alert('The Time is Over')
            }
        }, 1000)
    } else {
        window.alert('Choose a Pomodoro or give an pause')
    }
}

const pause = () => {
    clearInterval(countdownInterval)
    buttonPause.classList.add('active')
    buttonStart.classList.remove('active')
}
