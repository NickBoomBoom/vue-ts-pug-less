import Vue from "vue";
Vue.filter("toYMD", toYMD);
Vue.filter("toTimeDes", toTimeDes);

/**
 *7天以内--×天前（最多6天前）；以外显示年月日
 *
 * @param {*} t 时间戳
 * @param {*} limit 天数限制
 * @param {*} str  描述文字
 * @returns ex: 2019-09-12  || 3天前
 */
function toTimeDes(t:number, limit:number = 6, str:string='天前') {
  t = t * 1000;
  let res:string;
  const nowTime:number= new Date().getTime();
  const day:number= 1000 * 60 * 60 * 24;
  const d:number = Math.floor((nowTime - t) / day);
  if (d) {
    res = d > limit ? toYMD(t/1000) : d + str;
  } else {
    // 在同一天
    let m  = ~~((nowTime - t) / 1000 /60)
    let h = ~~(m / 60 )
    res = h >= 1 ? h +'小时前': m + '分钟前' 
  }
  return res;
}


/**
 * 转换年月日
 *
 * @param {*} t
 * @param {string} [c="-"]
 * @returns
 */
function toYMD(t: any, c: string = "-") {
  t = new Date(t * 1000);
  let y = t.getFullYear();
  let m = fill(t.getMonth() + 1);
  let d = fill(t.getDate());
  let res = y + c + m + c + d;
  return res;
}

// ! 暂不暴露
function fill(num: any): any {
  if (num && +num < 10) {
    return "0" + num;
  }
  return num;
}
