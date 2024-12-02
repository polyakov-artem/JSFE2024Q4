import { getSelector } from './utils.js';

export const CLASS_BODY_LOCKED = 'body-locked';
export const CLASS_HEADER = 'header';
export const CLASS_TOGGLER = 'header__toggler';
export const CLASS_TOGGLER_ACTIVE = 'hamburger_active';
export const CLASS_NAV_MENU = 'header__nav';
export const CLASS_ANIMATION_OPEN = 'slide-in';
export const CLASS_ANIMATION_CLOSE = 'slide-out';

export class Header {
  constructor(element) {
    this.isOpen = false;
    this.header = element;
    this.toggler = element.querySelector(getSelector(CLASS_TOGGLER));
    this.navMenu = element.querySelector(getSelector(CLASS_NAV_MENU));
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('click', this.clickHandler);
    window.addEventListener('resize', this.closeMenu);
  }

  closeMenu = () => {
    if (!this.isOpen) return;

    this.toggler.classList.remove(CLASS_TOGGLER_ACTIVE);
    this.navMenu.classList.remove(CLASS_ANIMATION_OPEN);
    this.navMenu.classList.add(CLASS_ANIMATION_CLOSE);
    document.body.classList.remove(CLASS_BODY_LOCKED);
    this.isOpen = false;
  };

  openMenu = () => {
    if (this.isOpen) return;

    document.body.classList.add(CLASS_BODY_LOCKED);
    this.toggler.classList.add(CLASS_TOGGLER_ACTIVE);
    this.navMenu.classList.remove(CLASS_ANIMATION_CLOSE);
    this.navMenu.classList.add(CLASS_ANIMATION_OPEN);
    this.isOpen = true;
  };

  clickHandler = (e) => {
    if (e.target.closest(`.${CLASS_TOGGLER}`)) {
      this.isOpen ? this.closeMenu() : this.openMenu();
      return;
    }

    if (this.isOpen) this.closeMenu();
  };
}
