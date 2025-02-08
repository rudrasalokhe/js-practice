class Rectangle {
    constructor(height, width, paint){
        this.height = height;
        this.width = width;
        this.paint = paint;
    }
    area(){
        const area = this.height * this.width;
        return area;    
    }
    paint(){
        console.log(`Painting with ccolor ${this.paint}`);
    }
}
const react = new Rectangle(2,4);
console.log(`The area of your circle is ${react.area()}`);