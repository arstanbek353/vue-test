const { defineConfig } = require("@vue/cli-service");
const PRODUCTIO_NURL = "https://github.com/arstanbek353/arstanbek353.github.io-vue-test.git"
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? `/${PRODUCTIO_NURL}/` : "/",
  transpileDependencies: true,
});
