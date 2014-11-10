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

		
// ставим подпись
		$("#sign").html('Жду ваши замечания и предложения по адресу:<br/><a href="mailto:clash-of-clans-fans@mail.ru?subject=Вопрос%20по%20сайту">clash-of-clans-fans@mail.ru</a>');
		
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
		
	 jQuery("#gems").slider({ from: 0, to: 400, step: 1, smooth: true, round: 0, dimension: "&nbsp;gems", skin: "blue", 
	 callback: function( value ){ 
		timeCounter.setNewValues(gemsToTime($("#gems").slider("value")));
		console.log("значения в объекте timeCounter:" + timeCounter.startValue + " / " + timeCounter.endValue);
		jQuery("#time").slider("value", timeCounter.startValue, timeCounter.endValue);
		console.log("значения в слайдете time:" + jQuery("#time").slider("value"));
		treeCounter.setNewValues(gemsToTree($("#gems").slider("value")));
		jQuery("#tree").slider("value", treeCounter.startValue, treeCounter.endValue);
		}  
	});
	
 jQuery("#time").slider({ from: 0, to: 100, step: 1, smooth: true, round: 0, dimension: "&nbsp;days", skin: "blue" });
 jQuery("#tree").slider({ from: 0, to: 300, step: 1, smooth: true, round: 0, dimension: "&nbsp;tree", skin: "blue" });
	
});


///////////////////////////////
//    используемые функции   //
///////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
// пересчеты
SEQUENCE = [1,3,2,0,0,5,1,0,3,4,0,0,5,0,1,0,6,0,4,5];
sumSeq = sumArrayMembers(SEQUENCE);
workingSequence = SEQUENCE.concat(SEQUENCE);

gemsToTime = function(gemReq){
	var rFull = Math.floor(gemReq/40);
	var rRemnant = gemReq%40;
	console.log("Количество последовательностей:" + rFull + ", " + rRemnant);
	var arrVal = [parseInt(gemReq)/40*7, parseInt(gemReq)/46*10.5];
	console.log("результат расчетов gemsToTime" + arrVal);
	return arrVal;
}

gemsToTree = function(gemReq){
	var arrVal = [parseInt(gemReq)/40*7, parseInt(gemReq)/46*10.5];
	console.log("результат расчетов gemsToTmie" + arrVal);
	return arrVal;
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

  