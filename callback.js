"use strict";

function foo(bar) {   // функция foo принимает в себя функцию bar
  let name = "Lizzy";
  bar(name); // вот она в этой строке callback функция bar(name)
}
foo(bar);


function bar(name) {  // это функция callback, мы ее передаем в функцию foo, как аргумент
  alert("Hello " + name);
}
