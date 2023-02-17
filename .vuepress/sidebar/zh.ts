import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "关于小末花",
      icon: "note",
      prefix: "xm/",
      children: "structure",
    },
    {
      text: "相关内容",
      icon: "note",
      prefix: "related/",
      children: "structure",
    },
    {
      text: "站点来历",
      icon: "note",
      prefix: "behind/",
      children: "structure",
    },
  ],
});
