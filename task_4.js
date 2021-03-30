// Задание 4.
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.


function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

let x = randomNumber(0, 100);

console.log(x);