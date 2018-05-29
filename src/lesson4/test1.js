// 请写出与下面 ES5 代码等价的 ES6 代码

// function Point(x, y) {
//    this.x = x;
//    this.y = y;
// }

// Point.prototype.toString = function () {
//    return '(' + this.x + ', ' + this.y + ')';
// };

// var p = new Point(1, 2);

    class Point{
        constructor(x, y){
            this.x = x
            this.y = y
        }
        toString () {
            return '(' + this.x + ', ' + this.y + ')'
        }
    }
    var obj = new Point(1, 10)
    console.log(obj)