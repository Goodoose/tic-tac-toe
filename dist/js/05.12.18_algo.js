// 1)

function makeBuffer() {
  let ourStr = '';

  function someStr(value) {
    return ourStr;
  }
  someStr.set = function (value) {
    ourStr += value;
  };
  return someStr;
}
const buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
// buffer.set(' Использовать');
// buffer.set(' Нужно!');
// получить текущее значение
alert(buffer()); // Замыкания Использовать Нужно!
// Буфер должен преобразовывать все данные к строковому типу:
buffer.set(0);
buffer.set(1);
buffer.set(0);
alert(buffer()); // '010'

// 2)

function makeBuffer() {
  let ourStr = '';
  function someStr() {
    return ourStr;
  }
  someStr.set = function (value) {
    ourStr += value;
  };
  someStr.clear = function () {
    ourStr = '';
  };
  return someStr;
}
const buffer = makeBuffer();
// добавить значения к буферу
buffer.set('Замыкания');
buffer.set(' Использовать');
buffer.set(' Нужно!');
// получить текущее значение
alert(buffer()); // Замыкания Использовать Нужно!
// Буфер должен преобразовывать все данные к строковому типу:
buffer.set(0);
buffer.set(1);
buffer.set(0);
alert(buffer()); // '010'

// 3)

// Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
// filter(arr, inBetween(3,6)) // – выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) // – выберет только элементы, совпадающие с одним из значений массива.
// Пример, как это должно работать:
/* .. ваш код для filter, inBetween, inArray */

function inBetween(item1, item2){
  return function (item){
    return (item >= item1) && (item <= item2);
  }
}
 
function inArray(arr){
  return function (item) {
    return arr.includes(item);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// 4)



// 5)

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
  // for(let i = 0; i < 10; i++ ){  
    let shooter = function() { // shooter function
      alert( i ); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}
let army = makeArmy();
army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...