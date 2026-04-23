export function initModal({ onOpen } = {}) {
  const modalOpenButton = document.querySelector("[data-modal-open]");
  const modalOverlay = document.getElementById("modsModal");
  const modalCloseButtons = modalOverlay?.querySelectorAll("[data-modal-close]") ?? [];

  if (!modalOpenButton || !modalOverlay) {
    return;
  }

  const setModalOpen = isOpen => {
    modalOverlay.classList.toggle("is-open", isOpen);
    modalOverlay.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("modal-open", isOpen);
  };

  modalOpenButton.addEventListener("click", () => {
    if (typeof onOpen === "function") {
      onOpen();
    }
    setModalOpen(true);
  });

  modalCloseButtons.forEach(button => {
    button.addEventListener("click", () => setModalOpen(false));
  });

  modalOverlay.addEventListener("click", event => {
    if (event.target === modalOverlay) {
      setModalOpen(false);
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modalOverlay.classList.contains("is-open")) {
      setModalOpen(false);
    }
  });
}
