// es6 Reflect => 反射
// Java 的反射机制是在编译阶段不知道是那个类被加载，而是在运行的时候才加载，执行

// console.log(Math.floor.apply(null, [3.72]))

// es6 映射写法
// console.log(Reflect.apply(Math.floor, null, [4.72])) // 向上取整
// 作用
// Math.ceil  向下取整
let price = 101.5
// es5
if (price > 100) {
  price = Math.floor.apply(null, [price])
} else {
  price = Math.ceil.apply(null, [price])
}
// es6 中的应用 apply的应用
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]))

// es5
let d = new Date()
// console.log(d.getTime())

// es6
let d2 = Reflect.construct(Date, []) // 没有参数时必须传一个空数组
console.log(d2.getTime())

let obj = { x: 1, y: 1 }
let student = {}
// Reflect 把对象上的操作移到这个上面，使对象的操作更加程序化
const r = Reflect.defineProperty(student, 'name', { value: 'Mik2' })
const r2 = Object.defineProperty(student, 'name', { value: 'Mik2' })
student.name = 'hahahh'
console.log(r)
console.log(r2)
// defineProperty 添加和修改对象的属性 ， 默认情况下其添加额属性使不可修改的，Reflect 返回值使true或false Objec返回的使对象，第一种更加程序化，能判读是否成功
// Reflect.deleteProperty(obj, 'x') // 删除
console.log(Reflect.get(obj, 'x')) // 获取key值
console.log(Reflect.get([3, 4], 1)) // 获取索引下的值

console.log(Object.getOwnPropertyDescriptor(obj, 'x'))
console.log(Reflect.getOwnPropertyDescriptor(obj, 'x')) // 获取object对象下的具体的属性描述符（就是属性的值，属性是否可读，是否可以修改，是否可以配置）

let d3 = new Date()
console.log(Reflect.getPrototypeOf(d3)) // 获取实例对象上的原型对象

console.log(Reflect.has(obj, 'x')) // 是否有属性x  这个方法是Object上没有的，但是Object上的方法基本上Reflect都有 基本的区别都是返回值不同
Object.freeze(obj) // 冻结对象，不能再继续扩展和修改
obj.z = 3
obj.y = '55'
console.log(obj)
let obj2 = { x: 1, y: 1 }
Reflect.set(obj2, 'x', 4) // 新增和修改对象
const arr = ['a', 'b', 'c']
Reflect.set(arr, 2, 'goose') // Reflect 方法基本都适用于数组因为数组是特殊的object对象
console.log(arr)
console.log(obj2)
console.log(Reflect.isExtensible(obj)) // 判断对象是否可扩展
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     const element = object[key];

//   }
// }

console.log(Reflect.ownKeys(obj))// 获取对象自身的属性，不要原型链上的
console.log(Reflect.ownKeys([1, 2]))

// console.log()
Reflect.preventExtensions(obj) // 和Object.freeze一样，阻止扩展
console.log(Reflect.isExtensible(obj)) // 判断对象是否可扩展

const arr1 = [1, 2, 3]
console.log(Reflect.getPrototypeOf(arr1))
Reflect.setPrototypeOf(arr1, String.prototype)// 修改原型对象 将数组的原型对象修改为了String
// arr1.sort() 这个就报错了
console.log(Reflect.getPrototypeOf(arr1))
