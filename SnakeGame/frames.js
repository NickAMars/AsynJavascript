
const updateSnakePosition = () => {
  ctx.clearRect(0,0,WIDTH, HEIGHT);
  food.generateFood();
  food.drawFood();
  snakeBody.drawSnake();
  snakeBody.updateSnakeList();
  snakeBody.checkSnakePosition();
  snakeBody.checkFoodEaten(food);
  ctx.fillText('Score:  ' +  snakeBody.getPoints(), 450, 10);
  if(snakeBody.isGameOver(snakeBody)){
    clearInterval(interval);
  }

}

const startGame  = () =>{
   interval = setInterval(updateSnakePosition, 50);
}
// startGame();
