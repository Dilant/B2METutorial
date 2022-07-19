const { defaultTheme } = require("vuepress");
const { shikiPlugin } = require("@vuepress/plugin-shiki");
const { docsearchPlugin } = require("@vuepress/plugin-docsearch");

module.exports = {
  head: [["link", { rel: "icon", href: "/ballex2.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ballex² 制图教程",
      description: "基于 Ballex Map Editor Pro 0.15.7b2 编写",
    },
    "/en/": {
      lang: "en-US",
      title: "Ballex² Mapping Tutorial",
      description: "Based on Ballex Map Editor Pro 0.15.7b2",
    },
  },

  theme: defaultTheme({
    repo: "Dilant/B2METutorial",
    docsBranch: "master",
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
            text: "Steam 抢先体验",
            link: "/early-access-status/",
          },
          {
            text: "起步",
            link: "/start/",
          },
          {
            text: "进阶",
            link: "/advanced/",
          },
          {
            text: "更多",
            children: [
              {
                text: "另请参阅",
                children: [
                  {
                    text: "Steam 商城页面",
                    link: "https://store.steampowered.com/app/1383570/",
                  },
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
          "/early-access-status/": [
            {
              isGroup: true,
              text: "Ballex² 抢先体验进度",
              link: "/early-access-status/",
              collapsable: false,
              children: [
                "control-and-functions.md",
                // "multiplayer.md",
                "changelog.md",
              ],
            },
          ],

          "/start/": [
            {
              isGroup: true,
              text: "起步",
              link: "/start/",
              collapsable: false,
              children: [
                "preparation.md",
                "basic-operation.md",
                "alignment.md",
                "road-generator.md",
                "release.md",
              ],
            },
          ],

          "/advanced/": [
            {
              isGroup: true,
              text: "进阶",
              link: "/advanced/",
              collapsable: false,
              children: [
                "mesh-system.md",
                "material-system.md",
                "joint-system.md",
                "trigger-system.md",
                "trigger.md",
                "executor.md",
                "custom-executor.md",
                "variable-system.md",
                "terrain-system.md",
                "particle-system.md",
                "audio-system.md",
                "collectable-system.md",
              ],
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
            text: "Steam Early Access",
            link: "/en/early-access-status/",
          },
          {
            text: "Start",
            link: "/en/start/",
          },
          {
            text: "Advanced",
            link: "/en/advanced/",
          },
          {
            text: "More",
            children: [
              {
                text: "See Also",
                children: [
                  {
                    text: "Steam Store Page",
                    link: "https://store.steampowered.com/app/1383570/",
                  },
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
          "/en/early-access-status/": [
            {
              isGroup: true,
              text: "Ballex² Early Access Status",
              link: "/en/early-access-status/",
              collapsable: false,
              children: [
                "control-and-functions.md",
                // "multiplayer.md",
                "changelog.md",
              ],
            },
          ],

          "/en/start/": [
            {
              isGroup: true,
              text: "Start",
              link: "/en/start/",
              collapsable: false,
              children: [
                "preparation.md",
                "basic-operation.md",
                "alignment.md",
                "road-generator.md",
                "release.md",
              ],
            },
          ],

          "/en/advanced/": [
            {
              isGroup: true,
              text: "Advanced",
              link: "/en/advanced/",
              collapsable: false,
              children: [
                "mesh-system.md",
                "material-system.md",
                "joint-system.md",
                "trigger-system.md",
                "trigger.md",
                "executor.md",
                "custom-executor.md",
                "variable-system.md",
                "terrain-system.md",
                "particle-system.md",
                "audio-system.md",
                "collectable-system.md",
              ],
            },
          ],
          "/en/": [""],
        },
      },
    },
  }),

  markdown: {
    breaks: true,
  },

  plugins: [
    shikiPlugin({
      theme: "dark-plus",
    }),
    docsearchPlugin({
      appId: "SRD44HYO7D",
      apiKey: "da4863848aad7a5a1dcb3cced912f0e8",
      indexName: "B2METutorial",
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
};
