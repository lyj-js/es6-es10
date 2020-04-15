// 字符串

function Price (string, type) {
  let s1 = string[0]
  console.log(type)
  const retailPrice = 20
  const wholesalePrice = 16
  let txt = ''
  if (type === 'retail') {
    txt = `购买单价是：${retailPrice}`
  } else {
    txt = `批发价是：${wholesalePrice}`
  }
  return `${s1}${txt}`
}
let showTxt = Price`您此次的${'retail'}${11}` // tag 函数 strings 参数指的是 Tag 函数后面被变量分割开的字符串集合，type 参数是对应第一个变量，Tag 函数可以有多个 type 类似的参数

console.log(showTxt)
