// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнет, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебряный партнет, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотой партнет, скидка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнет, скидка 0%');
// }

// payment -= payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment}, со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Сумма потраченая в магазине за все время составила ${totalSpent}`);

// -----------------------------------------------------

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let bigestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);

//   if (number > bigestNumber) {
//     bigestNumber = number;
//   }
// }

// console.log('самое маленькое число: ', bigestNumber);

// -----------------------------------------------------

// Должно получиться 'Mango, Polly, Kiwi, Ajax'
// const friends = ['Mango', 'Polly', 'Kiwi', 'Ajax'];
// // let string = '';

// // for (const friend of friends) {
// //   string += friend + ', ';
// // }

// // string = string.slice(0, string.length - 2);

// const string = friends.join(',   ');

// console.log(string);

// -----------------------------------------------------

// Смена регистра
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// // console.log(letters);

// for (const letter of letters) {
//   //   console.log(letter);

//   //   if (letter === letter.toLowerCase()) {
//   //     invertedString += letter.toUpperCase();
//   //   } else {
//   //     invertedString += letter.toLowerCase();
//   //   }

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(invertedString);

// -----------------------------------------------------

// Делаем slug в URL из названия статьи

// const title = 'Top 10 benefits to React framework';

// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// // const words = normalizedTitle.split(' ');
// // console.log(words);

// // const slug = words.join('-');
// // console.log(slug);

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// -----------------------------------------------------

// Написать скрипт который считает сумму элементов двух масивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// // for (let i = 0; i < array1.length; i += 1) {
// //   total += array1[i];
// // }

// // for (let i = 0; i < array2.length; i += 1) {
// //   total += array2[i];
// // }

// // console.log('Total: ', total);

// const numbers = array1.concat(array2);

// // for (let i = 0; i < numbers.length; i += 1) {
// //   total += numbers[i];
// // }

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// -----------------------------------------------------
