// 请实现基于 Thunk 函数的 Generator 函数自动运行器 （此题请自学完成）

function run(fn) {
    var gen = fn();
  
    function next(err, data) {
      var result = gen.next(data);
      if (result.done) return;
      result.value(next);
    }
  
    next();
  }
  
  function* g() {
    // ...
  }
  
  run(g);