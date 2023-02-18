import { defineUserConfig } from "vuepress";

import { theme } from "./theme";

import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  head: [["link", { rel: "icon", href: "/ballex2.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ballex² 制图教程",
      description: "基于 Ballex Map Editor Pro 0.18.0b1 编写",
    },
    "/en/": {
      lang: "en-US",
      title: "Ballex² Mapping Tutorial",
      description: "Based on Ballex Map Editor Pro 0.18.0b1",
    },
  },

  markdown: {
    breaks: true,
  },

  theme: theme,

  plugins: [
    shikiPlugin({
      theme: "dark-plus",
    }),
    searchProPlugin({
      delay: 1000,
      hotKeys: [],
      indexContent: true,
    }),
  ],
});
