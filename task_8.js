// Задание 8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


let map = new Map([
  ['001', 'element_1'],
  ['002', 'element_2'],
  ['003', 'element_3']
]);

for (let [key, value] of map) {
  console.log(`Ключ — ${key}, значение — ${value}`)
}