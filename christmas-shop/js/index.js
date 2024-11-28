import Gift from '../components/gift/gift.js';
import { CLASS_HEADER, Header } from './header.js';
import './score.js';
import { CLASS_SLIDER, sliderOptions, Slider } from './slider.js';
import { CLASS_TIMER, TIMER } from './timer.js';
import { getRandomInt, getSelector } from './utils.js';
import { gifts } from './../data/gifts.js';

const CLASS_BEST_GIFTS = 'gifts-section';
const CLASS_BEST_GIFTS_GRID = 'gifts-grid';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(getSelector(CLASS_HEADER)).forEach((element) => {
    new Header(element);
  });
  document.querySelectorAll(getSelector(CLASS_SLIDER)).forEach((element) => {
    new Slider(element, sliderOptions);
  });
  document.querySelectorAll(getSelector(CLASS_TIMER)).forEach((element) => {
    new TIMER(element);
  });

  document.querySelectorAll(getSelector(CLASS_BEST_GIFTS)).forEach((element) => {
    const numOfGifts = 4;
    const randomGifts = [];
    for (let i = 0; i < numOfGifts; i++) {
      let gift;
      while (!gift || randomGifts.includes(gift)) {
        gift = gifts[getRandomInt(0, gifts.length - 1)];
      }

      randomGifts.push(gift);
    }

    const grid = element.querySelector(getSelector(CLASS_BEST_GIFTS_GRID));

    randomGifts.forEach((gift) => grid.appendChild(Gift({ ...gift, view: 'link' })));
  });
});
