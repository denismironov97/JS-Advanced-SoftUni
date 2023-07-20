function rectangle(width, height, color) {
  const rectangleObj = {
    width,
    height,
    color: color.substring(0, 1).toUpperCase() + color.substring(1),
    calcArea() {
      let area = this.width * this.height;
      return area;
    },
  };

  return rectangleObj;
}

function rectangleV1(width, height, color) {
  class Rectangle {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color[0].toUpperCase() + color.substring(1);

      this.calcArea = () => {
        return this.width * this.height;
      };
    }
  }

  return new Rectangle(width, height, color);
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
