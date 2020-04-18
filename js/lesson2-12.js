// Generator
// 如何让遍历停下来 不同与break和continue（这两个api是跳出循环或者是跳过），停下来的意思是，当符合条件时循环停止，再次使用循环时还可以恢复继续执行

// es5 的循环停不下来
function loop () {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
}
// loop()

// es6 可以停下来的循环
function * loop2 () {
  for (let i = 0; i < 5; i++) {
    yield console.log(i)
  }
}
const l = loop2()
// l.next()
// l.next()

function * gen () {
  let val
  val = yield 1
  console.log(val)
}
const l1 = gen()

l1.next() // 未console出值，因为 遇到yield 就停止了
l1.next() // undefined  继续往下执行，yield执行，返回undefined

function * gen2 () {
  let val
  val = yield * [1, 2, 3]
  console.log(val)
}
const l2 = gen2()

console.log(l2.next()) //

function * gen3 () {
  let val
  val = yield [1, 2, 3]
  console.log(val)
}
const l3 = gen3()

console.log(l3.next())

// 改变程序运行结果
function * gen4 () {
  let val
  val = (yield [1, 2, 3]) + 7
  console.log(val)
}

const l4 = gen4()
console.log(l4.next(10))
console.log(l4.return(100))
// l4.return() // 结束
console.log(l4.next(20))
