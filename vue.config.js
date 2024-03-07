const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// port configf
module.exports = {
  devServer: {
    port: process.env.PORT || 8080,
  },
};

