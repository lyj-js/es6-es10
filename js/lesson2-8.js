// 解构赋值
// 凡是可遍历的对象（string,Set数据，Map数据等）均可以结构赋值，如下面第二个例子

// Array
// let arr = ['a', 'b', 'c', 'd']
// let [firstName,, thirdName] = arr
// console.log(firstName, thirdName)

let arr2 = 'abcd'
let [firstName,, thirdName] = arr2
console.log(firstName, thirdName)

let user = { name: 's', surname: 't' };
[user.name, user.surnang] = [1, 2]
console.log(user)

let user2 = { name: 's', surname: 't' }
for (let [k, v] of Object.entries(user2)) {
  // 隐式赋值
  console.log(k, v)
}

let arr3 = []
let [firstName2 = 'hello', curName, ...last] = arr3
console.log(firstName2, curName, last)

// Object
let options = {
  title: 'menu',
  width: 100,
  height: 200
}
// let { title: title2, width, height } = options // title=> title2 可以防止变量冲突
// console.log(title2, width, height)
let { title, ...last2 } = options
console.log(title, last2)

let options2 = {
  size: {
    width: 100,
    height: 200
  },
  items: ['Cake', 'Donut'],
  extra: true
}

let { size: { width: width2, height }, items: itemh, items: [item1] } = options2
console.log(width2, height, item1, itemh)
