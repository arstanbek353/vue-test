const { defineConfig } = require("@vue/cli-service");
const PRODUCTIO_NURL = "vue-test"
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? `/${PRODUCTIO_NURL}/` : "/",
  transpileDependencies: true,
});
