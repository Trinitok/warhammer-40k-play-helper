const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV == "production" ? "/warhammer-40k-play-helper/": "/",
  transpileDependencies: true
})
