/* 
1 Читаем ввод пользователя
2 Проверяем, есть ли такой город в списке городов
3 Проверяем, что город на нужную букву (первая буква в названии === послденей букве в названии предыдщего города)
4 Проверяем не был ли использован город ранее
5 Добавляем в список использованных
6 Передаем ход компьютеру
*/
const usedCities = [];
const cities = data.map(function(el) {
  return el.city.toLowerCase().replace(/[йыъь]/g, "");
});

const input = document.querySelector('#input');
const button = document.querySelector('#submit');
let lastCityUsed = '';

button.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  const city = input.value.trim(); // (1)
  input.value = '';
  validateCity(city);
}

function validateCity(city) {
  city = city.toLowerCase();
  const valid = cities.indexOf(city) > -1;

  if (valid) { // (2)
    //const isCorrectStaringLetter = checkLetter(city); // (3)
    if (lastCityUsed.length>=1 && city[0] !== lastCityUsed[lastCityUsed.length - 1]) {
      alert('wrong letter');
      return;
    }
    if (usedCities.indexOf(city) > -1) { // (4)
      alert('alreay ispolzovanz!');
      return;
    } else {
      usedCities.push(city); // (5)
      alert('Found ya');
      lastCityUsed = city;
      
      pcAnswer();
    }
  } else {
    alert('No such gorod!');

  }
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random(cities) {
	return cities[getRandomInt(0, cities.length - 1)];
}


function pcAnswer() {
  
  do {city = random(cities);}
  while (city[0] !== lastCityUsed[lastCityUsed.length - 1])

  if (usedCities.indexOf(city) > -1) { // (4)
    alert('already ispolzovanz!');
    return;
  } else {
    usedCities.push(city); // (5)
    lastCityUsed = city;
    console.log('PC turn:', lastCityUsed);
    console.log(lastCityUsed[lastCityUsed.length - 1]);
    console.log("meow");
    console.log(typeof lastCityUsed[lastCityUsed.length - 1]); 
 
  }

}



/*в консоли работает:
let lastCityUsed = ['токио', 'москва', 'островский']; 

function removeVowels() {
const str = lastCityUsed[lastCityUsed.length - 1];
return lastCityUsed.push(str.replace(/[йыъь]/g, ""));
};

console.log(removeVowels());
console.log(lastCityUsed);*/


/*  тоже работает в консоли, это просто более аккуратнная запись
lastCityUsed = ['москва', 'Архангельск', 'островский']

function removeVowels() {
const str =  lastCityUsed[lastCityUsed.length - 1].replace(/[йыъь]/g, "");
return lastCityUsed.push(str); 
};

console.log(removeVowels());
console.log(lastCityUsed);
*/