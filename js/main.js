let inputDir= {x:0,y:0};
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/sound-k-117217.mp3');
let lastpaintTime = 0;
let speed = 5;
let snakearr = [
    { x : 13 , y : 15 }
];
food = { x: 6 , y : 7};
let score = 0;

//functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime- lastpaintTime)/1000 < 1/speed){
        return;
    }
    lastpaintTime = ctime;
gameEngine();
}

function gameEngine(){

    //updating the snake array
    
    function isCollide(snake){
for (let i = 1; i < snakearr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
        return true;
    }   
}



if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 ||  snake[0].y <= 0) {
return true        
}


    }

if(isCollide(snakearr)){
    gameOverSound.play(); 
    musicSound.pause();
    inputDir = {x : 0 , y : 0};
    alert("Game Over Press any key to continue");
    snakearr = [
        { x: 13 , y : 15}
    ]
    // musicSound.play();
    score = 0;
}


//food eaten

if(snakearr[0].y === food.y && snakearr[0].x === food.x){
    foodSound.play();
    score += 1;
    bscore.innerHTML = "SCORE :" + score;
    snakearr.unshift({x : snakearr[0].x + inputDir.x,y : snakearr[0].y + inputDir.y});
    let a = 2;
    let b = 16;
    food = {x:Math.round(a + (b-a)*Math.random()), y:Math.round(a + (b-a)*Math.random())}
}

//move snake
for (let i = snakearr.length - 2; i >= 0; i--) {
    snakearr[i+1] = {...snakearr[i]};
}
snakearr[0].x += inputDir.x;
snakearr[0].y += inputDir.y;

    // render the snake and food
    _b.innerHTML = "";
    snakearr.forEach((e,index) => {
snakeElement = document.createElement('div');
snakeElement.style.gridRowStart = e.y;
snakeElement.style.gridColumnStart = e.x;
if(index === 0){
    snakeElement.classList.add('head');
}
else{

    snakeElement.classList.add('snake');
}
_b.appendChild(snakeElement);
    });

    ///food

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    _b.appendChild(foodElement);


}






//main logic
// let hscore = localStorage.getItem("hi score")
// if(hscore === null){
//     hiscore = 0;
//     localStorage.setItem("hscore",JSON.stringify(hiscore))
// }
// else{
//     hscore.innerHTML = "High Score : " + hiscore; 
// }
window.requestAnimationFrame(main);
window.addEventListener('keydown', (e) =>{
    inputDir = {x : 0 , y : 1};
    moveSound.play();
    musicSound.play();
switch (e.key) {
    case "w":
        console.log('ArrowUp');
        inputDir.x = 0;
        inputDir.y = -1;

        break;

    case "s":
        console.log('ArrowDown');
        inputDir.x = 0;
        inputDir.y = 1;
        break;

    case "a":
        console.log('ArrowLeft');
        inputDir.x = -1;
        inputDir.y = 0;
        break;
Down
    case "d":
        console.log('ArrowRight');
        inputDir.x = 1;
        inputDir.y = 0;
        break;

    default:
        break;
}
});



