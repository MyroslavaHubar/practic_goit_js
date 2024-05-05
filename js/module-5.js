/* Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers 
і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, 
які більші за значення другого параметра числа value. Якщо таких значень 
не буде знайдено, функція повертає порожній масив.

Виконай рефакторинг функції таким чином, щоб замість циклу for, 
вона використовувала метод forEach. */

// function filterArray(numbers, value) {
//   const result = [];

//   numbers.forEach(function (item) {
//     if (item > value) result.push(item);
//   });
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]

/*===========================================================================*/
/*===========================================================================*/
