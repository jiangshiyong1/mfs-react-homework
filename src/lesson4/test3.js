// 请实现一个类方法的修饰器，使得每次调用修饰器修饰的方法，都会打印 log
class Math {
    @log
    add(a, b) {
      return a + b;
    }
  }
  
  function log(target, name, descriptor) {
    var oldValue = descriptor.value;
  
    descriptor.value = function() {
      console.log(`Calling ${name} with`, arguments);
      return oldValue.apply(this, arguments);
    };
  
    return descriptor;
  }
  
  const math = new Math();
  
  // passed parameters should get logged now
  math.add(2, 4);