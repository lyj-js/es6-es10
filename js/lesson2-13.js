// Iterator
let authors = {
  allAuthors: {
    fichion: ['agla', 'sfkd', 'lp'],
    scienceFiction: [1, 2, 3],
    fantasy: ['q.e', 'E.t', 'P.o']

  },
  Addres: []

}
// es5获取作者名称
// 缺点： 一旦authors 数据结构改变 则循环的逻辑就要修改
// let r = []
// for (let [key, v] of Object.entries(authors.allAuthors)) {
//   r = r.concat(v)
// }
// console.log(r)

// es6+ 获取作者名称 只关注authors 不关注其内部数据结构
// authors[Symbol.iterator] = function () {
//   // 自定义遍历器
//   // 输入
//   //   this
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   console.log(keys)
//   let values = []
//   // 输出
//   return { // 固定格式
//     next () {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]]
//           keys.shift()
//         }
//       }
//       return {
//         done: !values.length, // 遍历是否结束 true： 结束 false： 遍历结束
//         value: values.shift() // 当前遍历项的值
//       }
//     }
//   }
// }

// 结合Generator的写法
authors[Symbol.iterator] = function * () {
  let allAuthors = this.allAuthors
  let keys = Reflect.ownKeys(allAuthors)
  console.log(keys)
  let values = []
  while (1) {
    if (!values.length) {
      if (keys.length) {
        values = allAuthors[keys[0]]
        keys.shift()
        // console.log(values)
        yield values.shift()
        // console.log(values)
      } else {
        return false
      }
    } else {
      yield values.shift()
    }
  }
}
let r = []
for (let v of authors) {
  r.push(v)
}
console.log(r)
