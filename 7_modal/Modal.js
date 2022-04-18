class Modal {
  constructor(triggerEl, modalEl, contentEl) {
    this.triggerEl = triggerEl;
    this.modalEl = modalEl;
    this.modalEl.append(contentEl);
  }

  init() {
    this.triggerEl.addEventListener("click", () => {
      // TODO: open the modal by selecting the modal element and adding the class "is-active"

    });

    this.modalEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        // TODO: close the modal by selecting the modal element and removing the class "is-active"

      }
    });
  }
}

export default Modal;