let time = 4 * 24 * 60 * 60;

let countdown = setInterval( () => {
    let days = Math.floor(time / 86400);
    let hours = Math.floor(time % 86400 / 3600);
    let minutes = Math.floor(time % 3600 / 60);
    let seconds = time % 60;

    if(days < 10){
        days = "0" + days;
    }
    else{
        days = days
    };

    if(hours < 10){
        hours = "0" + hours;
    }
    else{
        hours = hours
    };

    if(minutes < 10){
        minutes = "0" + minutes
    }
    else{
        minutes = minutes
    }

    if(seconds < 10){
        seconds = "0" + seconds
    }
    else{
        seconds = seconds
    }

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes ;
    document.getElementById('seconds').textContent = seconds;

    time--;

    if(time < 0){
        clearInterval(countdown);
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00" ;
        document.getElementById('seconds').textContent = "00";

    }

}, 1000)