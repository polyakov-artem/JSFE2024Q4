import { CLASS_HEADER, Header } from './header.js';
import './score.js';
import { getSelector } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(getSelector(CLASS_HEADER)).forEach((element) => {
    new Header(element);
  });
});
