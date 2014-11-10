// вычисление максимального значения
function max(a,b){
	return ((a > b) ? a : b);
}

// вычисление минимального значения
function min(a,b){
	return ((a < b) ? a : b);
}

function sumArrayMembers(arr){
	var sum = 0;
	for(i=0; i<arr.length; i++){
	  sum += arr[i];
	}
	return sum;
}