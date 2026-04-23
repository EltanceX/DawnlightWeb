const THEME_STORAGE_KEY = "dawnlight-theme";
const DARK_THEME_CLASS = "dark-theme";

function getPreferredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch (error) {
    console.warn("无法读取主题偏好:", error);
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn("无法保存主题偏好:", error);
  }
}

function applyTheme(theme, toggleButton) {
  const isDark = theme === "dark";
  document.body.classList.toggle(DARK_THEME_CLASS, isDark);

  if (toggleButton) {
    toggleButton.setAttribute("aria-pressed", String(isDark));
  }
}

export function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) {
    return;
  }

  applyTheme(getPreferredTheme(), themeToggle);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains(DARK_THEME_CLASS) ? "light" : "dark";
    applyTheme(nextTheme, themeToggle);
    saveTheme(nextTheme);
  });
}
