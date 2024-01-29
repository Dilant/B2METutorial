import { defaultTheme } from "@vuepress/theme-default";
import { navbarZh, navbarEn, sidebarZh, sidebarEn } from "./navigation";

export const theme = defaultTheme({
  repo: "Dilant/B2METutorial",
  docsBranch: "master",
  docsDir: "src",
  contributors: false,
  selectLanguageText: "语言 / Language",

  locales: {
    "/": {
      selectLanguageName: "简体中文",
      editLinkText: "在 GitHub 上编辑",
      lastUpdatedText: "上次更新",
      tip: "提示",
      warning: "注意",
      danger: "警告",
      backToHome: "返回首页",
      navbar: navbarZh,
      sidebar: sidebarZh,
    },

    "/en/": {
      selectLanguageName: "English",
      editLinkText: "Edit on GitHub",
      lastUpdatedText: "Last updated",
      navbar: navbarEn,
      sidebar: sidebarEn,
    },
  },
});
