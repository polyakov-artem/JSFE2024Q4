import { DATA_ATTRIBUTE, DATA_ATTRIBUTE_VALUE_OPEN } from '../../js/modal.js';
import { capitalizeFirstLetter } from '../../js/utils.js';
import Rating from '../rating/rating.js';

export const CLASS_H3 = 'h3';
export const CLASS_H4 = 'h4';
export const CLASS_GIFT = 'gift';
export const CLASS_GIFT_VIEW_LINK = 'gift_view_link';
export const CLASS_GIFT_IMG_WRAP = 'gift__img-wrap';
export const CLASS_GIFT_IMG = 'gift__img';
export const CLASS_GIFT_BODY = 'gift__body';
export const CLASS_GIFT_TAG = 'gift__tag';
export const CLASS_GIFT_TAG_WORK = 'gift__tag_work';
export const CLASS_GIFT_TAG_HEALTH = 'gift__tag_health';
export const CLASS_GIFT_TAG_HARMONY = 'gift__tag_harmony';
export const CLASS_GIFT_TITLE = 'gift__title';
export const CLASS_DESCRIPTION = 'gift__description';
export const CLASS_POWERS_TITLE = 'gift__powers-title';
export const CLASS_POWERS_GRID = 'gift__powers-grid';
export const CLASS_POWERS_ROW = 'gift__powers-row';
export const CLASS_POWER_LABEL = 'gift__power-label';
export const CLASS_POWER_VALUE = 'gift__power-value';

const Gift = ({ name, category, view, description, superpowers, onClick }) => {
  const element = view === 'link' ? document.createElement('a') : document.createElement('div');
  const imgWrap = document.createElement('div');
  const img = document.createElement('img');
  const body = document.createElement('div');
  const tag = document.createElement('span');
  const title = document.createElement('h3');

  element.classList.add(CLASS_GIFT);
  if (view === 'link') {
    element.setAttribute('href', '#');
    element.classList.add(CLASS_GIFT_VIEW_LINK);
    element.setAttribute(DATA_ATTRIBUTE, DATA_ATTRIBUTE_VALUE_OPEN);

    element.addEventListener('click', () => onClick?.());
  }

  imgWrap.classList.add(CLASS_GIFT_IMG_WRAP);
  img.classList.add(CLASS_GIFT_IMG);
  body.classList.add(CLASS_GIFT_BODY);
  tag.classList.add(CLASS_GIFT_TAG, CLASS_H4);
  title.classList.add(CLASS_GIFT_TITLE, CLASS_H3);

  switch (category) {
    case 'For Work':
      img.src = './assets/img/gift-for-work.png';
      tag.classList.add(CLASS_GIFT_TAG_WORK);
      break;
    case 'For Health':
      img.src = './assets/img/gift-for-health.png';
      tag.classList.add(CLASS_GIFT_TAG_HEALTH);
      break;
    case 'For Harmony':
      img.src = './assets/img/gift-for-harmony.png';
      tag.classList.add(CLASS_GIFT_TAG_HARMONY);
      break;
  }

  img.alt = `Gift ${category.toLowerCase()}`;
  tag.textContent = capitalizeFirstLetter(category);
  title.textContent = name;

  element.appendChild(imgWrap);
  element.appendChild(body);
  imgWrap.appendChild(img);
  body.appendChild(tag);
  body.appendChild(title);

  if (description) {
    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;
    descriptionEl.classList.add(CLASS_DESCRIPTION);
    body.appendChild(descriptionEl);
  }

  if (superpowers) {
    const powersTitle = document.createElement('h4');
    powersTitle.textContent = 'Adds superpowers to:';
    powersTitle.classList.add(CLASS_POWERS_TITLE, CLASS_H4);
    body.appendChild(powersTitle);

    const powersGrid = document.createElement('div');
    powersGrid.classList.add(CLASS_POWERS_GRID);
    body.appendChild(powersGrid);

    Object.keys(superpowers).forEach((label) => {
      const powersRow = document.createElement('div');
      powersRow.classList.add(CLASS_POWERS_ROW);
      powersGrid.appendChild(powersRow);

      const powerLabel = document.createElement('span');
      powerLabel.textContent = label;
      powerLabel.classList.add(CLASS_POWER_LABEL);
      powersRow.appendChild(powerLabel);

      const powerValue = document.createElement('span');
      powerValue.textContent = superpowers[label];
      powerValue.classList.add(CLASS_POWER_VALUE);
      powersRow.appendChild(powerValue);

      powersRow.appendChild(Rating({ value: parseInt(superpowers[label]) / 100, max: 5 }));
    });
  }

  return element;
};

export default Gift;
