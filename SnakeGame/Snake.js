class Snake{
  constructor(width, height, color){
    this.width  = width;
    this.height = height;
    this.color  = color;
    this.direction = 99;
    this.points = 0;
    this.snakeList = [
      {x:220, y:200},
      {x:210, y:200},
      {x:200, y:200}
    ]
  }

  drawSnake(){
    this.snakeList.forEach((sb,i) => {
      ctx.save();
      if(i !== 0)
          ctx.fillStyle = this.color;
        else
          ctx.fillStyle = "#000";
      ctx.fillRect(sb.x, sb.y, this.width, this.height);
      ctx.restore();
    });
  }

  updateSnakeList(){
    // console.log(this.direction);
    // console.log(this.snakeSize());
    for(let i = this.snakeSize() -1 ; i >= 0 ; i--){
      // console.log(this.direction);
      if(this.direction === 0){
        if(i === 0)
          this.snakeList[i].x = this.snakeList[i].x - this.width;
        else
          this.overLaping(i);
            // console.log("left");
      }else if(this.direction === 1){
        if(i === 0)
          this.snakeList[i].y = this.snakeList[i].y - this.height;
        else
          this.overLaping(i);
            // console.log("up");
      }else if(this.direction === 2){
        if(i === 0)
          this.snakeList[i].x = this.snakeList[i].x +this.width;
        else
          this.overLaping(i);
            // console.log("right");
      }else if(this.direction === 3){
        if(i === 0)
          this.snakeList[i].y = this.snakeList[i].y +this.height;
        else
          this.overLaping(i);
            // console.log("down");
      }
    }

  }
  // move the tail to the head
  overLaping(idx){
    this.snakeList[idx].x = this.snakeList[idx-1].x;
    this.snakeList[idx].y = this.snakeList[idx-1].y;
  }
  checkSnakePosition(){
    if(this.snakeList[0].x > 500 - this.width ){
      this.snakeList[0].x = 0;
    }
    if(this.snakeList[0].x < 0){
      this.snakeList[0].x = 500 - this.width;
    }
    if(this.snakeList[0].y > 500 - this.height){
      this.snakeList[0].y = 0;
    }
    if(this.snakeList[0].y < 0){
      this.snakeList[0].y = 500 - this.height;
    }
  }
  checkFoodEaten(food){
    if(this.TestCollision(food,food.foodList[0])){
      // score increase
        this.points++;
        food.foodList.pop();
        this.snakeGrow();
        food.eaten = true;
     }
  }
  TestCollision(body,collide){
    return collide.x  <=  this.snakeList[0].x + this.width
       && collide.x   + body.width >= this.snakeList[0].x
       &&  collide.y  <= this.snakeList[0].y + this.height
       && collide.y  + body.height   >= this.snakeList[0].y ;
  }

  snakeGrow(){
    // add to the end of the snake body
    let x_dir, y_dir;
    if(this.direction == 0){
      x_dir = this.snakeList[0].x -10;
      y_dir = this.snakeList[0].y
    }else if(this.direction == 1){
      x_dir = this.snakeList[0].x
      y_dir = this.snakeList[0].y -10;
    }else if(this.direction == 2){
      x_dir = this.snakeList[0].x +10;
      y_dir = this.snakeList[0].y
    }else if(this.direction == 3){
      x_dir = this.snakeList[0].x
      y_dir = this.snakeList[0].y +10;
    }
    this.snakeList.unshift({x: x_dir, y: y_dir});
  }
  isGameOver(snake){

    for(let i = 1; i < this.snakeSize(); i++){
      if(this.TestCollision(snake, this.snakeList[i])){
        return true;
      }
    }
    return false;
  }
  TestCollision(body,collide){
    return collide.x  <  this.snakeList[0].x + this.width
       && collide.x   + body.width > this.snakeList[0].x
       &&  collide.y  < this.snakeList[0].y + this.height
       && collide.y  + body.height   > this.snakeList[0].y ;
  }

  getPoints(){
    return this.points;
  }
  snakeSize(){
    return this.snakeList.length;
  }

}
