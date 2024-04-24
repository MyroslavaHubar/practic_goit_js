// Виконай рефакторинг функції countProps(object),
// замінивши перебір ключів за допомогою циклу for…in
// на метод Object.keys() для отримання масиву властивостей.
// Функція має повернути кількість властивостей в об'єкті object.
// А тепер розв'яжемо задачу "Підрахунок властивостей".

// function countProps(object) {
//   const keys = Object.keys(object);

//   return keys.length;
// }

// console.log(countProps({})); //0
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

// // ==========================================================================
// ==================================================================
// // =======================================================================
// Запиши у змінну keys масив ключів властивостей об'єкта apartment,
// а у змінну values - масив їх значень.
// Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// // ========================================================================
// =======================================================================
// // =========================================================================
// Давай розв'яжемо практичну задачу "Витрати на зарплату"!
// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries)
// в якості параметра.Кожна властивість об'єкта salaries — це ключ,
// що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так,
// щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0,
//  яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат)
// з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу
// та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const salaryValues = Object.values(salaries);
//   for (let salary of salaryValues) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({})); //0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
//
// // ========================================================================
// ===============================================================
// // ==============================================================
// Масив colors містить колекцію кольорів.
// Кожен колір представлений об'єктом і має властивості hex і rgb
// з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
//  Додай у масив hexColors значення властивостей hex,
//     а в масив rgbColors - значення властивостей rgb
//      з усіх об'єктів масиву colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//   hexColors.push(color.hex);

//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// // ==============================================================
// ============================================================
// // =================================================================
// Функція getProductPrice(productName) приймає один параметр
// productName - назва продукту.Функція містить масив об'єктів products
// з такими властивостями, як name — ім'я товару, price — ціна і
// quantity — кількість.

// Доповни код функції так,
// щоб вона шукала об'єкт продукту з певним ім'ям(властивість name)
//  в масиві products і повертала його ціну(властивість price).
//  Якщо продукт з такою назвою не знайдений,
//  функція повинна повертати null.
// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Radar')); //1300
// console.log(getProductPrice('Grip')); //1200
// console.log(getProductPrice('Scanner')); //2700
// console.log(getProductPrice('Engine')); //null

// // /==========================================================================
// ================================================================
// // ==================================================================
// Напиши функцію getAllPropValues(propName),
//     яка приймає один параметр propName - ім'я (ключ) властивості.
//     Функція повинна повернути масив усіх значень властивості
//     з таким ім'ям з кожного об'єкта в масиві products.
//     Якщо в об'єктах відсутні властивості з таким ім'ям,
//     функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const finishName = [];

//   for (const product of products) {
//     if (propName in product) {
//       finishName.push(product[propName]);
//     }
//   }
//   return finishName;
// }
// // ================================================================
// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const finishName = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       finishName.push(product[propName]);
//     }
//   }
//   return finishName;
// }
// // =====================================
// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const finishName = [];

//   for (const product of products) {
//     switch (propName) {
//       case 'name':
//         finishName.push(product.name);
//         break;

//       case 'price':
//         finishName.push(product.price);
//         break;

//       case 'quantity':
//         finishName.push(product.quantity);
//         break;
//     }
//   }
//   return finishName;
// }

// console.log(getAllPropValues('name')); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); //[4, 3, 7, 9]
// console.log(getAllPropValues('category')); //[]
