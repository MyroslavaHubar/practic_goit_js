// Дано рядок, що складається із символів, наприклад "аbсde".
// Перевір, що другим симовлом цього рядка є літера "b".
// Якщо так - виведи "Так" у консоль, в протилежному випадку виведе "Ні"

// const string = 'abcde';
// if (string[1] === 'b') {
//    console.log('Так');
//  } else {
//   console.log('Ні');
//   }
// ================================================================================
// =============================================================================
// Оголоси функцію canRegisterOnSite(age, hasAccepttedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
//  Користувач може зареєструватись, якщо йому виповнилось 13 років
// і він прийняв умови користування.
//  Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача,
// hasAccepttedTerms - буль(що вказує чи прийняли умови використання).

// function canRegisterOnSite(age, hasAccepttedTerms) {
//   return age >= 13 && hasAccepttedTerms;
// }

// console.log(canRegisterOnSite(15, true));
// console.log(canRegisterOnSite(10, true));
// console.log(canRegisterOnSite(18, false));

// ========================================================================================
// ================================================================================
// Оголоси функцію calculateSquare(value)
// Функція має перевірити чи є отрмиане значення число
// або за можливості перетворити рядок на число
// Якщо це число фукнція возводить число у квадрат і виводить рядок
//     `The square of ${numberValue} is ${squareNumber}`
// numberValue - отримане число або пеертворений рядок у число
// squareNumber - numberValue у квадраті
// Якщо значення не є числом, функція поветає `Invalid input`

// function calculateSquare(value) {
//   const numberValue = Number.parseFloat(value);
//   if (!isNaN(value)) {
//     const squareNumber = Math.pow(numberValue, 2);
//     return `The square of ${numberValue} is ${squareNumber}`;
//   } else {
//     return `Invalid input`;
//   }
// }

// console.log(calculateSquare(15));
// console.log(calculateSquare('dfg 12'));
// console.log(calculateSquare('dfg 14'));
// console.log(calculateSquare('22'));

// ================================================
// ===================================================
// Оголоси функцію isEvenNumber(number)
// яка перевіряє(за допомогою тернарного оператору)
// чи отримане значення є парним числом
// і виводить відповідно "Число парне" або "Число непарне"
// Якщо функція отримує НЕ число, то вивести "Невалідне значення"

// function isEvenNumber(number) {
//   if (typeof number === 'number') {
//     return number % 2 === 0 ? 'Число парне' : 'Число непарне';
//   } else {
//     return 'Невалідне значення';
//   }
// }

// console.log(isEvenNumber(23));
// console.log(isEvenNumber(1));
// console.log(isEvenNumber(12));

// =============================================================================
// =============================================================================
// Оголоси функцію checkString(value) яка перевіряє
// чи отримане значення є рядком і не містить знак $
// Якщо це так, виведіть кількість символів у рядку
// Якщо значення не є рядком, то виведіть повідомлення "невірний ввід"

// function checkString(value) {
//   if (typeof value === 'string' && value.includes('$')) {
//     return `кількість символів у рядку ${value.length}`;
//   } else {
//     return `невірний ввід`;
//   }
// }

// console.log(checkString('hello$'));
// console.log(checkString('hello'));
// console.log(checkString('22$'));

// ===============================================================================
// ===================================================================================
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
// Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }

// =====================================================================
// ===============================================================
// Функція getEvenNumbers(start, end) має два параметри start та end,
// які є цілими числами.Доповни код функції так,
// щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).
// Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   const array = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]

// ====================================================================
// ========================================================================