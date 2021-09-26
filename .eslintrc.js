module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 2,
    strict: 2, // 使用严格模式
    // 基础规则
    eqeqeq: 1, // 使用全等===或者!==
    curly: [2, 'multi-line'], // 条件控制语句多行时必须使用大括号
    'default-case': 1, // 要求 switch语句中有default分支
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0, // 正式环境禁止使用alter
    'no-multi-spaces': 2, // 禁止使用多余的空格
    'no-redeclare': 2, // 禁止多次声明同一变量
    // 逻辑相关
    'no-extra-parens': 0, // 禁止不必要的括号
    'no-empty': 2, // 禁止出现空语句块
    'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
    'no-dupe-args': 2, // 禁止 function定义中出现重名参数
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止出现重复的 case 标签
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    'no-unreachable': 2, // 禁止有无法执行的代码
    // 'no-console': process.env.NODE_ENV === 'production' ? 1 : 0, // 禁止console
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 正式环境禁止使用debugger
    // 变量声明相关
    'no-var': 2, // 使用let和const代替var
    'no-unused-vars': 2, // 禁止出现未使用过的变量
    'no-shadow-restricted-names': 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    // 代码风格相关
    indent: [2, 2, { SwitchCase: 1 }], // 2格缩进，switchcase 1格缩进
    semi: 2, // 语句必须以分号结尾
    'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
    'switch-colon-spacing': [2, { after: true, before: false }], // switch case和default子句的冒号左右空格
    'spaced-comment': [2, 'always'] // 注释//或/*必须跟随至少一个空白
  }
};
