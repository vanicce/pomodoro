const minutes = document.getElementById("minutes")
minutes.textContent = "25"

const seconds = document.getElementById("seconds")
seconds.textContent = "00"

const buttonStart = document.getElementById("buttonStart")
buttonStart.textContent = "start"

const start = () => {
    let remaingMinutes = 9
    let remaingSeconds = 15

    if(buttonStart.textContent === "start"){
        const countdownInterval = setInterval(() => {
            if (remaingSeconds === 0) {
                remaingMinutes--
                remaingSeconds = 59
            }
            else {
                remaingSeconds--
            }
            
            if (remaingSeconds >= 10){
                seconds.textContent = remaingSeconds
            }
            else {
                seconds.textContent = '0' + remaingSeconds
            }
            
            if (remaingMinutes >= 10){
                minutes.textContent = remaingMinutes
            }
            else {
                minutes.textContent = '0' + remaingMinutes
            }

            if (remaingMinutes === 0 && remaingSeconds === 0) {
                clearInterval(countdownInterval)
            }
        }, 1000)
        buttonStart.textContent = "restart"
    }

}

const restart = () => {
    if(buttonStart.textContent === "restart"){
        clearInterval()
    }
}
