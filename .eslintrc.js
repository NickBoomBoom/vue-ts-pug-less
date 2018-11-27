module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components':0,
    'vue/require-prop-type-constructor':0,
    "eqeqeq": [2, "allow-null"],  // 强制 === 
    "no-empty":1, // 禁止空语句
    "no-unexpected-multiline":1,//: 禁止出现令人困惑的多行表达式
    "no-unreachable":1,// 禁止在return、throw、continue 和 break语句之后出现不可达代码
    // "no-undef": 1,//不能有未定义的变量,
    "no-dupe-args": 2,//函数参数不能重复
    "no-shadow": 0,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
