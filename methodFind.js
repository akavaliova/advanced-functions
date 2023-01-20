"use strict";
// пример стрелочной функции const greet = () => 'Hello students!’
// Пример метода: const value = array.find(callback(value, index, array), this)
// ищет определенный элемент по определенному условию

const someUsers = [{userName: "John", id: 21}, {userName: "John", id: 20}, {userName: "Mike", id: 16}, {userName: "John", id: 42}];
// ищем Майка и передаем в метод функцию callback, которая принимает 3 параметра value, index, array, но тут нам нужен только value (какой-то пользователь, я назвала его someone)
const mike = someUsers.find((someone) => someone.userName === "Mike"); // мы получим ссылку на объект со значением "Mike"
console.log(mike); // возвращает мне  {userName: 'Mike', id: 16}
// если пользователя нет в массиве, то вернет undefind
// если будет у нас два Майка, то вернет первого попавшегося
