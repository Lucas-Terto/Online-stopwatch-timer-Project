let start = document.getElementById("start")
let reset = document.getElementById("reset")

let h = document.getElementById("hour")
let m = document.getElementById("minute")
let s = document.getElementById("sec")

//store a reference to the variable
let startTimer = null
let input = document.getElementById("inputs")
let cont = 0

function startstop(){
    if(cont == 0){
        function startInterval(){
            startTimer = setInterval(function() {
                timer();
            }, 1000);
        }
        startInterval();
        let pause = "PAUSAR"
        document.getElementById("start").innerHTML = pause
        document.getElementById("start").setAttribute("class", "btn-pause")
        input.setAttribute("class", "hide")
        cont++
    }else{
        clearInterval(startTimer);
        let start = "CONTINUAR"
        document.getElementById("start").innerHTML = start
        document.getElementById("start").setAttribute("class", "btn-continue")
        cont = 0
    }
    
}

function timer(){

    if(h.value > 99){
        h.value = 99
    }
    if(m.value > 60){
        m.value = 60
    }
    if(s.value > 60){
        s.value = 60
    }
    if(h.value < 0){
        h.value = h.value * -1
    }
    if(m.value < 0){
        m.value = m.value * -1
    }
    if(s.value < 0){
        s.value = s.value * -1
    }

    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0
        m.value = 0
        s.value = 0
        clearInterval(startTimer)

        let format = "00:00:00"
        document.getElementById("counter").innerHTML = format
        let start = "INICIAR"
        document.getElementById("start").innerHTML = start
        document.getElementById("start").setAttribute("class", "btn-start")
        input.setAttribute("class", "show")
        cont = 0
    }else if(s.value != 0){
        s.value--
    }else if(m.value != 0 && s.value == 0){
        s.value = 59
        m.value--
    }else if(h.value != 0 && m.value == 0){
        m.value = 60
        h.value--
    }

    let format = (h.value < 10 ? "0" + h.value : h.value) + ":" + (m.value < 10 ? "0" + m.value : m.value) + ":" + (s.value < 10 ? "0" + s.value : s.value)
    document.getElementById("counter").innerHTML = format

    /* return */

}

reset.addEventListener("click", function(){
    h.value = 0
    m.value = 0
    s.value = 0
    clearInterval(startTimer)

    let format = "00:00:00"
    document.getElementById("counter").innerHTML = format
    let start = "INICIAR"
    document.getElementById("start").innerHTML = start
    document.getElementById("start").setAttribute("class", "btn-start")
    input.setAttribute("class", "show")
    cont = 0
})


/* start.addEventListener("click", function(){
    //initialize the variable startTimer
    function startInterval(){
        startTimer = setInterval(function() {
            timer()
        }, 1000)
    }
    startInterval()
}) */

