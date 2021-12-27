class Start {
    x;
    y;
    width;
    height;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    get x() {
        return this.x;
    }

    set x(value) {
        this.x = value;
    }

    get y() {
        return this.y;
    }

    set y(value) {
        this.y = value;
    }

    get width() {
        return this.width;
    }

    set width(value) {
        this.width = value;
    }

    get height() {
        return this.height;
    }

    set height(value) {
        this.height = value;
    }

    drawStart(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle='blue';
        ctx.fill();
    }
}