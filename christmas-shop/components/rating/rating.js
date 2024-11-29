export const CLASS_RATING = 'rating';
export const CLASS_RATING_UNIT = 'rating__unit';
export const CLASS_RATING_UNIT_ACTIVE = 'rating__unit_active';

const Rating = ({ value, max }) => {
  const element = document.createElement('span');
  element.classList.add(CLASS_RATING);

  for (let i = 1; i <= max; i++) {
    const unit = document.createElement('img');
    unit.src = `./assets/img/snowflake.svg`;
    unit.classList.add(CLASS_RATING_UNIT);

    if (i <= value) {
      unit.classList.add(CLASS_RATING_UNIT_ACTIVE);
    }

    element.appendChild(unit);
  }

  return element;
};

export default Rating;
