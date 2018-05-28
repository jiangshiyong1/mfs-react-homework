// 请给对象 let obj={} 加上迭代器，实现其如果迭代返回的是无限 a 的序列
  let obj = {}
  obj[Symbol.iterator] = function () {
      return {
          next: function () {
              return {value: 'a', done: false}
          }
      }
  }
  for (let item of obj) {
    console.log(item)
  }