class Garbage {
    x;
    y;
    width;
    height;
    speed;
    src;
    constructor(x,y,width,height,speed,src){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=speed;
        this.src=src;
    }
    get x(){
        return this.x;
    }
    get y(){
        return this.y;
    }
    get width(){
        return this.width;
    }
    get height(){
        return this.height;
    }
    get speed(){
        return this.speed;
    }
    set x(value){
        this.x=value;
    }
    set y(value){
        this.y=value;
    }
    set width(value){
        this.width=value;
    }
    set height(value){
        this.height=value;
    }
    set speed(value){
        this.speed=value;
    }
    get src(){
        return this.src;
    }
    set src(value){
        this.src=value;
    }
    moveLeft(){
        this.x= this.x-this.speed;
    }
    moveRight(){
        this.x=this.x+this.speed;
    }
    drawGarbage(ctx){
        let image=new Image();
        image.src=this.src;
        ctx.drawImage(image,this.x,this.y,this.width,this.height);
    }
    downSpeed(){
        this.speed /=1.5;
    }
    upSpeed(){
        this.speed *= 1.5;
    }
}