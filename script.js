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
  return el.city.toLowerCase();
});

const input = document.querySelector('#input');
const button = document.querySelector('#submit');
let lastCityUsed = '';
let str = lastCityUsed[lastCityUsed.length - 1];



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
      const str = lastCityUsed[lastCityUsed.length - 1];
      str.replace(/[йыъь]/g, "");
      console.log(lastCityUsed);
/*
function removeVowels(str){
  return str.replace(/[йыъь]/g, "");
}
*/
      pcAnswer(city);
    }
  } else {
    alert('No such gorod!');

  }
}

/*function checkLetter(city) { 
  if (!lastCityUsed) return true;
  console.log(!lastCityUsed);
  console.log(lastCityUsed);
  // check if 1st letter of city === last city used last letter
}*/



function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random(cities) {
	return cities[getRandomInt(0, cities.length - 1)];
}

function pcAnswer(city) {
  
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
    
/*
function removeVowels(str){
  return str.replace(/[йыъь]/g, "");
}*/
    
  }
}




