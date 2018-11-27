/**
 * 获取window.search后参数
 * @param name
 * @returns {null}
 */
function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r !== null) return unescape(r[2])
  return null
}
/**
 * 获取 dom 所有属性
 *
 * @param {*} dom
 * @returns
 */
function attr (dom) {
  return window.getComputedStyle(dom, null)
}
/**
 * 获取对象左，上，右和下分别相对浏览器视窗的位置。
 * 矩阵属性
 * @param {*} dom
 * @returns
 */
function matrixAttr (dom) {
  return dom.getBoundingClientRect()
}

/**
 *  等分切割数组
 *
 * @static
 * @param {*} arr 数组
 * @param {*} limit 份数
 * @returns
 */
function arraySlice (arr, limit) {
  let res = []
  for (let i = 0; i < arr.length; i += limit) {
    res.push(arr.slice(i, i + limit))
  }
  return res
}

/**
 *  复制文字
 *
 * @param {*} dom 需要复制的文字 dom
 * @returns  Boolean 值, true 则为复制成功, false 失败
 */
function copy (dom) {
  window.getSelection().removeAllRanges()
  var range = document.createRange()
  range.selectNode(dom)
  window.getSelection().addRange(range)
  let bol = document.execCommand('copy')
  return bol
}

// TODO: js 计算进度丢失 在严格模式中的解决方案
// 严格模式下,除法的处理
function decimalLength (num1, num2) {
  var length1
  var length2
  try {
    length1 = num1.toString().split('.')[1].length
  } catch (e) {
    length1 = 0
  }
  try {
    length2 = num2.toString().split('.')[1].length
  } catch (e) {
    length2 = 0
  }
  return [length1, length2]
}
// 除法
function divide (num1, num2) {
  var result = decimalLength(num1, num2)
  var length1 = result[0]
  var length2 = result[1]
  var integer1 = +num1.toString().replace('.', '')
  var integer2 = +num2.toString().replace('.', '')
  // 默认保留小数点最长的个数
  return integer1 / integer2 * Math.pow(10, length2 - length1)
}
// 乘法
function multiply (arg1, arg2) {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try { m += s1.split('.')[1].length } catch (e) {console.error(e) }
  try { m += s2.split('.')[1].length } catch (e) {console.error(e)}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
// 加法
function plus (arg1, arg2) {
  var r1, r2, m
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  return (this.accMul(arg1, m) + this.accMul(arg2, m)) / m
}
// 减法
function minus (arg1, arg2) {
  var r1, r2, m, n
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return ((this.accMul(arg1, m) - this.accMul(arg2, m)) / m).toFixed(n)
}

/**
 * 保留两位小数, 不足补零
 *
 * @returns
 */
function toDecimal2 (num) {
  var numStr = num + ''
  var dian = numStr.indexOf('.')
  var result = ''
  if (dian === -1) {
    result = Number(num).toFixed(2)
  } else {
    var cc = numStr.substring(dian + 1, numStr.length)
    if (cc.length > 2) {
      num += 0.01
      num = num * 100000000000 / 100000000000
      num += ''
      num = num.substring(0, num.indexOf('.') + 3)
    } else if (cc.length === 2) {
      num += ''
    } else {
      num += '0'
    }
    result = num
  }
  return result
}

/**
* 如果数字小于1位，前面用0填充 返回字符串格式
* @param num {Number} 数字
*/
function fillDigit (num) {
  num = parseInt(num)
  if (num <= 9) {
    return '0' + num
  } else {
    return '' + num
  }
}

// TODO: 时间处理方法

/**
 * 倒计时
 *
 * @static
 * @param {any} time 倒计时时间戳
 * @param {any} colon true: 冒号形式  20:30:00
 * @returns  01天01小时03分钟30秒 || 1:20:30:00
 */
function countDown (time, colon) {
  if (time <= 0) return false
  let dayMS = 86400000
  let d = time / dayMS >= 1 ? parseInt(time / dayMS, 10) : 0

  let realTime = (d ? time - d * dayMS : time) / 1000
  let h = parseInt(realTime / 60.0 / 60.0, 10)
  let m = parseInt((realTime - h * 60.0 * 60.0) / 60.0, 10)
  let s = parseInt(realTime - h * 60.0 * 60.0 - m * 60.0, 10)
  d = fillDigit(d)
  h = fillDigit(h)
  m = fillDigit(m)
  s = fillDigit(s)
  let res = ''
  if (colon) {
    d && (res = res + d + ':')
    res = (h ? res + h : res + '00') + ':'
    res = (m ? res + m : res + '00') + ':'
    res = res + s
  } else {
    d && (res = res + d + '天')
    h && (res = res + h + '小时')
    m && (res = res + m + '分')
    res = res + s + '秒'
  }
  return res
}

/**
 * 深拷贝一个对象
 * @param {*} p  原始对象
 * @param {*} c  新对象 可选
 *
 */
function deepCopy (p, c) {
  c = c || {}
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {}
      deepCopy(p[i], c[i])
    } else {
      c[i] = p[i]
    }
  }
  return c
}

export {
  getQueryString,
  attr,
  matrixAttr,
  copy,
  minus,
  plus,
  multiply,
  divide,
  arraySlice,
  countDown,
  fillDigit,
  deepCopy,
  toDecimal2,
}
