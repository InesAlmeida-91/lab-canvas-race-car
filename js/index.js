window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    //clear canvas
    ctx.clearRect(0, 0, 500, 700);
    // Load road image
    const roadImg = new Image(); // Create new <img> element
    roadImg.src = './images/road.png'; // Set source path
    // Draw road image on canvas drawImage(image, x, y, width, height)
    ctx.drawImage(roadImg, 0, 0, 500, 700);  
  } //only appears after 2 clicks??

  const carImg = new player()
  carImg = './images/car.png'
  let carImgX = 0;
  let carImgY = 0;
  ctx.drawImage(carImg, carImgX, carImgY, 50, 50);

}


 
