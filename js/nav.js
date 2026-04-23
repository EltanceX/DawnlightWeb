const MOBILE_NAV_BREAKPOINT = 680;

export function initMobileNav() {
  const topbarRight = document.querySelector(".topbar-right");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelectorAll(".nav a");

  if (!topbarRight || !navToggle) {
    return {
      close: () => {},
      isMobileNav: () => window.innerWidth <= MOBILE_NAV_BREAKPOINT,
    };
  }

  const isMobileNav = () => window.innerWidth <= MOBILE_NAV_BREAKPOINT;
  const setMobileNavOpen = isOpen => {
    topbarRight.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  topbarRight.classList.add("nav-ready");

  navToggle.addEventListener("click", event => {
    event.stopPropagation();
    setMobileNavOpen(!topbarRight.classList.contains("nav-open"));
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (isMobileNav()) {
        setMobileNavOpen(false);
      }
    });
  });

  document.addEventListener("click", event => {
    if (isMobileNav() && topbarRight.classList.contains("nav-open") && !topbarRight.contains(event.target)) {
      setMobileNavOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobileNav()) {
      setMobileNavOpen(false);
    }
  });

  return {
    close: () => setMobileNavOpen(false),
    isMobileNav,
  };
}
