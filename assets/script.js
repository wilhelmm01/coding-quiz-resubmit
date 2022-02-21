//var timeLeft = 10
//var timer = document.getElementById("time");
var startButton = document.getElementById("start-btn");

// var timer = setInterval(function(){
//     if (timeLeft <=0) {
//         clearInterval(timer);
//     }
// document.getElementById("timer").innerHTML = "Seconds Remaining: " + (10 + timer); timer-=1;
// },1000)

function timer(){
    var sec = 90;
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='00:'+ sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

//startButton.addEventListener("click", timer)

















