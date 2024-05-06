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
const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'White',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    color: 'Black',
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    color: 'Blue',
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: 'Sedan',
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    color: 'Silver',
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'Gray',
    price: 45000,
    amount: 4,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Lamborghini',
    model: 'Huracan',
    year: 2023,
    color: 'Yellow',
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2022,
    color: 'Red',
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Porsche',
    model: '911',
    year: 2021,
    color: 'White',
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Toyota',
    model: 'Golf',
    year: 2020,
    color: 'Black',
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Subaru',
    model: 'Forester',
    year: 2021,
    color: 'Green',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Orange',
    price: 35000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Kia',
    model: 'Soul',
    year: 2021,
    color: 'Yellow',
    price: 20000,
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    color: 'Silver',
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Lexus',
    model: 'RX',
    year: 2021,
    color: 'Black',
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2022,
    color: 'Gray',
    price: 60000,
    amount: 1,
    isSportCar: false,
    type: 'SUV',
  },
];

// 1. Знайти авто зеленого кольору

// const colorCars = allCar => {
//   return allCar.map(car => car.model);
// };
// console.table(colorCars(cars));

/*===========================================================*/
// 2. Знайти усі спорткари

// const allCars = sportCars => {
//   return sportCars.filter(car => car.isSportCar);
// };
// console.log(allCars(cars));

/*===========================================================*/
// 3. Порахувати кількість авто 2022 року

// const allCars = sportCars => {
//   return sportCars.filter(car => car.year === 2022).length;
// };
// console.log(allCars(cars));

/*========================================================*/
// 4. Знайти всі машини з ціною вище 30000.

// const priceCar = allCars => {
//   return allCars.filter(car => car.price > 30000);
// };
// console.table(priceCar(cars));

/*=======================================================*/
// 5. Знайти всі машини червоного кольору.

// const newListCars = allCars => {
//   return allCars.filter(car => car.color === 'Red');
// };
// console.table(newListCars(cars));

/*========================================================*/
// 6. Порахувати кількість машин 2022 року.

// const newListCars = allCars => {
//   return allCars.filter(car => car.year === 2022).length;
// };
// console.table(newListCars(cars));

/*========================================================*/
// 7. Відсортувати машини за роком випуску (від найстарішого до найновішого).
// const newListCars = cars.toSorted((oldCar, newCar) => {
//   return oldCar.year - newCar.year;
// });

// console.table(newListCars);

/*==========================================================*/
// 8. Знайти найдорожчу машину.

/*==========================================================*/
// 9. Знайти всі машини заданої марки (наприклад, Toyota).
// const newListCars = (allCars, brand) => {
//   return allCars.filter(car => car.brand === brand);
// };
// console.table(newListCars(cars, 'Toyota'));

/*===========================================================*/
// 10. Порахувати загальну кількість машин усіх типів.

// const newListCars = (allCars, type) => {
//   return allCars.filter(car => car.type === type).length;
// };
// console.log(newListCars(cars, 'SUV'));
// console.log(newListCars(cars, 'Sedan'));
// console.log(newListCars(cars, 'Hatchback'));
// console.log(newListCars(cars, 'Coupe'));

/*===========================================================*/
// 11. Відсортувати машини за ціною (від найдешевшої до найдорожчої).

// const newListCars = cars.toSorted((oldCarPrice, newCarPrice) => {
//   return oldCarPrice.price - newCarPrice.price;
// });

// console.table(newListCars);

// /*=================================================================*
// 12. Знайти всі машини певного типу (наприклад, SUV).
// const newListCars = (allCars, type) => {
//   return allCars.filter(car => car.type === type);
// };

// console.table(newListCars(cars, 'SUV'));

/*==============================================================*/
// 13. Знайти всі машини певного кольору та року випуску.

// const newListCars = (allCars, color, year) => {
//   return allCars.filter(car => car.color === color && car.year === year);
// };

// console.table(newListCars(cars, 'Gray', 2022));
// console.table(newListCars(cars, 'Gray', 2021));

/*======================================================*/
// 14. Порахувати середню ціну всіх машин.

const totalPrice = cars.reduce((acc, car) => acc + car.price, 0);

const avaragePrice = totalPrice / cars.length;

console.log(avaragePrice);

// 15. Знайти всі машини, у яких кількість на складі більша за 0.
// 16. Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
// 17. Порахувати сумарну кількість всіх машин заданої марки.
// 18. Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
// 19. Знайти всі машини, які не є спортивними та доступні для продажу.
// 20. Порахувати загальну вартість всіх машин складі.
// 21. Знайти всі машини певного типу та кольору.
// 22. Відсортувати машини за брендом та моделлю в алфавітному порядку.
// 23. Перевірити, чи є хоч одна машина зеленого кольору.
// 24. Створити новий масив, що містить лише назви моделей усіх машин.
// 25. Створити масив, що містить розмітку кожної машини.
// 26. Знайти індекс першої машини з роком випуску 2022 року.
// 27. Сортувати за ціною
