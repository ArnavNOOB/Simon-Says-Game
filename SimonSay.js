let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let highestScore = 0;

let h3 = document.querySelector("h3");
let btns = ["red", "blue", "green", "yellow"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(event) {
    if(started === false) {
        started = true;
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash")}
        , 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash")}
        , 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;
    let randomNum = Math.floor(Math.random() * btns.length);
    let randomColor = btns[randomNum];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnflash(randBtn);
} 

function buttonPressed(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length - 1);
}


let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns) {
    btn.addEventListener("click", buttonPressed);
}

function check(idx){

    if(userSeq[idx] === gameSeq[idx]) {
    
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over, Your scroce was <b> ${level} </b> <br> Press Any Key to Restart`;
        document.body.classList.add("flashred");
        setTimeout(function(){
            document.body.classList.remove("flashred");
        },100);
        highestScore = Math.max(highestScore, level);
        h3.innerText = "Highest Score: " + highestScore;
        gameSeq = [];
        userSeq = [];
        level = 0;
        started = false;
    }
}
