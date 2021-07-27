'use strict';

class Rectangle {

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());


// наследование

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // всегда первой строкой!
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}`);
        console.log(`Цвет: ${this.bgColor}`);
        console.log(`Высота: ${this.height}`);
        console.log(`Ширина: ${this.width}`);
    }
}

const sq = new ColoredRectangleWithText(25,10,'hello', 'red');
console.log(sq.calcArea());
sq.showMyProps();
