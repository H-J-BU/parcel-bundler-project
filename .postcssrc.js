//esm (에크마 스크리트) import, export
//CommonJS require, module.export

//import
const autoprefixer = require('autoprefixer')

//export
module.exports = {
  plugins: [
    autoprefixer
  ]
}

//이것을 완전히 간소화시킬 수 있음
//module.exports = { plugins: [require('autoprefixer')]}