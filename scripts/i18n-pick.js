const glob = require('glob');
const fs = require('fs');
const { transformFileAsync } = require('@babel/core');
const config = require('../i18n.config.js');

const wordSet = new Set();

/** unicode cjk 中日韩文 范围 */
const DOUBLE_BYTE_REGEX = /[\u4E00-\u9FFF]/;
function detectChinese(text, path) {
  if (DOUBLE_BYTE_REGEX.test(text)) {
    wordSet.add(text.trim().replace(/[\r\n]/g, ''));
  }
}

function scan({ types: t }) {
  return {
    visitor: {
      // 匹配: const text = '中文文案'; new Person('小红')
      StringLiteral(path) {
        const { node } = path;
        detectChinese(node.value, path);
      },
      // 匹配: jsx 文本 & 属性
      JSXText(path) {
        detectChinese(path.node.value);
      },
    },
  };
}

const { exclude = [] } = config;

function run(path) {
  glob(`${path}/**/*.{js,jsx,ts,tsx}`, {
    ignore: exclude.concat('node_modules/**'),
  })
    .then(files => {
      Promise.all(
        files.map(filename => {
          // todo 可以匹配一些规则，直接返回

          return transformFileAsync(filename, {
            plugins: [
              // 装饰器插件
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              scan,
            ],
            presets: [
              [
                '@babel/preset-typescript',
                // 强制开启 jsx 解析，否则尖括号可能会被识别为 typescript 的类型断言。如 `var foo = <string>bar;`
                { isTSX: true, allExtensions: true },
              ],
              ['@babel/preset-env', { targets: 'chrome > 58' }],
            ],
          });
        })
      ).then(() => {
        const langPath = 'src/i18n/locales/en-US.json';
        fs.readFile(langPath, (err, d) => {
          if (err) return console.error(err);

          const content = JSON.parse(d.toString());
          const actual = Object.assign(
            {},
            Object.fromEntries(wordSet.entries()),
            content
          );

          fs.writeFileSync(
            langPath,
            JSON.stringify(actual, null, 2),
            err => {}
          );
        });
      });
    })
    .catch(err => {
      console.error(err);
    });
}

run('./src');
