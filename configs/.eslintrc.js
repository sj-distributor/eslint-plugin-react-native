module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "simple-import-sort", "unicorn", "import"],
  env: {
    es2022: true,
    browser: true,
    "react-native/react-native": true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    camelcase: "error", // 要求变量命名使用驼峰式
    "spaced-comment": "error", // 要求强制执行注释 // 或 /* 开始后的间距的一致性
    "import/extensions": 0, // (关闭) .js 解析为模块并检查 exports 的文件扩展名列表，如果是React 或者使用 TypeScript 将要去共享配置 settings 添加修改
    "import/no-unresolved": 0, // (关闭) 导入的模块可以解析为本地文件系统上的模块
    "no-duplicate-imports": "error", // 要求每个模块只能有一个 imports，相同的内容可以在各自的 imports 上看到导入的内容
    "react/react-in-jsx-scope": 0, // (关闭) 使用 jsx 时不允许缺少 React 的引入
    "simple-import-sort/imports": "error", // imports 排序
    "simple-import-sort/exports": "error", // exports 排序
    // 强制文件名大小写样式
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true, // 是否支持横杠 (-) 命名
          camelCase: false, // 是否支持小驼峰命名
          snakeCase: false, // 是否支持 (_) 下划线命名
          pascalCase: false, // 是否支持大坨峰命名
        },
      },
    ],
    // Hooks 有依赖项的话强制要求补充依赖项
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": ["error"],
    // 要求或不允许在给定的2种语句之间有空行
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" }, //  要求 return 语句之前要有空行
      {
        blankLine: "always",
        prev: ["function", "const", "var", "let"], // 指定语法糖语句之间要有空行
        next: "*",
      },
    ],
  },
  // 共享配置，提供给每一个将被执行的规则
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect", // ‘detect’ 会自动选择你所安装的 React 版本
    },
  },
};
