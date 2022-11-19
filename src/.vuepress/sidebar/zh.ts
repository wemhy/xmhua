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
      text: "幕后故事",
      icon: "note",
      prefix: "behind/",
      children: "structure",
    },
  ],
});
