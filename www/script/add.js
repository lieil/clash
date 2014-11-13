// вычисление максимального значения
function max(a,b){
	return ((a > b) ? a : b);
}

// вычисление минимального значения
function min(a,b){
	return ((a < b) ? a : b);
}

// сумма всех значений массива
function sumArrayMembers(arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++){
	  sum += parseInt(arr[i]);
	}
	return sum;
}

$(document).ready(function(){
// ставим подпись
	$("#sign").html('Жду ваших замечаний и предложений по адресу: <a href="mailto:clash-of-clans-fans@mail.ru?subject=Вопрос%20по%20сайту"><nobr>clash-of-clans-fans@mail.ru</nobr></a>');
});