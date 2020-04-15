
// es 5 的回调地狱

function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => {
    callback(src)
  }
  document.head.append(script)
}
function test (name) {
  console.log(name)
}
loadScript('./1.js', function (script) {
  console.log('11')
  loadScript('./2.js', function (script) {
    console.log('22')
    loadScript('./3.js', function (script) {
      console.log('33')
    })
  })
})

// es6 promise

function loadScript2 (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.src = src
    script.onload = () => resolve(src)
    script.onerror = err => reject(err)
    document.head.append(script)
  })
}
console.log('=======================')
loadScript2('./1.js')
  .then((data) => {
    return loadScript2('./2.js') // 要加return返回值，不然返回的是空的promise对象，报错还是会继续执行
  }, err => {
    console.log(err)
  }).then(() => {
    loadScript2('./3.js')
  }, err => {
    console.log(err)
  })
  // .then 是promise原型上的方法，只要是promise对象均可以调用.then方法
  // .then 支持两个方法且都是函数类型 promise.then(onFulfilled(必选),onRejected(非必选))，如果传的不是函数，怎会返回一个空的promise对象，能保证只要调用.then对象，就能返回promise对象，保证了连续调用
// Promise.resolve(30)
//  Promise.reject(new Error('ss'))  reject 和 resolve 都是promise的静态方法

// promise 有all 方法，并行操作，必须都完成才能下一步
// promise 还有竞争的方法，就是谁先执行完就用谁的数据，然后执行下一步 例如
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1)
    }, 0)
  })
}
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2)
    }, 1000)
  })
}
Promise.race([p1(), p2()]).then(data => {
  console.log(data)
})
