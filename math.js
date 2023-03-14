import {addData, getData}  from './firebase.mjs';
window.addEventListener("keydown", movePlayer, false);




const canvas = document.getElementById("snake");
const scoretxt = document.getElementById("score");
const name = document.getElementById("name");

let playerWidth = 50;
let playerHight = 50;
let playerX = canvas.width/2 - playerWidth/2;
let playerY = 100;
let playerSpeed = 20;


let enemyWidth = 50;
let enemyHight = 50;
let enemyX = canvas.width/2 - enemyWidth/2;
let enemyY = 700;
let enemySpeed = 8.5;

let score = 0;




setInterval(() => {
    mathLoop();
}, 10);

function movePlayer(e) {
    if (e){
        switch(e.keyCode) {
            case 65:
                //"A" key pressed 
                if (playerX > 0){
                    playerX -= playerSpeed;
                    break;
                }


            case 68:
                if (playerX < 450 - playerWidth){
                    playerX += playerSpeed;
                    //"D" key pressed
                    break;
                }
            case 37:
                if (playerX > 0) {             
                    //"A" key pressed
                    playerX -= playerSpeed;
                    break;
                }

            case 39:
                if (playerX  < 450 - playerWidth)  {              
                    playerX += playerSpeed;
                    //"D" key pressed
                    break;
                }
           


        }

}
}


function moveEnemy(){
    enemyY -= enemySpeed;
    if(enemyY < - enemyHight){
        enemyX = Math.floor(Math.random()*canvas.width)
        enemyY = 800
        score++;
        scoretxt.innerHTML = score;
    }
}

function mathLoop() {
    movePlayer();
    moveEnemy();   
    if ( hit() == true){
        playerSpeed = 0
        enemySpeed = 0
        setTimeout(() => {

            resetMath();
        }, 1000);

    }
    redraw();

}

function resetMath() {
    playerWidth = 50;
    playerHight = 50;
    playerX = canvas.width/2 - playerWidth/2;
    playerY = 100;
    playerSpeed = 20;


    enemyWidth = 50;
    enemyHight = 50;
    enemyX = canvas.width/2 - enemyWidth/2;
    enemyY = 700;
    enemySpeed = 10;
   
    score = 0
    scoretxt.innerHTML = score;
    addData(name.value,score);
    



}



function hit(){
    return !(
        enemyX > playerX+playerWidth ||
        enemyX+enemyWidth < playerX ||
        enemyY > playerY+playerHight ||
        enemyY+enemyHight < playerY         
        );

    
}



function redraw() {

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        //clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //draw char box
        
        
        ctx.fillStyle = "rgb(000, 255, 255)";
        ctx.fillRect(playerX, playerY, 50, 50);

        //draw enemy box

        ctx.fillStyle = "rgb(000, 240, 0)";
        ctx.fillRect(enemyX, enemyY, enemyWidth, enemyHight);
    }


}