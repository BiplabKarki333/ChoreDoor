//getting door1, door2 and door3 from dom

const doorImage1 = document.querySelector('#door1');
const doorImage2 = document.querySelector('#door2');
const doorImage3 = document.querySelector('#door3');

//setting urls to different door sceneries

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

//needs to be decreased every time a door is opened
let numClosedDoors = 3;

//closed door path variables
 const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

//defining variables to facilitate random assignment of sceneries

let openDoor1;
let openDoor2;
let openDoor3;

//currentplaying
let currentPlaying = true;

//start Button
const startButton = document.getElementById('start');

//check for the bot

const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
};

//check if the door has been clicked already
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  }
  else {
    return true;
  }
};


//function to decrease the number of door open with every iteration

const playDoor = (door) => {
  numClosedDoors = numClosedDoors -1;
  if (numClosedDoors === 0) {
    gameOver('win');
  }
  else if (isBot(door)===true) {
    gameOver();
  }


};

//function to randomly assign the door sceneries

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1=botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
  else{
    openDoor3 = botDoorPath;
    openDoor1 =beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};



//functions to show pictures on clicking the door

doorImage1.onclick = function(){
  if (isClicked(doorImage1) == false && currentPlaying === true) {
  doorImage1.src = openDoor1 ;
  //if (currentPlaying === false){
  startButton.onclick = () => {
    if (currentPlaying ===false){
    startRound();
  }
  }
//}
  playDoor(doorImage1);
}
};


doorImage2.onclick = function () {
if (isClicked(doorImage2) === false && currentPlaying === true) {
  doorImage2.src = openDoor2;
  //if (currentPlaying === false) {
  startButton.onclick = () => {
    if (currentPlaying === false){
    startRound();
  }
  }

  playDoor(doorImage2);

}
};


doorImage3.onclick = function () {
  if (isClicked(doorImage3)=== false && currentPlaying === true) {
  doorImage3.src = openDoor3;
  //if (currentPlaying === false){
  startButton.onclick = () => {
    if (currentPlaying === false){
    startRound();
  }
  }
//}
  playDoor(doorImage3);
}
};

const startRound =() =>{
  numClosedDoors = 3;
    doorImage1.src = closedDoorPath ;
    doorImage2.src = closedDoorPath;
      doorImage3.src = closedDoorPath;
      startButton.innerHTML = "Good Luck!";
      currentPlaying = true;
      randomChoreDoorGenerator();
};


//gameover function
const gameOver =(status) => {
  if (status === 'win'){
  startButton.innerHTML = 'You win! Play again?';
}
else{
  startButton.innerHTML = 'Game Over! Play again?';
}
currentPlaying =false;
};

startRound();
