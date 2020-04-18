// proxy es6 代理

// let o = {
//   name: 'xiaoming',
//   price: 190
// }

// let d = new Proxy(o, {
//   get (target, key) {
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }

// })

// console.log(d.price, d.name)

// 应用1 只读
let o = {
  name: 'xiaoming',
  price: 190
}

// 备份一份数据 而且不能修改
let d = new Proxy(o, {
  get (target, key) {
    return target[key]
  },
  set (target, key, value) {
    return false
  }

})
d.price = 300
console.log(d.price, d.name)

// 应用1 备份一份数据 而且不能修改 es5 中实现方式
// 缺点是吧对象o完全锁死了，不方便后续操作
for (let [key] of Object.entries(o)) {
  Object.defineProperty(o, key, {
    writable: false
  })
}
o.price = 300
console.log(o.name, o.price)

// 应用2  校验，保护数据
// 1 数据结构不被改变，2 符合设定规则
let o2 = {
  name: 'xiaoli',
  price: 190
}
let d2 = new Proxy(o2, {
  get (target, key) {
    return target[key] || ''
  },
  set (target, key, value) {
    if (Reflect.has(target, key)) {
      if (key === 'price') {
        if (value > 300) {
          return false
        } else {
          target[key] = value
        }
      } else {
        target[key] = value
      }
    } else {
      return false
    }
  }
})
d2.price = 400
d2.name = 'ahahahah'
d2.age = 400

console.log(d2.price, d2.name, d2.age)

// 应用3 监控 上报错误

let o3 = {
  name: 'xiaoli',
  price: 190
}
// 监听错误
window.addEventListener('error', (e) => {
  // console.log(e.message)
  // 这里可以加上报逻辑，统一处理
}, true)
// 解耦逻辑
let validator = (target, key, value) => {
  if (Reflect.has(target, key)) {
    if (key === 'price') {
      if (value > 300) {
        // 本来是要写上报错误的逻辑，但是这里为了解耦，直接抛出错误，上报错误逻辑单独处理，这样抛出错误，和上报错误逻辑就完全分开了 不满足规则就触发错误
        // throw new TypeError('price exceed 300')
        return false
      } else {
        target[key] = value
      }
    } else {
      target[key] = value
    }
  } else {
    return false
  }
}
let d3 = new Proxy(o3, {
  get (target, key) {
    return target[key] || ''
  },
  set: validator
})
d3.price = 400
d3.name = 'ahahahah'
d3.age = 400

console.log(d3.price, d3.name, d3.age)

// 应用4 监听组件错误
// 1.唯一id 2.只读

class Component {
  // constructor () {
  //   this.id = Math.random().toString(36).slice(-8)
  // }
  // get id () {  id 只读
  //   this.id = Math.random().toString(36).slice(-8)
  // }

  // 使用代理
  constructor () {
    this.proxy = new Proxy({
      id: Math.random().toString(36).slice(-8)
    }, {}) // 第二个参数传空，不做操作
  }
  get id () { // id 只读
    return this.proxy.id
  }
}
let com = new Component()
let com2 = new Component()

for (let i = 0; i < 10; i++) {
  console.log(com.id, com2.id)
}
com.id = 'abc'
console.log(com.id, com2.id) // 不使用代理时，id被修改了

// 可撤销的代理操作
let o4 = {
  name: 'hhahahah',
  price: 150
}

let d4 = Proxy.revocable(o4, {
  get (target, key) {
    if (key === 'price') {
      return target[key] + 20
    } else {
      return target[key]
    }
  }
})
console.log(d4.proxy.price, d4)
setTimeout(() => {
  d4.revoke()
  setTimeout(() => {
    console.log(d4.proxy.price)
  }, 100)
}, 1000)
