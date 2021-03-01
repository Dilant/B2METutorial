const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Ballex² 制图教程",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [["meta", { name: "theme-color", content: "#ff9711" }]],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "Dilant/B2METutorial",
    editLinks: true,
    docsDir: "src",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: [
      {
        text: "起步",
        link: "/start/",
      },
      {
        text: "进阶",
        link: "/advanced/preface",
      },
      {
        text: "M++ 语法",
        link: "/mpp/",
      },
      {
        text: "Ballex 制图教程",
        link: "https://ballex.dilant.cn/",
      },
    ],
    sidebar: {
      "/advanced/": [
        {
          title: "进阶",
          collapsable: false,
          children: [
            {
              title: "前言",
              path: "preface",
            },
            {
              title: "材质系统",
              path: "texture-system",
            },
            {
              title: "自定义材质",
              path: "custom-mesh",
            },
            {
              title: "触发器系统",
              path: "trigger-system",
            },
          ],
        },
      ],
      "/": [""],
    },
  },

  markdown: {
    breaks: true,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  evergreen: true,
};
