const ctx = document.getElementById('ctx').getContext('2d');
const WIDTH  = 500;
const HEIGHT = 500;
// declare a snake
const snakeBody = new Snake(10, 10, 'blue');
const food = new Food();
let interval;
  //*37 left  *38 up  *39 right  *40 down
document.onkeydown = function(event){
  if(event.keyCode === 37){
    if(snakeBody.direction !== 2)
      snakeBody.direction = 0;
  }
  else if(event.keyCode === 38){
    if(snakeBody.direction !== 3)
      snakeBody.direction = 1;

  }
  else if(event.keyCode === 39){
    if(snakeBody.direction !== 0)
    snakeBody.direction = 2;
  }
  else if(event.keyCode === 40){
    if(snakeBody.direction !== 1)
    snakeBody.direction = 3;
  }
}
