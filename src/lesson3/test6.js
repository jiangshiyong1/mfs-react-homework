// 请实现 Generator 函数 fib()，实现计算无限序列：斐波那契数列。并使用解构语法获得 fib() 函数计算斐波那契数列前 3 项

function* fib(){
    let [num1,num2] = [0,1];
    while(true){
        yield num1;
        [num1,num2] = [num2,num1+num2];
    }
  }
  
  var [x,y,z] = fib();