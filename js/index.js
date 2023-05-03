window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame(); 
    const carPlayer = new car();
    carPlayer.draw();
  };

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  class car {
    constructor() {
      this.x = 225;//starting posisiton x
      this.y = 575;//starting posisiton y
      this.width = 50;//img size
      this.height = 100;// img size
      this.img = new Image();
      this.img.src = '../images/car.png'
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
  }

function updateCanvas() {
    ctx.clearRect(0, 0, 500, 700);
    carPlayer.draw();
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

  
  
  function startGame() {
    //clear canvas
    ctx.clearRect(0, 0, 500, 700);
    // Load road image
    const roadImg = new Image(); // Create new <img> element
    roadImg.src = './images/road.png'; // Set source path
    // Draw road image on canvas drawImage(image, x, y, width, height)
    ctx.drawImage(roadImg, 0, 0, 500, 700);
    } //only appears after 2 clicks??
}



 
