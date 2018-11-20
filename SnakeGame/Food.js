class Food{
  constructor(){
    this.width = 10;
    this.height = 10;
    this.color  ='orange';
    this.eaten = true;
    this.foodList = [];
  }
  drawFood() {
    this.foodList.forEach((f,i) => {
      ctx.save();
        ctx.fillStyle = food.color;
        ctx.fillRect(f.x, f.y, this.width, this.height);
      ctx.restore();
    });
  }
  generateFood(){
    while(this.eaten){
      this.foodList.push({x: Math.random()*(500 - this.width), y:Math.random()*(500 - this.height) });
      this.eaten = false;
    }
  }
}
