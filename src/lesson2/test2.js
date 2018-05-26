// 请使用解构语法实现获取斐波那契数列前10个数
function* fib(){
    let a = 0;
    let b = 1;
    while(true){
      [a,b]= [b,a+b]
      yield a
    }
  }
var [a,b,c,d,e,f,g,h,i,j]=fib()
console.log([a,b,c,d,e,f,g,h,i,j])