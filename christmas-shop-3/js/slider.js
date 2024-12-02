import { getSelector } from './utils.js';

export const CLASS_SLIDER = 'slider';
export const CLASS_CONTAINER = 'slider__container';
export const CLASS_SLIDES = 'slider__slides';
export const CLASS_BTN_NEXT = 'slider__button-next';
export const CLASS_BTN_PREV = 'slider__button-previous';

export const sliderOptions = {
  speed: 1000,
  defaultNumOfClicks: 3,
  numOfClicks: {
    768: 6,
  },
};

export class Slider {
  constructor(element, options) {
    this.options = options;
    this.slides = element.querySelector(getSelector(CLASS_SLIDES));
    this.container = element.querySelector(getSelector(CLASS_CONTAINER));
    this.btnNext = element.querySelector(getSelector(CLASS_BTN_NEXT));
    this.btnPrev = element.querySelector(getSelector(CLASS_BTN_PREV));

    this.configureSlider();
    this.bindEvents();
  }

  configureSlider = () => {
    const windowWidth = this.getWindowWidth();
    const containerWidth = this.getContainerWidth();
    const slidesWidth = this.getSlidesWidth();

    let numOfClicks = this.options.defaultNumOfClicks;

    Object.keys(this.options.numOfClicks)
      .sort((a, b) => b - a)
      .some((width) => {
        const isSmallerOrEqual = windowWidth <= width;
        if (isSmallerOrEqual) {
          numOfClicks = this.options.numOfClicks[width];
        }
        return isSmallerOrEqual;
      });

    const maxOffset = slidesWidth - containerWidth;

    if (maxOffset <= 0) {
      this.maxTotalOffset = 0;
      this.stepOffset = 0;
    } else {
      this.maxTotalOffset = maxOffset;
      this.stepOffset = Math.round(maxOffset / numOfClicks);
    }

    this.slides.style.transitionDuration = (this.stepOffset / this.options.speed).toFixed(3) + 's';

    this.moveSlides(0);
  };

  getWindowWidth = () => window.innerWidth;

  getContainerWidth = () => this.container.clientWidth;

  getSlidesWidth = () => this.slides.scrollWidth;

  bindEvents = () => {
    this.btnNext.addEventListener('click', this.slideForward);
    this.btnPrev.addEventListener('click', this.slideBackward);
    window.addEventListener('resize', this.configureSlider);
  };

  slideForward = () => {
    if (this.currentOffset === this.maxTotalOffset) return;
    this.moveSlides(this.currentOffset + this.stepOffset);
  };

  slideBackward = () => {
    if (this.currentOffset === 0) return;
    this.moveSlides(this.currentOffset - this.stepOffset);
  };

  updateButtonsState = () => {
    const { currentOffset } = this;

    if (currentOffset === 0) {
      this.btnPrev.disabled = true;
      this.btnNext.disabled = false;
    } else if (currentOffset === this.maxTotalOffset) {
      this.btnNext.disabled = true;
      this.btnPrev.disabled = false;
    } else {
      this.btnPrev.disabled = false;
      this.btnNext.disabled = false;
    }
  };

  moveSlides = (offset) => {
    let nextOffset = offset;

    if (this.maxTotalOffset - nextOffset < 5) {
      nextOffset = this.maxTotalOffset;
    } else if (nextOffset < 5) {
      nextOffset = 0;
    }

    this.currentOffset = Math.abs(nextOffset);
    this.updateButtonsState();
    this.slides.style.transform = `translateX(-${nextOffset}px`;
  };
}
