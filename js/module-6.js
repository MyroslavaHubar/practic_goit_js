/*Класс Calculator: Реализуйте класс Calculator, который будет иметь методы для
основных математических операций: add, subtract, multiply, и divide. Каждый
метод будет принимать два числа и возвращать результат соответствующей операции.*/

// class Calculator {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }

//   add() {
//     return this.num1 + this.num2;
//   }

//   subtract() {
//     return this.num1 - this.num2;
//   }

//   multiply() {
//     return this.num1 * this.num2;
//   }

//   divided() {
//     if (this.num2 === 0) {
//       return 'Error;';
//     }
//     return this.num1 / this.num2;
//   }
// }

// const Calc = new Calculator(2, 3);
// console.log(Calc);
// console.log(Calc.add());
// console.log(Calc.subtract());
// console.log(Calc.multiply());
// console.log(Calc.divided());

/*===========================================================
2
===========================================================*/

/*Класс ContactBook: Создайте класс Contact для представления контакта с полями
name, email и phone. Затем реализуйте класс ContactBook, который будет хранить
список контактов и предоставлять методы для добавления, удаления и поиска
контактов.*/

// class Contact {
//   constructor(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//   }
//   toString() {
//     return `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}`;
//   }
// }

// class ContactBook extends Array {
//   addContact(contact) {
//     this.push(contact);
//   }

//   allContacts() {
//     if (this.length === 0) {
//       console.log('Contact book is empty');
//     } else {
//       console.log('All contacts:');
//       this.forEach(contact => console.log(contact.toString()));
//     }
//   }

//   deleteContact(name) {
//     const indexName = this.findIndex(contact => contact.name === name);
//     console.log(this);
//     if (indexName !== -1) {
//       this.splice(indexName, 1);
//       console.log(`${name} has been deleted from contacts`);
//     } else {
//       console.log(`Contact ${name} not found`);
//     }
//   }

//   searchContact(name) {
//     const contact = this.find(contact => contact.name === name);
//     if (contact) {
//       console.log(contact.toString());
//     } else {
//       console.log(`Contact ${name} not found`);
//     }
//   }
// }

// const contact1 = new Contact('Alex', 'alexwww@gmail.com', '0984536465');
// const contact2 = new Contact('Anna', 'annafhfh@gmail.com', '0673425167');
// const contact3 = new Contact('Nina', 'ninafhfh@gmail.com', '0673425557');

// const contactBook = new ContactBook();
// contactBook.addContact(contact1);
// contactBook.addContact(contact2);
// contactBook.addContact(contact3);

// contactBook.searchContact('Alex');
// contactBook.searchContact('Maria');
// contactBook.allContacts();
// contactBook.deleteContact('Nina');
// contactBook.deleteContact('Anna');

/*===========================================================
3
===========================================================*/
/*Класс Rectangle: Напишите класс Rectangle, который будет представлять
прямоугольник с методами для вычисления его площади и периметра. Конструктор
класса должен принимать длины двух сторон.*/

// class Rectangle {
//   constructor(weight, height) {
//     this.weight = weight;
//     this.height = height;
//   }

//   area() {
//     return this.weight * this.height;
//   }

//   perimeter() {
//     return (this.weight + this.height) * 2;
//   }
// }

// const rectangle = new Rectangle(15, 12);
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

/*===========================================================
4
===========================================================*/

/*Класс ToDoList: Создайте класс Task для представления задачи с полями title,
description и completed. Затем реализуйте класс ToDoList, который будет хранить
список задач и методы для добавления новых задач, отметки задачи как выполненной
и вывода списка задач.*/

// class Task {
//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//     this.completed = false;
//   }

//   markAsCompleted() {
//     this.completed = true;
//   }

//   toString() {
//     const status = this.completed ? 'Completed' : 'Not completed';
//     return `Title: ${this.title}\nDescription: ${this.description}\nStatus: ${status}`;
//   }
// }

// class ToDoList {
//   constructor() {
//     this.tasks = [];
//   }

//   addTask(task) {
//     this.tasks.push(task);
//   }

//   markTaskAsCompleted(index) {
//     if (index >= 0 && index < this.tasks.length) {
//       this.tasks[index].markAsCompleted();
//     }
//   }

//   displayTasks() {
//     if (this.tasks.length > 0) {
//       console.log('Tasks:');
//       this.tasks.forEach((task, index) => {
//         console.log(`Task ${index + 1}`);
//         console.log(task.toString());
//         console.log();
//       });
//     } else {
//       console.log('No tasks in your To Do List');
//     }
//   }
// }

// const task1 = new Task(
//   'Update your first file in JS project',
//   'Commit your file in VS Code',
// );
// const task2 = new Task('Go for a rest', 'Take a new task');

// const todoList = new ToDoList();

// todoList.addTask(task1);
// todoList.addTask(task2);

// console.log('Show me to do list:');
// todoList.displayTasks();

// todoList.markTaskAsCompleted(0);

// console.log('New to do list:');
// todoList.displayTasks();
/*===========================================================
5
===========================================================*/

/*Класс BankAccount: Реализуйте класс BankAccount, который будет представлять
банковский счет с методами для депозита, снятия средств и проверки баланса.
Учтите обработку возможных ошибок (например, недостаточно средств).*/

// class BankAccount {
//   constructor(balance = 0) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(`Deposit ${amount} into the account`);
//     } else {
//       console.log('Error');
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(`You is withdraw ${amount} from you account`);
//       } else {
//         console.log('Insufficient funds');
//       }
//     } else {
//       console.log('Error');
//     }
//   }

//   checkBalance() {
//     console.log(`Ballance in you account: ${this.balance}`);
//   }
// }

// const account = new BankAccount(1000);

// account.deposit(500);
// account.withdraw(300);
// account.checkBalance();

// account.withdraw(2000);
/*===========================================================
6
===========================================================*/

/*Класс LibraryCatalog: Создайте класс Book для представления книги с полями
title, author и ISBN. Затем реализуйте класс LibraryCatalog, который будет
хранить список книг в библиотеке и предоставлять методы для добавления новых
книг, поиска книг по автору и ISBN, а также вывода списка всех книг.*/

/*===========================================================
7
===========================================================*/

/*Класс TemperatureConverter: Напишите класс TemperatureConverter, который будет
иметь методы для конвертации температур между градусами Цельсия и Фаренгейта.*/

// class TemperatureConverter {
//   constructor(celsius, fahrenheit) {
//     this.celsius = celsius;
//     this.fahrenheit = fahrenheit;
//   }

//   celsiusToFahrenheit() {
//     return (this.celsius * 9) / 5 + 32;
//   }

//   fahrenheitToCelsius() {
//     return ((this.fahrenheit - 32) * 5) / 9;
//   }
// }

// const temperatureConverter = new TemperatureConverter(30, 45);

// console.log(temperatureConverter.celsiusToFahrenheit());
// console.log(temperatureConverter.fahrenheitToCelsius());

/*===========================================================
8
===========================================================*/

/*Класс ShoppingCart: Реализуйте класс Product для представления товара с полями
name, price и quantity. Затем создайте класс ShoppingCart, который будет хранить
список товаров и предоставлять методы для добавления товаров, подсчета общей
стоимости и вывода списка товаров.*/

/*Класс SocialNetworkUser: Создайте класс SocialNetworkUser, представляющий
пользователя социальной сети с полями username, friends (список друзей) и
методами для добавления и удаления друзей, а также вывода списка друзей.*/

/*Класс MusicPlayer: Реализуйте класс Song для представления песни с полями title,
artist и duration. Затем создайте класс MusicPlayer, который будет хранить
список песен и предоставлять методы для добавления новых песен, воспроизведения,
паузы и переключения между песнями.*/

/*Реалізуйте клас MyString, який буде мати наступні методи: метод reverse(), який
параметром приймає рядок, а повертає її в перевернутому вигляді, метод
ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його
першу літеру заголовком і метод ucWords, який приймає рядок і робить заголовною
першу літеру кожного слова цього рядка.*/

/* Реалізуйте клас Validator, який перевірятиме рядки. Наприклад, у нього буде
метод isEmail параметром приймає рядок і перевіряє, чи є він коректним емейлом
чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, клас буде мати
такі методи: метод isDomain для перевірки домену, метод isDate для перевірки
дати і метод isPhone для перевірки телефону: */
