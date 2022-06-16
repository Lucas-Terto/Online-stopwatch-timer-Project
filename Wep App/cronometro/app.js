let hun = 0
let h = 0
let min = 0
let sec = 0
let time = 10
let chrono

var cont = 0

function startstop(){

    if(cont == 0){
        chrono = setInterval(() => {
            timer()
        }, time);
        let stop = "PAUSAR"
        document.getElementById("btn-startstop").innerHTML = stop
        document.getElementById("btn-startstop").setAttribute("class", "btn-stop")
        cont++
    }else{
        clearInterval(chrono)
        let start = "CONTINUAR"
        document.getElementById("btn-startstop").innerHTML = start
        document.getElementById("btn-startstop").setAttribute("class", "btn-continue")
        cont = 0
    }
   
}

/* function stop(){
    clearInterval(chrono)
} */

function reset(){
    
    clearInterval(chrono)
    hun = 0
    h = 0
    min = 0
    sec = 0
    document.getElementById("counter").innerHTML = "0:00:00.00"

    let start = "INICIAR"
    document.getElementById("btn-startstop").innerHTML = start
    document.getElementById("btn-startstop").setAttribute("class", "startstop")
    cont = 0
   
}

function timer(){
    hun++
    if(hun == 100){
        hun = 0
        sec++
        if(sec == 60){
            sec = 0
            min++
            if(min == 60){
                min = 0
                h++
            }
        }
    }
    let format = (h) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + "." + (hun < 10 ? "0" + hun : hun)
    document.getElementById("counter").innerHTML = format
}