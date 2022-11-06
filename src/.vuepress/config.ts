import { defineUserConfig } from "vuepress";

import { theme } from "./theme";

import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  head: [["link", { rel: "icon", href: "/ballex2.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ballex² 制图教程",
      description: "基于 Ballex Map Editor Pro 0.16.3b4 编写",
    },
    "/en/": {
      lang: "en-US",
      title: "Ballex² Mapping Tutorial",
      description: "Based on Ballex Map Editor Pro 0.16.3b4",
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
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/en/": {
          placeholder: "Search",
        },
      },
    }),
  ],
});
