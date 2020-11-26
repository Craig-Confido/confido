// const path = require('path');

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
    name: 'Confido',
    themeColor: '#F1F1FF',
    msTileColor: '#F1F1FF',
    workboxOptions: {
      skipWaiting: true
    }
  }
}