export const getSelector = (className) => `.${className}`;

export const capitalizeFirstLetter = (str) =>
  str.toLowerCase().replace(/\w/, (letter) => letter.toUpperCase());

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
