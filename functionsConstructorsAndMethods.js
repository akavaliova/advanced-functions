"use strict";
//а теперь можно еще и методы запихнуть в функцию - конструктор


 function User (name, age){   // ВСЕ ВНУТРИ ЭТО ШАБЛОН
// this = {}  ПОД КАПОТОМ ЧТО ДЕЛАЕТСЯ: мы присваиваем в этот контекст некий объект
   this.name = name; // т.е. берем поле name не существующее, присваиваем в объект то, что прилетает извне из параметра name
   this.age = age;   // тоже присваиваем какое то значение в этот объект {}
   this.greeting = function() { //берем объявляем метод прямо внутри, не получаем извне, присваиваем greeting функцию
    console.log(this)
    console.log(`Hello, my name is ${this.name} `)  // эта функция является методом у будущей сущности, которую мы создаем на подобие этого шаблона
   }     
//    return this  (ЭТО ПОД КАПОТОМ ЧТО ДЕЛАЕТСЯ) - возвращаем this т.е. наш объект
 }
 let johnUser = new User("John", 42);  // ЭТО СОЗДАНИЕ СУЩНОСТЕЙ
 let mikeUser = new User("Mike", 33);  // ЭТО СОЗДАНИЕ СУЩНОСТЕЙ
//  console.log(johnUser); //  User {name: 'John', age: 42} - т.е. этот объект создается как бы на основе шаблона:
                                                                              //  this.name = name; 
                                                                              // this.age = age;


console.log(johnUser.greeting()); //  User {name: 'John', age: 42, greeting: ƒ}  Hello, my name is John 
console.log(mikeUser.greeting()); // User {name: 'Mike', age: 33, greeting: ƒ}  Hello, my name is Mike 


// johnUser.greeting() ЭТО контекст вызова вон того this  (`Hello, my name is ${this.name} `)