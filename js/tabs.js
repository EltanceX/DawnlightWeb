export function initTabs() {
  const tabGroups = document.querySelectorAll("[data-tabs]");

  tabGroups.forEach(group => {
    const triggers = group.querySelectorAll("[data-tab-trigger]");
    const panels = group.querySelectorAll("[data-tab-panel]");

    const activateTab = targetId => {
      triggers.forEach(trigger => {
        const isActive = trigger.dataset.tabTrigger === targetId;
        trigger.classList.toggle("active", isActive);
        trigger.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach(panel => {
        const isActive = panel.dataset.tabPanel === targetId;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
      });
    };

    triggers.forEach(trigger => {
      trigger.addEventListener("click", () => activateTab(trigger.dataset.tabTrigger));
    });

    const defaultTarget = triggers[0]?.dataset.tabTrigger;
    if (defaultTarget) {
      activateTab(defaultTarget);
    }
  });
}
