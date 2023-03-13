var timeDiv = document.getElementById("timerDiv");
var clicksDiv = document.getElementById("cpsDiv");
var clicksDiv = document.getElementById("scoreDiv");
var buttonTxt = document.getElementById("buttonTxt");
var cpsButton = document.getElementById("cpsButton");
setInterval(increaseTime,10)


var gameOver = true;

var cps;

var time = 0.00;

var score = 0;

var started = false;

function cpsButtonClicked() {

    if(started){
        buttonTxt.innerHTML="";
        cpsButton.style.backgroundColor = "#4caf88";
        setTimeout(resetC, 100);
        if(gameOver == false){
            score += 1;
        }
        scoreDiv.innerHTML = score;
    } else{
        reset();
       }

}
function resetC(){
    cpsButton.style.backgroundColor = "#4caf50";

}
function reset(){
    //zero out vars
    time= 0.00;
    cps = 0.00;
    score = 0.00;
    //start gamew
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
    }else{
        time = 0.00

    }
    

}
function stopStart(){
    if (!gameOver) {
    gameOver = true;
    } else {
    reset();
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