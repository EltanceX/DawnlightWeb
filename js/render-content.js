import { getLocaleData } from "./i18n.js";

function renderIntro() {
  return getLocaleData().content.introHtml;
}

function renderInstall() {
  return getLocaleData().content.installHtml;
}

function renderVersionGroups() {
  const {
    content: { versionGroups },
    messages,
  } = getLocaleData();

  const tabs = versionGroups
    .map((group, index) => {
      const activeClass = index === 0 ? " active" : "";

      return `
        <button
          class="version-tab${activeClass}"
          id="tab-${group.id}"
          type="button"
          role="tab"
          data-tab-trigger="${group.id}"
          aria-controls="version-${group.id}"
          aria-selected="${index === 0}"
        >
          ${group.label}
          <span class="version-tab-badge">${group.items.length}</span>
        </button>
      `;
    })
    .join("");

  const panels = versionGroups
    .map((group, index) => {
      const activeClass = index === 0 ? " active" : "";
      const items = group.items
        .map(item => {
          const disabledClass = item.disabled ? " version-item-disabled" : "";
          const buttonDisabledClass = item.disabled ? " is-disabled" : "";
          const linkAttrs = item.disabled ? 'aria-disabled="true" tabindex="-1"' : "";

          return `
            <div class="version-item${disabledClass}">
              <div class="version-info">
                <strong>${item.version} <span class="version-tag ${item.tagType}">${item.tagLabel}</span></strong>
                <span>${item.description}</span>
              </div>
              <a class="download-btn${buttonDisabledClass}" href="${item.href}" ${linkAttrs}>${messages.controls.download}</a>
            </div>
          `;
        })
        .join("");

      return `
        <div
          class="version-list${activeClass}"
          id="version-${group.id}"
          role="tabpanel"
          aria-labelledby="tab-${group.id}"
          data-tab-panel="${group.id}"
          ${index === 0 ? "" : "hidden"}
        >
          ${items}
        </div>
      `;
    })
    .join("");

  return `
    <div class="version-section" data-tabs>
      <div class="version-tabs" role="tablist" aria-label="${messages.sections.versions}">
        ${tabs}
      </div>
      <div class="version-list-container">
        ${panels}
      </div>
    </div>
  `;
}

function renderChangelog() {
  const {
    content: { changelogGroups },
    messages,
  } = getLocaleData();

  const groups = changelogGroups
    .map((group, index) => {
      const items = group.items
        .map(
          item => `
            <li class="changelog-item">
              <span class="changelog-item-icon ${item.type}">${item.icon}</span>
              <span class="changelog-item-text">${item.text}</span>
            </li>
          `
        )
        .join("");

      const divider = index < changelogGroups.length - 1 ? '<div class="changelog-divider"></div>' : "";

      return `
        <div class="changelog-version-group">
          <div class="changelog-version-header">
            <span class="changelog-version-tag ${group.type}">${group.version}</span>
            <span class="changelog-version-date">${group.date}</span>
          </div>
          <ul class="changelog-list">
            ${items}
          </ul>
        </div>
        ${divider}
      `;
    })
    .join("");

  return `
    <div class="changelog-section">
      <div class="changelog-header">
        <h3 class="changelog-title">✦ ${messages.sections.changelog}</h3>
      </div>
      <div class="changelog-container">
        ${groups}
      </div>
    </div>
  `;
}

function renderTeam() {
  const {
    content: { teamRows },
  } = getLocaleData();

  const rows = teamRows
    .map(row => {
      const rowClass = row.length === 2 ? "row-2" : "row-3";
      const cards = row
        .map(member => {
          const names = member.names.map(name => `<h3>${name}</h3>`).join("");
          const details = member.details.join("<br>");

          return `
            <div class="team-card">
              <div class="avatar">${member.avatar}</div>
              ${names}
              <p>${details}</p>
            </div>
          `;
        })
        .join("");

      return `<div class="team-row ${rowClass}">${cards}</div>`;
    })
    .join("");

  return `<div class="team-wrapper">${rows}</div>`;
}

function renderDonationSections() {
  const {
    content: { donationSections },
  } = getLocaleData();

  return donationSections
    .map(section => {
      const items = section.items
        .map(item => {
          if (item.type === "image") {
            return `
              <div class="mod-item mod-item-image">
                <img src="${item.src}" class="donate-qr" alt="${item.alt}" loading="lazy" decoding="async">
              </div>
            `;
          }

          return `
            <div class="mod-item">
              <strong>${item.name}</strong>
              <span>${item.version}</span>
              <span>${item.date}</span>
            </div>
          `;
        })
        .join("");

      return `
        <div class="modal-body">
          <button
            class="expand-btn"
            type="button"
            data-disclosure-trigger="${section.id}"
            data-label-collapsed="${section.buttonLabel}"
            data-label-expanded="${section.buttonExpandedLabel}"
            aria-controls="${section.id}"
            aria-expanded="false"
          >
            ${section.buttonLabel} ▼
          </button>

          <div class="mods-list" id="${section.id}" role="region" hidden>
            ${items}
          </div>
        </div>
      `;
    })
    .join("");
}

export function renderPageSections() {
  const introRoot = document.getElementById("introRoot");
  const installRoot = document.getElementById("installRoot");
  const versionsRoot = document.getElementById("versionsRoot");
  const changelogRoot = document.getElementById("changelogRoot");
  const teamRoot = document.getElementById("teamRoot");
  const donationRoot = document.getElementById("donationSectionsRoot");

  if (introRoot) {
    introRoot.innerHTML = renderIntro();
  }

  if (installRoot) {
    installRoot.innerHTML = renderInstall();
  }

  if (versionsRoot) {
    versionsRoot.innerHTML = renderVersionGroups();
  }

  if (changelogRoot) {
    changelogRoot.innerHTML = renderChangelog();
  }

  if (teamRoot) {
    teamRoot.innerHTML = renderTeam();
  }

  if (donationRoot) {
    donationRoot.innerHTML = renderDonationSections();
  }
}
