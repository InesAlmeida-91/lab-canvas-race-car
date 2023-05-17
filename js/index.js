window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frames = 0;

function startGame() {
  road();
  carPlayer.draw();
  setInterval(updateCanvas,20);
}


const roadImg = new Image(); 
roadImg.src = '../images/road.png'; 

function road() {
  ctx.drawImage(roadImg, 0, 0, 500, 700);
}


class Car {
    constructor() {
      this.x = 225;
      this.y = 575;
      this.width = 50;
      this.height = 100;
      const img = new Image();
      this.img = img;
      img.src = '../images/car.png'
      this.speedX = 0;
    }
    draw() {
     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    moveLeft() {
      if (this.x >= 0) {
      this.x -= 10;
      }
    }
    moveRight() {
      if(this.x <= 430) {
        this.x += 10;
      }
    }
    newPos() {
      this.x += this.speedX;
    }
    update() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    top() {
      this.y;
    }
    leftSide() {
      this.x;
    }
    rightSide() {
      this.x + this.width;
    }
    crashWith(obstacle) {
      return !(this.top() > obstacle.bottom() || this.rightSide() < obstacle.leftSide() || this.leftSide() > obstacle.rightSide());
    }
  }

const carPlayer = new Car();

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37:
      carPlayer.moveLeft();
      break;
    case 39:
      carPlayer.moveRight();
      break;
  }
  updateCanvas();
});


class Obstacles {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = 'red';
    this.x = x;
    this.y = y;
  }

  update() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }  
    bottom() {
      this.y + this.height
    }
    leftSide() {
      this.x;
    }
    rightSide() {
      this.x + this.width;
    }
  }

  const myObstacles = [];

  function updateObstacles() {
    frames += 1;
    if(frames % 160 === 0) {
      let x = Math.floor(Math.random() * canvas.width)  // random start place of the obstacles  
      let minWidth = 100;
      let maxWidth = 350;
      let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
      let height = 30;    
      myObstacles.push(new Obstacles(width, height, 'red', x, 0))
    }
    for(let i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y +=1;
      myObstacles[i].update();
    }
  }

  let points = 0;

  function score() {
    points = Math.floor(frames / 5);
    ctx.font = '18px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${points}`, 50, 50);
  }

let gameStatus = 'playing'

  function gameOver() {
      if (carPlayer.crashWith) {
        gameStatus = 'over';
        clearInterval(updateCanvas);
        ctx.font = '30px serif';
        ctx.fillStyle = 'red';
        ctx.fillText(`Game Over!`, 170, 150);
        ctx.fillStyle = 'white';
        ctx.fillText(`Your Final Score: ${points}`, 130, 200);
    }
  }


  function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    road();
    carPlayer.newPos();
    carPlayer.update();
    updateObstacles();
    score();
    gameOver();
  }