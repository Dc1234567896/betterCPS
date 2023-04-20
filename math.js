import {addData, getData}  from './firebase.mjs';


window.addEventListener("keydown", movePlayer, false);




const canvas = document.getElementById("snake");
const scoretxt = document.getElementById("score");
const name = document.getElementById("name");
const submit = document.getElementById("submit");
submit.onclick = function(){
    post();
};
const leaderboard = document.getElementById("ats");
drawLeaderboard();

let playerWidth = 50;
let playerHight = 50;
let playerX = canvas.width/2 - playerWidth/2;
let playerY = 100;
let playerSpeed = 19.5;
let canPost = true;


let enemyWidth = 50;
let enemyHight = 50;
let enemyX = canvas.width/2 - enemyWidth/2;
let enemyY = 700;
let enemySpeed = 7.5;

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

}

function post() { 
    if (canPost == true){
        addData(name.value,score);
        fillLeaderboard();
        canPost = false;
        setTimeout(() => {
            canPost = true;
        }, 25000);
    }
}


function hit(){
    return !(
        enemyX > playerX+playerWidth ||
        enemyX+enemyWidth < playerX ||
        enemyY > playerY+playerHight ||
        enemyY+enemyHight < playerY         
        );

    
}

function drawLeaderboard() {
    for (let i=0; i<10; i++) {
        let newDiv = document.createElement("div")
        newDiv.style.border = "1px solid green";
        newDiv.style.width = "100%";
        newDiv.innerText = i;
        leaderboard.appendChild(newDiv);
    }
}

async function fillLeaderboard() {
    let limit = 10;
    let data = await getData(limit);
    let i = 0 ;
    let children = [];
    for (const child of leaderboard.children){
        children.push(child);
    }
    data.forEach((doc) => {
        // do something with the docs
        console.log(doc.data().name);
        console.log(doc.data().score);
        children[i].innerText = doc.data().name + ": " + doc.data().score;

        i++

    })
        // onSnapshot(data, (snapshot) => {
        //     let scores = []
        //     snapshot.docs.array.forEach((doc) => {
        //         scores.push({  ...doc.data(), id: doc.id})  
        //     });
        //     console.log(scores)
        // })
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