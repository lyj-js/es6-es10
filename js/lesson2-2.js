// for 循环
// 特点 支持（
// continue, 打断符合条件的训话，其他循环继续
// break） 符合条件后，整个循环完全终止。
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    break
  }
//   console.log(arr[i])
}

// forEach
// 不支持 continue break 也就是一旦开始循环则必须执行完
// 可遍历的对象，不一定是数组 lesson2-5.js 有关于 forEach 和 for of 关于可遍历对象的解释
arr.forEach(function (item) {
//   console.log(item)
})

// every
// 默认返回 false， 循环不会再往下执行，返回true之后则循环继续
// 均返回true的话，用法和forEach类似，但是次循环方法是可控的，通过符合条件的情况下返回true或false可以变相的实现for循环中的continue和break方法

// arr.every(function (item) {
//   console.log(item)
//   return true
// })
arr.every(function (item) {
  // 相当于 break 循环结束
  if (item === 2) {
    return false
  }
})

arr.every(function (item) {
  // 相当于 continue
  if (item === 2) {
    return true
  } else {
    // console.log(item)
    return true
  }
})

// for in 支持break 和 continue  用作object的循环 用作数组是有问题的，因为数组也是对象，一旦给数组添加属性例如：arr.a = 8则for in循环出来的index值将变成a，如果用这个方法拿索引，程序就会出现问题，同时索引的类型为string类型，‘===’做判断会出现问题
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];

//     }
// }
for (let index in arr) {
  if (index * 1 === 2) {
    continue
  }
  // console.log(index, arr[index])
}

// for of
// 怎么判断一个对象或数组是可遍历的？（并不知只有数组和object可遍历，es6开始可以自定义数据结构，可能并不是数组或者object，es6为这样的数据结构提供了循环方法，for of）
// for (let item of arr) {
//   console.log('for of')
//   console.log(item)
// }

// 例如自定义数据
const price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}
// 要求循环直接拿到对象中每个数组中最小的值

// 第二节 数组转换
/**
 * 伪数组 1.有长度，有索引 2.不能使用数组的api
    常见的 伪数组有 argument和js获取的dom集合
    {'0':1,'1':2,length:2}
    */

// es5 数组转换
// let args = [].slice.call(arguments)  // arguments  es6 已经弃用
// let imgs = [].slice.call(document.querySelectorAll('img)) // NodeList

// es6 数组转换  Array.prototype.from
// let args = Array.from(arguments)
// let array = Array.from({length:5},function(){return 1})

// 第三节  生成新数组

//  es5   let array2 = Array(5)
// es6

// let array = Array(5).fill(7) 可以初始化数组 5个7
// 用法 Array.fill(value,start,end)

// 第四节 查找数组
// 1 Array.prototype.filter 返回 符合条件的所有值
// 2 Array.prototype.find   返回 符合条件的第一个值
// 3 Array.prototype.findIndex 返回 符合条件的索引
// 4 Array.prototype.some 符合条件返回true
// let arr1 = [1, 2, 3, 4, 5]
// let some = arr1.some(v => v == 2)
// console.log(some)
