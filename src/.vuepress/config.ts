import { defineUserConfig } from "vuepress";

import { viteBundler } from "@vuepress/bundler-vite";

import { theme } from "./theme";

import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import { cut } from "nodejs-jieba";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: theme,

  head: [["link", { rel: "icon", href: "/ballex2.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ballex² 制图教程",
      description: "基于 Ballex Map Editor Pro 0.19.0b1 编写",
    },
    "/en/": {
      lang: "en-US",
      title: "Ballex² Mapping Tutorial",
      description: "Based on Ballex Map Editor Pro 0.19.0b1",
    },
  },

  markdown: {
    breaks: true,
  },

  plugins: [
    shikiPlugin({
      theme: "dark-plus",
    }),
    searchProPlugin({
      indexContent: true,
      searchDelay: 1000,
      autoSuggestions: false,
      hotKeys: [],
      indexLocaleOptions: {
        "/": {
          // tokenize the content with nodejs-jieba
          tokenize: (text, fieldName) =>
            fieldName === "id" ? [text] : cut(text, true),
        },
      },
    }),
  ],
});
