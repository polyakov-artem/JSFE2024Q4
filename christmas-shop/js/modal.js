export const CLASS_MODAL_BLOCK = 'modal-block';
export const CLASS_MODAL_WINDOW = 'modal-block__window';
export const CLASS_MODAL_WINDOW_CONTENT = 'modal-block__content-wrap';
export const CLASS_MODAL_ACTIVE = 'modal-block_active';

export const CLASS_OVERLAY = 'backdrop';
export const CLASS_OVERLAY_ACTIVE = 'backdrop_active';

export const CLASS_BTN = 'btn';
export const CLASS_CLOSE_BTN = 'close-btn';
export const CLASS_MODAL_CLOSE_BTN = 'modal-block__close-btn';

export const DATA_ATTRIBUTE = 'data-action';
export const DATA_ATTRIBUTE_VALUE_OPEN = 'open-modal';
export const DATA_ATTRIBUTE_VALUE_CLOSE = 'close-modal';

export const SELECTOR_OPEN_BTN = `[${DATA_ATTRIBUTE}="${DATA_ATTRIBUTE_VALUE_OPEN}"]`;
export const SELECTOR_CLOSE_BTN = `[${DATA_ATTRIBUTE}="${DATA_ATTRIBUTE_VALUE_CLOSE}"]`;

export const EVENT_CLOSE_WINDOW = 'closeModalWindow';
export const EVENT_OPEN_WINDOW = 'openModalWindow';

export class Modal {
  constructor() {
    this.configure();
    this.bindEvents();
  }

  configure = () => {
    const overlay = document.createElement('div');
    const modalBlock = document.createElement('div');
    const modalWindow = document.createElement('div');
    const modalWindowContent = document.createElement('div');
    const closeBtn = document.createElement('button');

    overlay.classList.add(CLASS_OVERLAY);
    modalBlock.classList.add(CLASS_MODAL_BLOCK);
    modalWindow.classList.add(CLASS_MODAL_WINDOW);
    modalWindowContent.classList.add(CLASS_MODAL_WINDOW_CONTENT);
    closeBtn.classList.add(CLASS_BTN, CLASS_CLOSE_BTN, CLASS_MODAL_CLOSE_BTN);
    closeBtn.setAttribute(DATA_ATTRIBUTE, DATA_ATTRIBUTE_VALUE_CLOSE);

    modalBlock.appendChild(modalWindow);
    modalWindow.appendChild(closeBtn);
    modalWindow.appendChild(modalWindowContent);
    document.body.appendChild(overlay);
    document.body.appendChild(modalBlock);

    this.body = document.body;
    this.modalBlock = modalBlock;
    this.modalWindow = modalWindow;
    this.modalWindowContent = modalWindowContent;
    this.overlay = overlay;
  };

  bindEvents = () => {
    document.addEventListener('click', this.handleClick);
  };

  handleClick = (e) => {
    if (!this.modalBlock) return;

    const openBtn = e.target.closest(SELECTOR_OPEN_BTN);
    const closeBtn = e.target.closest(SELECTOR_CLOSE_BTN);
    const modalWindow = e.target.closest(`.${CLASS_MODAL_WINDOW}`);

    if (openBtn) {
      e.preventDefault();
      this.open();
      return;
    }

    if (!modalWindow || closeBtn) {
      this.close();
    }
  };

  open = () => {
    this.addLock();
    this.addModalClasses();
    this.dispatchEvent(EVENT_OPEN_WINDOW);
  };

  addLock = () => {
    const scrollWidth = this.getScrollWidth();
    this.body.style.height = '100%';
    this.body.style.overflow = 'hidden';

    if (scrollWidth) {
      this.body.style.paddingRight = scrollWidth + 'px';
    }
  };

  getScrollWidth = () => {
    return window.innerWidth - this.body.clientWidth;
  };

  addModalClasses = () => {
    this.modalBlock.classList.add(CLASS_MODAL_ACTIVE);
    this.overlay.classList.add(CLASS_OVERLAY_ACTIVE);
  };

  close = () => {
    this.removeLock();
    this.removeModalClasses();
    this.dispatchEvent(EVENT_CLOSE_WINDOW);
  };

  removeLock = () => {
    this.body.style.paddingRight = '';
    this.body.style.height = '';
    this.body.style.overflow = '';
  };

  removeModalClasses = () => {
    this.modalBlock.classList.remove(CLASS_MODAL_ACTIVE);
    this.overlay.classList.remove(CLASS_OVERLAY_ACTIVE);
  };

  dispatchEvent = (name) => {
    const event = new CustomEvent(name, { bubbles: true });
    this.modalBlock.dispatchEvent(event);
  };
}
