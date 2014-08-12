var set = [];
var maxlvl = [];
var lvl = [3,4,3,4,4,4,4,2,2,0,1,1,0,0,0,3,4,3,0,0];
// jQuery 


$(document).ready(function(){
//Обнуляется сумма
	$.get("baza.php",  function(data){
		$("#resultCost").html(data);
		set = $.parseJSON(data);
		for(var i=0; i<lvl.length; i++){
				if(set[i].cost){
					maxlvl[i] = set[i].cost.length;
				} else if (set[i].costd){
					maxlvl[i] = set[i].costd.length;
				} else {
					alert("Ой, уровень какой-то непонятный...");
				}
		}
		alert(maxlvl);
	});
	//устанавливается значение аттрибутов для полей ввода
	$(".num").attr({"value":"0", "type":"text", "size":"7", "step":"1"});
	resetNum();
	$(".num").change(function(){
		if (!isNumeric($(this).val())){ 
			alert("Введите число воинов данного типа. Цифрами, пожалуйста!");
			$(this).val(0);
		}
		countArmy();
	});
	
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

});

	function countArmy(){
		var result = 0;
		var resultd = 0;
		var space = 0;
		var k,l;
		$(".num").each(function(){
			k = parseInt(this.parentNode.id.substr(1,2))-1;
//			alert("Считаем цену юнита №" + k);
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
	
	
	function showItemBlock(elem){
		var key = "s" + elem.id.substr(1,2);
		var elem = document.getElementById(key);
		elem.className = elem.className.replace(" closed", " ") + ' open';
	}

	function hideItemBlock(elem){
		elem.className = elem.className.replace(" open", " ") + " closed";
		$(elem).children(".num").val(0);
	}

	function resetNum(){
		$(".num").each(function(){
			this.value = 0;
		});
		countArmy();
	}

// вспомогательные функции.
// проверка на число
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
