import { defineStore } from "pinia";

export const useVarStore = defineStore("var", {
  state: () => ({
    scrolled: false,
    menuOpen: false,
    anchors: [
      { name: "about", label: "About" },
      { name: "pack", label: "Pack" },
      { name: "rules", label: "Rules" },
      { name: "map", label: "Map" },
      { name: "faq", label: "FAQ" },
      { name: "discord", label: "Discord" },
    ],
  }),
  actions: {
    setScrolled(value) {
      this.scrolled = value;
      console.log("scrolled", value);
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    setMenu(value) {
      this.menuOpen = value;
    },
  },
});
