class Boom{
    x;
    y;
    width;
    height;
    src;
    speed;
    constructor(x,y,width,height,src,speed) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.src=src;
        this.speed=speed;
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
    get src(){
        return this.src;
    }
    set src(value){
        this.src=value;
    }
    get speed(){
        return this.speed;
    }
    set speed(value){
        this.speed=value;
    }
    moveDown(){
        this.y += this.speed;
    }
    drawBoom(ctx){
        let image=new Image();
        image.src=this.src;
        ctx.drawImage(image,this.x,this.y,this.width,this.height);
    }

}