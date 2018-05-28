// 请实现与下面 Generator 函数 等价的迭代器

//  function* gen(){
//      yield 1
//      yield 2
//      return 3;
//  }

let it = makeIterator([1, 2, 2]);

it.next() // { value: 1, done: false }
it.next() // { value: 2, done: false }
it.next() // { value: 3, done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}