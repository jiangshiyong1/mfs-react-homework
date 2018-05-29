// 请实现Circle类，其表示平面上的一个圆，构造时需要传入 x,y,r 分别为圆在平面上的坐标 (x,y）和其半径 r，需要支持使用 circle.area 获取当前圆的面积
class Circle{
    constructor(x, y ,r){
        this.x = x
        this.y = y
        this.r = r
    }
    get area() {
        return 3.14 * this.r * this.r 
    }
}
let circle = new Circle(1, 1, 5)
console.log(circle.area)