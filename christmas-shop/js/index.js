import { CLASS_HEADER, Header } from './header.js';
import './score.js';
import { CLASS_SLIDER, sliderOptions, Slider } from './slider.js';
import { getSelector } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(getSelector(CLASS_HEADER)).forEach((element) => {
    new Header(element);
  });
  document.querySelectorAll(getSelector(CLASS_SLIDER)).forEach((element) => {
    new Slider(element, sliderOptions);
  });
});
