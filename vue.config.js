const { defineConfig } = require('@vue/cli-service')
// module.exports= defineConfig({
//   transpileDependencies: true
// });
module.exports = {
  lintOnSave: false,//关闭eslint
  productionSourceMap: false,
  devServer: {
    proxy: {
      'api': {
        target: 'http://gmall-h5-api.atguigu.cn'
      }
    }
  },
};
