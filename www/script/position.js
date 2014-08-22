var set = []; //набор свойств юнитов
var maxlvl = []; // максимальные уровни войск
var lvl = []; //уровни войск посетителя
var NUMPOSITION = 20; // число типов юнитов в игре
var	newLvl = 0; //переменная для установки нового уровня юнита
window.onbeforeunload = saveLvl;

// jQuery 
$(document).ready(function(){
//получаем данные о войске с сервера 
// все эти данные будут загружаться через php при динамическом формировании страницы, и тогда не нужны будут запаздывания
	$.get("baza.php",  function(data){
//		$("#resultCost").html(data);
		set = $.parseJSON(data);
		NUMPOSITION = set.length;
		for(var i=0; i<NUMPOSITION; i++){
				if(set[i].cost){
					maxlvl[i] = set[i].cost.length;
				} else if (set[i].costd){
					maxlvl[i] = set[i].costd.length;
				} else {
					alert("Ой, уровень какой-то непонятный...");
				}
		}
	});

//получаем данные о индивидуальных настройках с сервера
//	lvl = [3,4,3,4,4,4,4,2,3,0,1,1,0,0,0,3,4,3,0,0]; //пока так, но как раз здесь должно использоваться jquery
	loadLvl();
	if(lvl.length != NUMPOSITION){
		alert("Ошибка данных!" + lvl.length + ", " + NUMPOSITION);
		lvl = [];
		}
/*	$.get("member.php", function(data){
		
	});*/

//устанавливается значение атрибутов для полей ввода численности
	$(".num").attr({"value":"", "type":"text", "size":"7", "step":"1"});
	resetNum();
	$(".num").change(function(){
		if (!isNumeric($(this).val())){ 
			alert("Введите число воинов данного типа. Цифрами, пожалуйста!");
			$(this).val("");
		}
		countArmy();
	});
//устанавливаем звездочки уровня
	setTimeout(function(){
		var strLvl = "";
		if (maxlvl.length == NUMPOSITION){
			for(var i = 1; i < NUMPOSITION+1; i++){
				strLvl = "";
				for(var k = maxlvl[i-1]; k >= 0; k--){
					if(k > lvl[i-1]){
						strLvl = "<div class='star l" + k + "'>" + strLvl + "</div>";
					} else {
						strLvl = "<div class='star l" + k + " activ'>" + strLvl + "</div>";
					}
				}
			$("#s"+i).children(".lvl").html(strLvl);
			}
		} else { 
			alert ("ошибка загрузки данных об уровне войск");
		}
	// при нажатии звездочки устанавливается новый уровень юнита 
		$(".star").click(function(){
		var elem = this;
			var key = parseInt($(elem).closest(".iteminset").attr("id").substr(1,2))-1;
			var l = parseInt(elem.className.match(/(?=\s?)\d(?=\s?)/));
			if (newLvl == 0){
				$(elem).find(".star").removeClass("activ");
			};
			newLvl = max(l, newLvl);
			$(this).addClass("activ");
			if (l == 0) {
				lvl[key] = newLvl;
				newLvl = 0;
			};
		});	
	},1000);


// при нажатии крестика на верхней картинке картинка прячется 
// и выполняются другие скрытые действия, удаляющие юнит из активного набора
    $(".cross").click(function(){
        $(this.parentNode).animate({ opacity: "hide" }, "slow", hideItemBlock(this.parentNode));
		countArmy();
    });
	
// при нажатии кнопки на нижней панели открывается картинка на верхней
// и прочие действия, добавляющие юнит в активный набор.
	$(".itemtochoose").click(function(){
		showItemBlock(this);
	});
	
// ставим подпись
	$("#sign").html('Жду ваших замечаний и предложений по адресу:<br/><a href="mailto:clash-of-clans-fans@mail.ru?subject=Вопрос%20по%20сайту">clash-of-clans-fans@mail.ru</a>');
	
});



// пересчитываем цену войска и выводим результат в нужные клеточки
function countArmy(){
	var result = 0;
	var resultd = 0;
	var space = 0;
	var k,l;
	$(".num").each(function(){
		k = parseInt(this.parentNode.id.substr(1,2))-1;
		l = lvl[k]-1;
		if(l >= 0){
			if(set[k].cost !== undefined && set[k].cost != null){
				result += (set[k].cost[l])*($(this).val());
			} else if (set[k].costd){
				resultd += (set[k].costd[l])*($(this).val());
			} else {
				alert("Ой, цены какие-то странные...");
			}
		}
		space += (set[k].space)*($(this).val());
	});
		
	$("#resultCost").html("<span>Цена войска: </span> " + result + " <img src='./img/el-drop.png'/><br/><span>Цена темного войска: </span> " + resultd + " <img src='./img/dark-drop.png'/>");
	$("#resultSpace").html("<span>Занимает места: </span> " + space);
}

// показать блок юнита
function showItemBlock(elem){
	var key = "s" + elem.id.substr(1,2);
	var el = document.getElementById(key);
	el.className = el.className.replace(" closed", " ") + ' open';
	numElem = $(el).find(".num");
	numElem.focus();
}
// спрятать блок юнита
function hideItemBlock(elem){
	elem.className = elem.className.replace(" open", " ") + " closed";
	$(elem).children(".num").val("");
}
// обнуляем численность всех войск не пряча их блоки
function resetNum(){
	$(".num").each(function(){
		this.value = "";
	});
	$("#resultCost").html("<span>Цена войска: </span> 0 <img src='./img/el-drop.png'/><br/><span>Цена темного войска: </span> 0 <img src='./img/dark-drop.png'/>");
	$("#resultSpace").html("<span>Занимает места: </span> 0");
}

// показать блоки юнитов начиная с уровня limit
function showArmy(limit){
	var key=0;
	$(".iteminset").each(function(){
	key = parseInt(this.id.substr(1,2))-1;
	if(lvl[key]>(limit-1)){
		showItemBlock(this);
	} else {
		hideItemBlock(this);
	}
	});
}
// спрятать все блоки юнитов
function hideArmy(){
	$(".iteminset").each(function(){
		hideItemBlock(this);
	});
}

function saveLvl(){
	var str = "";
	for(i=0; i<NUMPOSITION; i++){
	
		if(!isNumeric(lvl[i])|| lvl[i]<0 || lvl[i]>10){
			lvl[i] = 0;
		}
		str += lvl[i];
	}
	setCookie("levels", str, {expires: 7});
	window.onbeforeunload = "";

//	alert(document.cookie);
}

function loadLvl(){
	var str = getCookie("levels");
	if (str == undefined || str.length != NUMPOSITION){
		alert("Сохраните свой набор войск");
	} else {		
		lvl = str.split("");
	};
	
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


// тестовая функция - показывает текущие уровни	 войск
function showLvl(){
	alert(lvl);
}