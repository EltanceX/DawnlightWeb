import { initCopyEmail } from "./copy.js";
import { initDisclosures } from "./disclosure.js";
import { initModal } from "./modal.js";
import { initMobileNav } from "./nav.js";
import { initFadeInObserver } from "./observer.js";
import { renderPageSections } from "./render-content.js";
import { initTabs } from "./tabs.js";
import { initI18n } from "./i18n.js";
import { initThemeToggle } from "./theme.js";

function renderLocalizedSections() {
  renderPageSections();
  initTabs();
  initDisclosures();

  if (window.hljs) {
    window.hljs.highlightAll();
  }
}

const nav = initMobileNav();

initThemeToggle();
initCopyEmail();
initModal({
  onOpen: () => {
    if (nav.isMobileNav()) {
      nav.close();
    }
  },
});
initFadeInObserver();
initI18n({
  onChange: renderLocalizedSections,
});
