// 参数默认值
// es5
function f (x, y, z) {
  // es5设置默认参数，通过判断赋值实现
  if (y === undefined) {
    y = 4
  }
  if (z === undefined) {
    z = 8
  }
  return x + y + z
}

console.log(f(1))

// es6
// 默认值直接在参数中设置
function f2 (x, y = 7, z = 42) {
  return x + y + z
}
// 如果没有第二个参数 传参方式
console.log(f2(1, undefined, 43))

// 也可以是表达式

function f3 (x, y = 7, z = x + y) {
  // console.log(Array.from(arguments)) // 传递的参数详情 但是es6 已经禁止了arguments
  return x * 10 + z
}
console.log(f3(1, undefined, 5))
console.log(f3(1))

// es6 中不支持argunment es6处理不定参数的方案

// 例子
function sum () {
  let num = 0
  // es5
  Array.prototype.forEach.call(arguments, function (item) {
    num += item * 1
  })

  // es6
  //   Array.from(arguments).from(function (item) {
  //     num += item * 1
  //   })

  return num
}
console.log(sum(1, 2, 3, 4))

// es6 处理arguments
function sum2 (...nums) {
  // Rest parameter
  let num = 0
  nums.forEach(function (item) {
    num += item * 1
  })
  return num
}
console.log(sum2(1, 23, 5))

function sum3 (base, ...nums) {
  let num = 0
  nums.forEach(function (item) {
    num += item * 1
  })
  return base * 2 + num
}
console.log(sum3(1, 2, 3))

// 2 参数固定 传参不固定

function sum4 (x = 1, y = 2, z = 3) {
  return x + y + z
}
let data = [10, 10, 10, 4]
// es5 处理方法 允许数据收敛到数组中，函数自动处理了。
console.log(sum4.apply(this, data))

// es6 处理方法
console.log(sum4(...data))

// es6 中的this

let test = {
  name: 'test',
  eat: function () { // es5 谁调用 this指向谁
    console.log(this.name) // test
  },
  say: () => { // es6 定义的时候this指向谁（就是函数定义之后，当前this的指向），之后不会改变
    console.log(this.name, this) // undefined
  }

}
test.say() // 执行这块代码，console this 是空对象，但是把test复制到浏览器的console里面 this指向的是window。主要原因是webpack的作用引起的。 webpack打包的时候执行了eval(),eval是可以把字符串当代码执行，eval把最外层作用域指向了空对象，也就是说如果没有webpack环境的话，这里的this是执行window，因为函数定义的时候就是指向window
test.eat()

var Anmaiton = function (type) {
  this.type = type
  this.eat = function () {
    console.log(this)
  }
}
let obj = new Anmaiton('this测试')
obj.eat()
