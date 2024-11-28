import { capitalizeFirstLetter } from '../../js/utils.js';

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

const Gift = ({ name, category, view }) => {
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

  return element;
};

export default Gift;
