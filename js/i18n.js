import { enUS } from "./locales/en-US.js";
import { zhCN } from "./locales/zh-CN.js";

const STORAGE_KEY = "dawnlight-language";
const DEFAULT_LANGUAGE = "zh-CN";
const locales = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

let currentLanguage = DEFAULT_LANGUAGE;

function resolveMessage(path, source) {
  return path.split(".").reduce((value, segment) => value?.[segment], source);
}

function detectLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && locales[stored]) {
      return stored;
    }
  } catch (error) {
    console.warn("Unable to read saved language:", error);
  }

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("zh")) {
    return "zh-CN";
  }

  return "en-US";
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    console.warn("Unable to save language:", error);
  }
}

function applyTextTranslations() {
  const locale = locales[currentLanguage];

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const value = resolveMessage(key, locale);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(element => {
    const pairs = element.dataset.i18nAttr.split(";").map(pair => pair.trim()).filter(Boolean);

    pairs.forEach(pair => {
      const [attribute, key] = pair.split(":").map(part => part.trim());
      const value = resolveMessage(key, locale);
      if (attribute && typeof value === "string") {
        element.setAttribute(attribute, value);
      }
    });
  });

  document.documentElement.lang = locale.meta.htmlLang;
  document.title = locale.meta.title;
}

function updateLanguageToggle() {
  const toggle = document.getElementById("languageToggle");
  if (!toggle) {
    return;
  }

  const locale = locales[currentLanguage];
  toggle.textContent = locale.messages.controls.languageText;
  toggle.setAttribute("aria-label", locale.messages.controls.languageAria);
}

export function getLocaleData() {
  return locales[currentLanguage];
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function setLanguage(language, onChange) {
  if (!locales[language]) {
    return;
  }

  currentLanguage = language;
  saveLanguage(language);
  applyTextTranslations();
  updateLanguageToggle();

  if (typeof onChange === "function") {
    onChange();
  }
}

export function initI18n({ onChange } = {}) {
  currentLanguage = detectLanguage();
  applyTextTranslations();
  updateLanguageToggle();

  const toggle = document.getElementById("languageToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "zh-CN" ? "en-US" : "zh-CN";
      setLanguage(nextLanguage, onChange);
    });
  }

  if (typeof onChange === "function") {
    onChange();
  }
}
