// object update
// es6 可以的写法

let x = 1; let y = 2; let z = 3
let obj = {
  x: x,
  y,
  [y + z]: 6,
  hello: function () {
    console.log('hello')
  },
  hello2 () {
    console.log('hello2')
  },
  * hello3 () { // 异步函数
    console.log('hello3')
  }
}

// Set数据格式
/**
 * 特点
 * 1. 存储的数据不能用有重复的，如果有重复的，会被自动过滤掉
 * 2. 存储任何可遍历的数据（不是只有数组）let a = new Set([1, 2, 3, 4])
 *
 */

let s = new Set()
// 新增数据
s.add('hello').add('goodbye')
// 删除数据
// s.delete('hello') // 删除指定
// s.clear() // 清空
// 查找数据
// s.has('hello')
// 长度
console.log(s.size)

console.log(s.keys()) // key
console.log(s.values()) // 键值
console.log(s.entries()) // 键值对
// set 没有提供改的api 可以先删再添加
s.forEach(item => {
  console.log(item)
})

for (let item of s) {
  console.log(item)
}

// map 数据结构
// 存储任何可遍历的数据 必须key value的格式 字典类型
// let map = new Map([[1,2],[3.4]])

let map = new Map()
// 添加 修改
map.set(1, 'value-1')
map.set(3, 'value-2')
map.set(1, 'value-3') // 修改
// 删除
// map.delete(1)
// map.clear()
// 统计
console.log(map.size)
// 查找
console.log(map.has(1)) // 查找的索引值
// 取值
console.log(map.get(1))
// 索引
console.log(map.keys())
// values
console.log(map.values())
console.log(map.entries())
console.log(map)

// forEach
map.forEach((value, key) => {
  console.log(value, key) // 注意value 和 key 的顺序
})
// for of
for (let [key, value] of map) {
  console.log(key, value)
}

// 进一步理解可遍历对象
let o = function () {
  console.log('o')
}
map.set(0, 4) // map 数据结构 function也可以做key值
console.log(map.get(o))

// 对象的copy
let target = {}
let source = {
  a: {
    b: {
      c: 10
    }
  }
}

Object.assign(target, source) // 次api 实现的是浅拷贝，只是数据指向地址的替换。
source.a = 5
console.log(target)

// 自学 WeakSet  WeakMap
