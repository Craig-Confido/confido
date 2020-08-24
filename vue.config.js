const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  
  lintOnSave: true,
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },

  runtimeCompiler: true,
  productionSourceMap: false,

  pwa: {
    name: 'KEJK',
    themeColor: '#272727',
    msTileColor: '#272727',
    workboxOptions: {
      skipWaiting: true
    }
  }
}