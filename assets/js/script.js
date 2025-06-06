// import { BlurScrollEffect as BlurScrollEffect1 } from "./effect-1/blurScrollEffect.js";
// import { BlurScrollEffect as BlurScrollEffect2 } from "./effect-2/blurScrollEffect.js";
import { BlurScrollEffect as BlurScrollEffect3 } from "./effect-3/blurScrollEffect.js";
import { BlurScrollEffect as BlurScrollEffect4 } from "./effect-4/blurScrollEffect.js";
import { preloadFonts } from "./utils.js";

const init = () => {
  const effects = [
    // { selector: "[data-effect-1]", effect: BlurScrollEffect1 },
    // { selector: "[data-effect-2]", effect: BlurScrollEffect2 },
    { selector: "[data-effect-3]", effect: BlurScrollEffect3 },
    { selector: "[data-effect-4]", effect: BlurScrollEffect4 },
  ];

  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach((el) => {
      new effect(el);
    });
  });
};
init();

// preloadFonts("lnu1fpi").then(() => {
//   document.body.classList.remove("loading");
//   init();
// });
// Iterate over each effect configuration and apply the effect to all matching elements
// Preload images and fonts and remove loader
