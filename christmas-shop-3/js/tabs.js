import { getSelector } from './utils.js';

export const CLASS_TABS = 'tabs';
export const CLASS_TABS_CONTROLS = 'tabs-controls';
export const CLASS_TABS_CONTENT = 'tabs-content';
export const CLASS_CONTROL_SELECTED = 'btn_selected';
export const CLASS_TAB_SELECTED = 'tabs-content__tab_selected';
export const TAB_ATTRIBUTE = 'data-tab';

export class TABS {
  constructor(element) {
    this.controlsWrap = element.querySelector(getSelector(CLASS_TABS_CONTROLS));
    this.tabsWrap = element.querySelector(getSelector(CLASS_TABS_CONTENT));
    this.tabs = this.tabsWrap.querySelectorAll(`[${TAB_ATTRIBUTE}]`);
    this.controls = this.controlsWrap.querySelectorAll(`[${TAB_ATTRIBUTE}]`);

    this.bindEvents();
  }

  bindEvents = () => {
    this.controlsWrap.addEventListener('click', this.handleClick);
  };

  handleClick = (e) => {
    const clickedBtn = e.target.closest(`[${TAB_ATTRIBUTE}]`);

    if (!clickedBtn) return;

    const category = clickedBtn.getAttribute(TAB_ATTRIBUTE);

    this.tabs.forEach((tab) => {
      const isNext = tab.getAttribute(TAB_ATTRIBUTE) === category;
      tab.classList.toggle(CLASS_TAB_SELECTED, isNext);
    });

    this.controls.forEach((control) => {
      const isNext = control.getAttribute(TAB_ATTRIBUTE) === category;
      control.classList.toggle(CLASS_CONTROL_SELECTED, isNext);
    });
  };
}
