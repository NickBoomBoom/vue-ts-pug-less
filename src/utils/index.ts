/**
 * 获取window.search后参数
 * @param name
 * @returns {null}
 */
function getQueryString(name: string): any {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r !== null) return unescape(r[2])
  return null
}

/**
 *  等分切割数组
 *
 * @static
 * @param {*} arr 数组
 * @param {*} limit 份数
 * @returns
 */
function arraySlice(arr: any[], limit: number): any[] {
  let res: any[] = []
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
function copy(dom: any): boolean {
  window.getSelection().removeAllRanges()
  var range = document.createRange()
  range.selectNode(dom)
  window.getSelection().addRange(range)
  let bol = document.execCommand('copy')
  return bol
}

// 严格模式下,除法的处理
function decimalLength(num1:number, num2:number):any[] {
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
function divide(num1:number, num2:number): any {
  var result = decimalLength(num1, num2)
  var length1 = result[0]
  var length2 = result[1]
  var integer1 = +num1.toString().replace('.', '')
  var integer2 = +num2.toString().replace('.', '')
  // 默认保留小数点最长的个数
  return integer1 / integer2 * Math.pow(10, length2 - length1)
}
// 乘法
function multiply(arg1:number, arg2:number):any {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try { m += s1.split('.')[1].length } catch (e) { console.error(e) }
  try { m += s2.split('.')[1].length } catch (e) { console.error(e) }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
// 加法
function plus(arg1:number, arg2:number):any {
  var r1, r2, m
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  return (multiply(arg1, m) + multiply(arg2, m)) / m
}
// 减法
function minus(arg1:number, arg2:number):any {
  var r1, r2, m, n
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return ((multiply(arg1, m) - multiply(arg2, m)) / m).toFixed(n)
}

/**
 * 保留两位小数, 不足补零
 *
 * @returns
 */
function toDecimal2(num:any):string{
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
function fillDigit(num:any):string {
  num = parseInt(num)
  if (num <= 9) {
    return '0' + num
  } else {
    return '' + num
  }
}

/**
 * 深拷贝一个对象
 * @param {*} p  原始对象
 * @param {*} c  新对象 可选
 *
 */
function deepCopy(p:any, c: any = {}):any {
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
  copy,
  minus,
  plus,
  multiply,
  divide,
  arraySlice,
  fillDigit,
  deepCopy,
  toDecimal2
}
