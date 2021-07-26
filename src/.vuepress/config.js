module.exports = {
  head: [
    ["link", { rel: "icon", href: "/ballex2.ico" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ballex² 制图教程",
      description: "基于 Ballex Map Editor Pro 0.4.1b2 编写",
    },
    "/en/": {
      lang: "en-US",
      title: "Ballex² Mapping Tutorial",
      description: "Based on Ballex Map Editor Pro 0.4.1b2",
    },
  },

  themeConfig: {
    repo: "Dilant/B2METutorial",
    docsDir: "src",
    contributors: false,
    selectLanguageText: "语言 / Languages",

    locales: {
      "/": {
        selectLanguageName: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        tip: "提示",
        warning: "注意",
        danger: "警告",
        notFound: [
          "啪！没了",
          "跟我念，四——零——四——",
          "不太聪明的样子",
          "因为我只是一只小白兔",
          "在写了在写了",
          "嘿！你不该来这里的！",
          "按 Alt + F4 移交控制权",
          'Press "Ctrl + W" to destroy or "Alt + ←" to resurrect',
          "特特又不是万能的",
          "再刷新你就……你就看遍了（笑",
        ],
        backToHome: "返回首页",
        navbar: [
          {
            text: "起步",
            link: "/start/",
          },
          {
            text: "进阶",
            link: "/advanced/preface.md",
          },
          {
            text: "更多",
            children: [
              {
                text: "另请参阅",
                children: [
                  {
                    text: "Ballex 制图教程",
                    link: "https://ballex.dilant.cn/",
                  },
                ],
              },
              {
                text: "彩蛋",
                children: [{ text: "404 页面", link: "/404/" }],
              },
            ],
          },
        ],
        sidebar: {
          "/advanced/": [
            {
              isGroup: true,
              text: "进阶",
              children: [
                "preface.md",
                "texture-system.md",
                "custom-mesh.md",
                "trigger-system.md",
                "trigger.md",
                "executor.md",
              ],
            },
          ],
          "/mpp/": [
            {
              isGroup: true,
              text: "M++ 文档",
              link: "/mpp/",
              children: ["executor.md"],
            },
          ],
          "/": [""],
        },
      },

      "/en/": {
        selectLanguageName: "English",
        editLinkText: "Edit this page on GitHub",
        lastUpdatedText: "Last updated",
        notFound: [
          "Peek-a-boo!",
          "Read after me, four-oh-four--",
          "Looks not that clever",
          "Because I'm just a little bunny",
          "Coming s∞n",
          "Whoa there! Go back!",
          '"Alt + F4" to hand over the control',
          'Press "Ctrl + W" to destroy or "Alt + ←" to resurrect',
          "I'm nowhere near omnipotent",
          'No "F5" any more, I\'ve told you!',
        ],
        navbar: [
          {
            text: "Start",
            link: "/en/start/",
          },
          {
            text: "Advanced",
            link: "/en/advanced/preface.md",
          },
          {
            text: "More",
            children: [
              {
                text: "See Also",
                children: [
                  {
                    text: "Ballex Mapping Tutorial",
                    link: "https://ballex.dilant.cn/en/",
                  },
                ],
              },
              {
                text: "Easter Egg",
                children: [{ text: "404 Page", link: "/en/404/" }],
              },
            ],
          },
        ],
        sidebar: {
          "/en/advanced/": [
            {
              isGroup: true,
              text: "Advanced",
              children: [
                "preface.md",
                "texture-system.md",
                "custom-mesh.md",
                "trigger-system.md",
                "trigger.md",
                "executor.md",
              ],
            },
          ],
          "/en/mpp/": [
            {
              isGroup: true,
              text: "M++ Document",
              link: "/en/mpp/",
              children: ["executor.md"],
            },
          ],
          "/en/": [""],
        },
      },
    },
  },

  markdown: {
    breaks: true,
  },

  plugins: [
    ["shiki", { theme: "dark_plus" }],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
          "/en/": {
            placeholder: "Search",
          },
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        skipWaiting: true,
      },
    ],
  ],
};