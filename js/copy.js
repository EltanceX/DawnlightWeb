import { getLocaleData } from "./i18n.js";

const COPY_RESET_DELAY = 2000;
const COPY_SUCCESS_ICON = "✓";
const COPY_DEFAULT_ICON = "📋";

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "-9999px";
  textArea.style.opacity = "0";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  textArea.setSelectionRange(0, textArea.value.length);

  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!copied) {
    throw new Error("Fallback copy command failed");
  }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  fallbackCopyText(text);
}

export function initCopyEmail() {
  const copyButton = document.getElementById("copyEmailBtn");
  const emailElement = document.getElementById("feedbackEmail");

  if (!copyButton || !emailElement) {
    return;
  }

  let resetTimerId = null;

  copyButton.addEventListener("click", async () => {
    const email = emailElement.textContent.trim();
    const buttonText = document.getElementById("copyBtnText");
    const buttonIcon = copyButton.querySelector(".feedback-copy-icon");

    try {
      await copyText(email);
      copyButton.classList.add("copied");

      if (buttonIcon) {
        buttonIcon.textContent = COPY_SUCCESS_ICON;
      }

      if (buttonText) {
        buttonText.textContent = getLocaleData().messages.controls.copied;
      }

      if (resetTimerId) {
        window.clearTimeout(resetTimerId);
      }

      resetTimerId = window.setTimeout(() => {
        copyButton.classList.remove("copied");

        if (buttonIcon) {
          buttonIcon.textContent = COPY_DEFAULT_ICON;
        }

        if (buttonText) {
          buttonText.textContent = getLocaleData().messages.controls.copyEmail;
        }

        resetTimerId = null;
      }, COPY_RESET_DELAY);
    } catch (error) {
      console.error("Copy email failed:", error);
    }
  });
}
