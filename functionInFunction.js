"use strict";
// пример функции в функции
function someFunction(someArgument) {
  let name = "Lizzy";
  someArgument(name);  // это и есть вызов функции внутри функции, SomeArgument это функция, мы ее вызываем
}

function anotherFunction(anotherArgument) {
    // console.log(anotherArgument);
    alert(anotherArgument);
}

function thirdFunction(aaaaaa) {
    alert(aaaaaa);
}

someFunction(anotherFunction);
someFunction(thirdFunction);


