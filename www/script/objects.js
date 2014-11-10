var maxlvl = []; // максимальные уровни войск
var lvl = []; //уровни войск посетителя
var	newLvl = 0; //переменная для установки нового уровня юнита
// window.onbeforeunload = saveLvl;


// jQuery 
$(document).ready(function(){

// ставим подпись
	$("#sign").html('Жду ваши замечания и предложения по адресу:<br/><a href="mailto:clash-of-clans-fans@mail.ru?subject=Вопрос%20по%20сайту">clash-of-clans-fans@mail.ru</a>');
	
});

function Unit(troop, level) {
	this.name = troop.name;
	var lvl = level;
	this.cost = transpArray(troop.cost, troop.costd);
	this.setLvl = function(num){
		this.lvl = num;
	}
	this.getLvl = function(){
		return(this.lvl);
	}
}

function TroopSet(troop, level) {
	this.name = troop.name;
	var lvl = level;
	this.cost = transpArray(troop.cost, troop.costd);
	this.setLvl = function(num){
		this.lvl = num;
	}
	this.getLvl = function(){
		return(this.lvl);
	}
}


//
// вспомогательные функции.
//

// проверка на число
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// вычисление максимального значения
function max(a,b){
	return ((a > b) ? a : b);
}

// установка cookie options: expires - время действия куки в днях; path, domain, secure - стандартные действия для кук
function setCookie(name, value, options) {
  options = options || {};
  var expires = options.expires;
  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setDate(d.getDate() + expires);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }
   value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;
  for(var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];   
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
     }
  }
  document.cookie = updatedCookie;
}

//чтение  cookie
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

//работа с массивами
function transpArray(arr1,arr2){ //из двух строчных массивов делает один массив объектов из пар значений
	var newArr = [];
	if (arr1.length == arr2.length){
		arrlength = arr1.length;
		for(var i = 0; i < arrlength; i++){
			newArr[i] = [arr1[i],arr2[i]];
		}
	}
	return newArr;
}

function sumArr(arr1, arr2){ //складывает попарно значения двух массивов
	var newArr = [];
	if (arr1.length == arr2.length){
		arrlength = arr1.length;
		for(var i = 0; i < arrlength; i++){
			newArr[i] = arr1[i]+arr2[i];
		}
	}
	return newArr;
}

// тестовая функция вызывает функцию test, запускается по кнопке 
function showLvl(){
	test();
}

function test(){
	alert(transpArray([1,2],[3,4]));
}