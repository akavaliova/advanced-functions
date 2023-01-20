"use strict";
// пример стрелочной функции const greet = () => 'Hello students!’
// Пример метода: const newArray = array.filter(callback(value, index, array), this)
// возвращает нам новый массив с отфильтрованными данными


// допустим хотим из массива чисел оставить те,которые кратны двум (делятся без отстатка на два) на инглише этот even (четные)
// мы должны вернуть условие, если это условие вернет true, то метод фильтр вернет элемент, который попадает в эту функцию на итерацию цикла
// если это условие false, то метод фильтр отфильтрует его и не вернет его
// number % 2 === 0 это выражение вернет либо true либо false
const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0)  // метод принимает в себя ф-цию callback с параметрами value, index, array, мы хотим только values, т.е. числа наши,то пишем number
console.log(evenNumbers);  // [2, 4, 6, 8, 10]


// еще пример, отфильтровать пользователей у которых возраст старше 21 года
const someUsers = [{userName: "John", age: 21},{userName: "John", age: 20}, {userName: "John", age: 16}, {userName: "John", age: 42} ];
const adultUsers = someUsers.filter ((user) => user.age >= 21)
console.log(adultUsers); // вернет мне [{userName: 'John', age:21}, {userName: 'John', age:42}]