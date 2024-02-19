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
    ],
  },
];

export const sidebarZh = {
  "/early-access-status/": [
    {
      text: "Ballex² 抢先体验进度",
      link: "/early-access-status/",
      children: [
        "/early-access-status/control-and-functions.md",
        "/early-access-status/changelog.md",
      ],
    },
  ],

  "/start/": [
    {
      text: "起步",
      link: "/start/",
      children: [
        "/start/preparation.md",
        "/start/basic-operation.md",
        "/start/alignment.md",
        "/start/road-generator.md",
        "/start/release.md",
      ],
    },
  ],

  "/advanced/": [
    {
      text: "进阶",
      link: "/advanced/",
      children: [
        "/advanced/mesh-system.md",
        "/advanced/material-system.md",
        "/advanced/ui-system.md",
        "/advanced/trigger-system.md",
        "/advanced/trigger.md",
        "/advanced/executor.md",
        "/advanced/variable-system.md",
        "/advanced/terrain-system.md",
        "/advanced/particle-system.md",
        "/advanced/audio-system.md",
        "/advanced/collectable-system.md",
      ],
    },
  ],

  "/cookbook/": [
    {
      text: "食谱",
      link: "/cookbook/",
      children: ["/cookbook/joint-system-examples.md"],
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
    ],
  },
];

export const sidebarEn = {
  "/en/early-access-status/": [
    {
      text: "Ballex² Early Access Status",
      link: "/en/early-access-status/",
      children: [
        "/en/early-access-status/control-and-functions.md",
        "/en/early-access-status/changelog.md",
      ],
    },
  ],

  "/en/start/": [
    {
      text: "Start",
      link: "/en/start/",
      children: [
        "/en/start/preparation.md",
        "/en/start/basic-operation.md",
        "/en/start/alignment.md",
        "/en/start/road-generator.md",
        "/en/start/release.md",
      ],
    },
  ],

  "/en/advanced/": [
    {
      text: "Advanced",
      link: "/en/advanced/",
      children: [
        "/en/advanced/mesh-system.md",
        "/en/advanced/material-system.md",
        "/en/advanced/ui-system.md",
        "/en/advanced/trigger-system.md",
        "/en/advanced/trigger.md",
        "/en/advanced/executor.md",
        "/en/advanced/variable-system.md",
        "/en/advanced/terrain-system.md",
        "/en/advanced/particle-system.md",
        "/en/advanced/audio-system.md",
        "/en/advanced/collectable-system.md",
      ],
    },
  ],

  "/en/cookbook/": [
    {
      text: "Cookbook",
      link: "/cookbook/",
      children: ["/en/cookbook/joint-system-examples.md"],
    },
  ],

  "/en/": [""],
};
