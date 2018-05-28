// 请实现 Generator 函数 range(start,end)，可以迭代出start到end直接所有整数
class RangeIterator {
    constructor(start, stop) {
      this.value = start;
      this.stop = stop;
    }
  
    [Symbol.iterator]() { return this; }
  
    next() {
      var value = this.value;
      if (value < this.stop) {
        this.value++;
        return {done: false, value: value};
      }
      return {done: true, value: undefined};
    }
  }
  
  function range(start, stop) {
    return new RangeIterator(start, stop);
  }
  
  for (var value of range(0, 3)) {
    console.log(value); // 0, 1, 2
  }