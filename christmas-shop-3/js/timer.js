import { getSelector } from './utils.js';

export const CLASS_TIMER = 'timer';
export const CLASS_TIMER_PART = 'timer__part';
export const CLASS_TIMER_NUMBER = 'timer__number';

export class TIMER {
  constructor(element) {
    this.numberContainers = element.querySelectorAll(getSelector(CLASS_TIMER_NUMBER));
    this.endDate = Date.UTC(2025, 0, 1, 0);

    this.start();
  }

  start = () => {
    this.update();
    this.intervalId = setInterval(this.update, 1000);
  };

  update = () => {
    const diff = this.endDate - Date.now();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeValues = diff <= 0 ? [0, 0, 0, 0] : [days, hours, minutes, seconds];

    this.numberContainers.forEach((numContainer, i) => {
      numContainer.textContent = timeValues[i];
    });
  };
}
