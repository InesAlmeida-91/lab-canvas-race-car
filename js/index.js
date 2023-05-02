window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  class car {
    constructor() {
      this.x = 225;
      this.y = 500;
      this.width = 50;
      this.height = 100;
      this.img = new Image();
      this.img.src = '../images/car.png'
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }
  
  function startGame() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Load road image
    const roadImg = new Image(); // Create new <img> element
    roadImg.src = './images/road.png'; // Set source path
    // Draw road image on canvas drawImage(image, x, y, width, height)
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    const carPlayer = new car();
    carPlayer.draw();
    } //only appears after 2 clicks??
}


 
