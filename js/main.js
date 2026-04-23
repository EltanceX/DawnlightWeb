import { initCopyEmail } from "./copy.js";
import { initDisclosures } from "./disclosure.js";
import { initModal } from "./modal.js";
import { initMobileNav } from "./nav.js";
import { initFadeInObserver } from "./observer.js";
import { renderPageSections } from "./render-content.js";
import { initTabs } from "./tabs.js";
import { initThemeToggle } from "./theme.js";

initThemeToggle();
renderPageSections();

const nav = initMobileNav();

initTabs();
initDisclosures();
initCopyEmail();
initModal({
  onOpen: () => {
    if (nav.isMobileNav()) {
      nav.close();
    }
  },
});
initFadeInObserver();

if (window.hljs) {
  window.hljs.highlightAll();
}
