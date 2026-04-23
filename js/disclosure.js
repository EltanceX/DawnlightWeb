function buildDisclosureLabel(button, isExpanded) {
  const baseLabel = isExpanded ? button.dataset.labelExpanded : button.dataset.labelCollapsed;
  return `${baseLabel} ${isExpanded ? "▲" : "▼"}`;
}

export function initDisclosures() {
  const triggers = document.querySelectorAll("[data-disclosure-trigger]");

  triggers.forEach(button => {
    const panel = document.getElementById(button.dataset.disclosureTrigger);
    if (!panel) {
      return;
    }

    button.textContent = buildDisclosureLabel(button, false);

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const nextExpanded = !isExpanded;

      button.setAttribute("aria-expanded", String(nextExpanded));
      button.textContent = buildDisclosureLabel(button, nextExpanded);
      panel.hidden = !nextExpanded;
      panel.classList.toggle("is-open", nextExpanded);
    });
  });
}
