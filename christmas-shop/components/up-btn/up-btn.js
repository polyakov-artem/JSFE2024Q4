export const CLASS_BTN = 'btn';
export const CLASS_UP_BTN = 'up-btn';
export const CLASS_UP_BTN_HIDDEN = 'up-btn_hidden';

export class UpBtn {
  constructor() {
    this.configure();
    this.bindEvents();
  }

  configure = () => {
    const element = document.createElement('button');
    element.classList.add(CLASS_BTN, CLASS_UP_BTN);
    this.element = element;

    this.updateVisibility();
  };

  updateVisibility = () => {
    if (window.innerWidth <= 768 && window.scrollY > 300) {
      this.element.classList.remove(CLASS_UP_BTN_HIDDEN);
    } else {
      this.element.classList.add(CLASS_UP_BTN_HIDDEN);
    }
  };

  addToPage = () => {
    document.body.appendChild(this.element);
  };

  bindEvents = () => {
    document.addEventListener('scroll', this.updateVisibility);
    document.addEventListener('resize', this.updateVisibility);
    this.element.addEventListener('click', () =>
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
    );
  };
}

export default UpBtn;
