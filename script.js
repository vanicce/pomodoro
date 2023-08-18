const modal = document.querySelector('#modal')

const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const buttonStart = document.getElementById("buttonStart")
const buttonPause = document.getElementById("buttonPause")

const text = document.getElementById("text")

const pomodoroButton = document.getElementById("pomodoro")
const shortBrakeButton = document.getElementById("shortBrake")
const longBrakeButton = document.getElementById("longBrake")

let countdownInterval

const permission = (async () => await Notification.requestPermission())()


const showNotification = () => {
    new Notification("Pomodoro", {
        body: `Your Timer is Done`,
        icon: './imgs/clock.svg',
        vibrate: true
    })
}

document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}`

window.onload = () => {
    modal.classList.add('show')

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.remove('show');
            setTimeout( () => {
                modal.style.display = 'none';
            }, 300);
        }
    }
}

const closeModal = () => {
    modal.classList.remove('show');
    setTimeout( () => {
        modal.style.display = 'none';
    }, 300);
}

const playAudio = () => {
    let sound = new Audio('sounds/zeldasound.mp3')
    sound.play()
}

const setTimer = (mins = "25", secs = "00", timerText = "Time to Focus!") => {
    clearInterval(countdownInterval)
    minutes.textContent = mins
    seconds.textContent = secs
    text.textContent = timerText
    document.title = `${minutes.textContent}:${seconds.textContent} | ${text.textContent}`
    buttonPause.style.display = 'none'
    pomodoroButton.classList.add('active')
    shortBrakeButton.classList.remove('active')
    longBrakeButton.classList.remove('active')
    buttonStart.classList.remove('active')
    buttonStart.disabled = false
}

setTimer()

const pomodoro = () => {
    setTimer("25", "00", "Time to Focus!")
    pomodoroButton.classList.add('active')
}

const shortBrake = () => {
    setTimer("05", "00", "Time for a Brake!")
    pomodoroButton.classList.remove('active')
    shortBrakeButton.classList.add('active')
}

const longBrake = () => {
    setTimer("15", "00", "Time for a Brake!")
    pomodoroButton.classList.remove('active')
    longBrakeButton.classList.add('active')
}

const start = () => {
    playAudio()

    buttonPause.style.display = 'block'

    buttonPause.classList.remove('active')

    buttonStart.classList.add('active')

    buttonStart.disabled = true

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
            playAudio()
            clearInterval(countdownInterval)
            buttonPause.style.display = 'none'
            buttonStart.classList.remove('active')
            showNotification()
        }
    }, 1000)
}

const pause = () => {
    clearInterval(countdownInterval)
    buttonPause.classList.add('active')
    buttonStart.classList.remove('active')
    buttonStart.disabled = false
}
