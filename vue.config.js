const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/graphql-proxy': {
        target: 'https://venia.magento.com/graphql',
        changeOrigin: true,
        pathRewrite: {
          '^/graphql-proxy': '',
        },
        secure: true
      },
    },
  }
})
