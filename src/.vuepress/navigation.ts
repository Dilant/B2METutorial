export const navbarZh = [
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
    text: "食谱",
    link: "/cookbook/",
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
];

export const sidebarZh = {
  "/early-access-status/": [
    {
      text: "Ballex² 抢先体验进度",
      link: "/early-access-status/",
      children: ["control-and-functions.md", "changelog.md"],
    },
  ],

  "/start/": [
    {
      text: "起步",
      link: "/start/",
      children: [
        "how-to-read.md",
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
      text: "进阶",
      link: "/advanced/",
      children: [
        "mesh-system.md",
        "material-system.md",
        "ui-system.md",
        "trigger-system.md",
        "trigger.md",
        "executor.md",
        "variable-system.md",
        "terrain-system.md",
        "particle-system.md",
        "audio-system.md",
        "collectable-system.md",
      ],
    },
  ],

  "/cookbook/": [
    {
      text: "食谱",
      link: "/cookbook/",
      children: ["joint-system-examples.md"],
    },
  ],

  "/": [""],
};

export const navbarEn = [
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
    text: "Cookbook",
    link: "/en/cookbook/",
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
];

export const sidebarEn = {
  "/en/early-access-status/": [
    {
      text: "Ballex² Early Access Status",
      link: "/en/early-access-status/",
      children: ["control-and-functions.md", "changelog.md"],
    },
  ],

  "/en/start/": [
    {
      text: "Start",
      link: "/en/start/",
      children: [
        "how-to-read.md",
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
      text: "Advanced",
      link: "/en/advanced/",
      children: [
        "mesh-system.md",
        "material-system.md",
        "ui-system.md",
        "trigger-system.md",
        "trigger.md",
        "executor.md",
        "variable-system.md",
        "terrain-system.md",
        "particle-system.md",
        "audio-system.md",
        "collectable-system.md",
      ],
    },
  ],

  "/en/cookbook/": [
    {
      text: "Cookbook",
      link: "/cookbook/",
      children: ["joint-system-examples.md"],
    },
  ],

  "/en/": [""],
};
