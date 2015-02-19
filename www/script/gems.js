function Block(elem){
	this.elem = elem;
		var computedStyle = getComputedStyle(this.elem);
	this.minSize = (computedStyle.minWidth != 'none') ? [parseInt(computedStyle.minWidth), parseInt(computedStyle.minHeight)] : [0,0];
	this.RecSize = 'none';
	this.minMargin = [0,0,0,0];
	this.maxSize = (computedStyle.maxWidth != 'none') ? [parseInt(computedStyle.maxWidth), parseInt(computedStyle.maxHeight)] : [screen.availWidth, screen.availHeight];
}

function Slider(elem){
	this.elem = elem;
	this.startValue = $(this).slider.from;
	this.endValue = $(this).slider.to;
	this.setNewValues = function(arrVal){
		this.startValue = arrVal[0];
		this.endValue = arrVal[1];
	}
}

$(document).ready(function(){

//Параметры страницы
	var mainDiv = new Block(document.getElementById('maindiv'));
		mainDiv.minMargin = [114, 200, 0, 200];

	reDraw(window, mainDiv);

	$(window).resize(function(){
		reDraw(window, mainDiv);
		});
	
/*	$('#gems').noUiSlider({
		start: [ 30 ],
		connect: "lower",
		range: {
			'min': 0,
			'max': 480
		}
	});*/
 //инициализация слайдеров
	var gemsCounter = new Slider(jQuery("#gems"));
	var timeCounter = new Slider(jQuery("#time"));
	var treeCounter = new Slider(jQuery("#tree"));
		
	 jQuery("#gems").slider({ from: 0, to: 100, step: 1, smooth: true, round: 0, dimension: "&nbsp;gems", skin: "blue", 
	 callback: function( value ){ 
		timeCounter.setNewValues(gemsToTime($("#gems").slider("value")));
//		console.log("значения в объекте timeCounter:" + timeCounter.startValue + " / " + timeCounter.endValue);
//		jQuery("#time").slider("value", timeCounter.startValue, timeCounter.endValue);
//		console.log("значения в слайдере  time:" + jQuery("#time").slider("value"));
		treeCounter.setNewValues(gemsToTree($("#gems").slider("value")));
		jQuery("#tree").slider("value", treeCounter.startValue, treeCounter.endValue);
		}  
	});
	
 jQuery("#time").slider({ from: 0, to: 30, step: 1, smooth: true, round: 0, dimension: "&nbsp;days", skin: "blue" });
 jQuery("#tree").slider({ from: 0, to: 80, step: 1, smooth: true, round: 0, dimension: "&nbsp;tree", skin: "blue" });
	
});


///////////////////////////////
//    используемые функции   //
///////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// пересчеты
var SEQ = {};
SEQ.SEQUENCE = new Array(1,3,2,0,0,5,1,0,3,4,0,0,5,0,1,0,6,0,4,5);
SEQ.sumSeq = sumArrayMembers(SEQ.SEQUENCE);
SEQ.countOfTree = SEQ.SEQUENCE.length;


gemsToTime = function(gemReq){
	
	var arrVal = [Math.floor(parseInt(gemReq)/40*7), Math.floor(parseInt(gemReq)/46*10.5)];
//	console.log("результат расчетов gemsToTime" + arrVal);
	return arrVal;
}

gemsToTree = function(gemReq){
	var gFull = Math.floor(gemReq/SEQ.sumSeq);
	var gRemainder = gemReq%SEQ.sumSeq;
//console.log("число: " + gemReq + "Количество последовательностей: " + gFull + ", остаток: " + gRemainder);
	var a = minArrayMembers(gRemainder, SEQ.SEQUENCE);
	var a1 = gFull*SEQ.countOfTree + a[0] || 0;
	var a2 = gFull*SEQ.countOfTree + a[1] || (gFull+1)*SEQ.countOfTree || 0;
	var arrVal = [a1, a2];
console.log("результат расчетов gemsToTree" + arrVal);
	return arrVal;
}

timeToTree = function(days){
	return Math.floor(days/10.5*46);
}

// находит минимальную и максимальную сумму заданного количества последовательных членов числового массива 
function minmaxSumPartArray(partLength, arrayName){ 
	var res = [sumArrayMembers(arrayName),0];
	workingSequence = arrayName.concat(arrayName);
	for (var i=0; i<arrayName.length; i++) {
		var s = workingSequence.slice(i,i+partLength);
		res[0] = min(sumArrayMembers(s),res[0]);
		res[1] = max(sumArrayMembers(s),res[1]);
	}
	return res;
}

// находит минимальное число последовательных членов числового массива, составляющих нужную сумму
function minArrayMembers(sum, arrayName){
	var res = [arrayName.length, 0];
	if (sum < sumArrayMembers(arrayName)){
		workingSequence = arrayName.concat(arrayName);
		for (var i=0; i<arrayName.length; i++) {
			var j = rr = 0;
//			console.log("сравниваем с: " + sum + ", старт от: " + i + "позиции")
			while(rr < sum){
				rr += workingSequence[i+j]; 
//				console.log("j:" + j + "последовательность: " + workingSequence[i+j] + ", сумма: " + rr + "сравниваем с: " + sum);
				j++;
			}
		res[0] = min(res[0], j);	
		res[1] = max(res[1], j);	
//		console.log("промежуточный результат minArrayMembers: " + res);

		}
	} else {
		alert('ой, что-то не так... Запрашивается слишком большая сумма!');
		res = [0, arrayName.length];
	}
	console.log("результат minArrayMembers: " + res);
	return res;
}

///////////////////////////////////////////////////////////////////////////////////
// перерисовывает элемент типа Block, вписывая его внутри внешнего блока outerElem

reDraw = function(outerElem, block){ 
		maxSize = block.maxSize;
		minSize = block.minSize;
		minMargin = block.minMargin;
	//  проверка
		if(maxSize == undefined || maxSize == 'none'){ var maxSize = [screen.availWidth, screen.availHeight] } ;
		if (minSize[0] > maxSize[0]) maxSize[0] = minSize[0];
		if (minSize[1] > maxSize[1]) maxSize[1] = minSize[1];

	//  ширина
		if (maxSize[0] < (outerElem.innerWidth - minMargin[1] - minMargin[3])) {
				var m = (outerElem.innerWidth - maxSize[0])/2;
		} else if (minSize[0] < (outerElem.innerWidth - minMargin[1] - minMargin[3]) && (outerElem.innerWidth - minMargin[1] - minMargin[3]) < maxSize[0] ){
				var m = minMargin[3];
		} else if ((outerElem.innerWidth - minMargin[1] - minMargin[3]) < minSize[0] && minSize[0] < outerElem.innerWidth){
				var m = (outerElem.innerWidth - minSize[0])/2;
		} else { var m = 0};
		 s = max((outerElem.innerWidth - 2*m), minSize[0]);
		 s = s + 'px';
		 if(m > 0){ 
			 block.elem.style.scrollWidth = s;
			 block.elem.style.width = 'auto';
		 } else {
			 block.elem.style.width = minSize[0];		 
		 };
		 m = m + 'px';
		 block.elem.style.marginLeft = m;
		 block.elem.style.marginRight = m;

	//  высота	
		if (minSize[1] < (outerElem.innerWidth - minMargin[0] - minMargin[2])){
			var t = minMargin[0];
		} else if ((outerElem.innerWidth - minMargin[0] - minMargin[2]) < minSize[1] && minSize[1] < outerElem.innerWidth){
			var t = (outerElem.innerWidth - minSize[1] + minMargin[0] + minMargin[2])/2;
		};
	//	 s = outerElem.innerHeight - 2*t;
		 t = t + 'px';
	//	 s = s + 'px';
		 block.elem.style.marginTop = t;
}

  