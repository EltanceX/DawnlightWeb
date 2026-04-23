const COPY_RESET_DELAY = 2000;

export function initCopyEmail() {
  const copyButton = document.getElementById("copyEmailBtn");
  const emailElement = document.getElementById("feedbackEmail");

  if (!copyButton || !emailElement) {
    return;
  }

  copyButton.addEventListener("click", async () => {
    const email = emailElement.textContent.trim();
    const buttonText = document.getElementById("copyBtnText");
    const buttonIcon = copyButton.querySelector(".feedback-copy-icon");

    try {
      await navigator.clipboard.writeText(email);
      copyButton.classList.add("copied");

      if (buttonIcon) {
        buttonIcon.textContent = "✓";
      }
      if (buttonText) {
        buttonText.textContent = "已复制";
      }

      window.setTimeout(() => {
        copyButton.classList.remove("copied");
        if (buttonIcon) {
          buttonIcon.textContent = "📋";
        }
        if (buttonText) {
          buttonText.textContent = "复制邮箱";
        }
      }, COPY_RESET_DELAY);
    } catch (error) {
      console.error("复制失败:", error);
    }
  });
}
