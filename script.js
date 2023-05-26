const minutes = document.getElementById("minutes")
minutes.textContent = "25"

const seconds = document.getElementById("seconds")
seconds.textContent = "00"

const buttonStart = document.getElementById("buttonStart")
buttonStart.textContent = "start"

const text = document.getElementById("text")
text.textContent = "Time to focus!"

const pomodoro = () => {
    let remaingMinutes = "25"
    minutes.textContent = remaingMinutes
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
    let remaingSeconds = 0

    console.log(remaingSeconds);

    if(buttonStart.textContent === "start"){

        buttonStart.textContent = 'restart'

        const countdownInterval = setInterval(() => {
            if (remaingSeconds === 0) {
                remaingSeconds = 59
                remaingMinutes--
            } else {
                remaingSeconds--
            }
            
            if (remaingSeconds >= 10){
                seconds.textContent = remaingSeconds
            } else {
                seconds.textContent = '0' + remaingSeconds
            }
            
            if (remaingMinutes >= 10){
                minutes.textContent = remaingMinutes
            } else {
                minutes.textContent = '0' + remaingMinutes
            }

            if (remaingMinutes === 0 && remaingSeconds === 0) {
                clearInterval(countdownInterval)
                buttonStart.textContent = "start"
            }    
        }, 1000)
    }
}

const restart = () => {
    
}