import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
        [
          'script', {src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}
        ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "你好，小末花",
      description: "小末花的官方站点",
    },
    "/en/": {
      lang: "en-US",
      title: "Hello,XiaoMo",
      description: "The official site of XiaoMo Flower",
    },
  },

  theme,

  shouldPrefetch: false,
});
