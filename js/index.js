window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame(); 
  };

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//startGame - just the road and the car
//create the road
//create the car - done in class car
//create a game area 
//move the car (rigth/left)
//create obstacles
//move the background with the obstacles
//check the colision between car and obstacles
//add score


function startGame() {
  road();
  carPlayer.draw();
  requestAnimationFrame(updateCanvas);
}

function road() {
  const roadImg = new Image(); // Create new <img> element
  roadImg.src = './images/road.png'; // Set source path
  // Draw road image on canvas drawImage(image, x, y, width, height)
  ctx.drawImage(roadImg, 0, 0, 500, 700);
}

class car {
    constructor() {
      this.x = 225;//starting posisiton x
      this.y = 575;//starting posisiton y
      this.width = 50;//img size
      this.height = 100;// img size
      const img = new Image();
      this.img = img;
      img.src = '../images/car.png'
      this.speedX = 0;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    newPos() { // updating the position of the car
      this.x += this.speedX;
    }
    update() {
      const ctx = updateCanvas()
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

const carPlayer = new car();

function updateCanvas() {
    road();
    carPlayer.newPos();//in the new position??
    carPlayer.update();
  }

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37:
        carPlayer.moveLeft();
        console.log('left', carPlayer);
        break;
      case 39:
        carPlayer.moveRight();
        console.log('right', carPlayer);
        break;
    }
    updateCanvas();
  });
 




const myObstacles = [];

function updateGameArea() { // updating our Game
  myGameArea.clear(); // clear Canvas
}



 
