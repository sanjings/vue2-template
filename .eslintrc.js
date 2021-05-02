module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  plugins: ["prettier"],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    /* 警告 */
    'eqeqeq': 1, // 使用全等===或者!==
    "no-extra-parens": 1, // 多余的括号
    "default-case": 1, // 在switch语句中需要有default语句
    // 'no-console': process.env.VUE_APP_CURRENTMODE === 'production' ? 1 : 0, // 禁止console

    /* 错误 */
    "prettier/prettier": 2,
    'indent': [2, 2, {"SwitchCase": 2}], // 2格缩进
    'semi': 2, // 语句必须以分号结尾
    "no-multi-spaces": 2, // 不能用多余的空格
    "key-spacing": [2, {  // 对象字面量中冒号的前后空格
      "beforeColon": false,
      "afterColon": true
    }],
    "no-var": 2, // 使用let和const代替var
    'no-debugger': process.env.VUE_APP_CURRENTMODE === 'production' ? 2 : 0, // 正式环境禁止使用debugger
    'no-alert': process.env.VUE_APP_CURRENTMODE === 'production' ? 2 : 0, // 正式环境禁止使用alter
    "no-cond-assign": 2, // 条件语句禁止赋值表达式
    "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
    "no-dupe-args": 2, // 函数参数不能重复
    "no-dupe-keys": 2, // 对象中不允许出现重复的键 {a:1,a:1}
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-invalid-regexp": 2, // 禁止无效的正则表达式
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
    "no-shadow-restricted-names": 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
  }
}
