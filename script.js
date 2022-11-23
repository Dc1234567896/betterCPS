var timeDiv = document.getElementById("timerDiv");
var clicksDiv = document.getElementById("cpsDiv");
var clicksDiv = document.getElementById("scoreDiv");
setInterval(increaseTime,10)

var gameOver;

var cps;

var time;

var score;

var started = false;

function cpsButtonClicked() {

    if(started){
       score += 1;
        scoreDiv.innerHTML = score;
    } else{
        reset();
       }

}
function reset(){
    //zero out vars
    time= 0.00;
    cps = 0;
    score = 0;
    //start game
    started = true;
    gameOver = false;
    
    //update to show val
    timeDiv.innerHTML = time;
    cpsDiv.innerHTML = cps;
    scoreDiv.innerHTML = score;
    
    

}


function updateCPS() {
    cps = score/time;
    cpsDiv.innerHTML = cps.toFixed(2);

}


function increaseTime() {
    if(!gameOver){
        time += 0.01;
        timeDiv.innerHTML = time.toFixed(1);
        updateCPS();
    }

}

window.addEventListener("keydown", (e) => {
    if(e.key == " "){
        if (!gameOver) {
            gameOver = true;
        } else {
            reset();
        }
    }
});