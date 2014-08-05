// jQuery 

$(document).ready(function(){
//Обнуляется сумма
SUM = 0;
	//устанавливается значение аттрибутов для полей ввода
	$(".num").attr({"value":"0", "type":"text", "size":"7", "step":"1"});
	$(".num").val(0);
	$(".num").change(function(){
		var t = +$(this).val(); //-нужна проверка на число 
		var s = this.id;
		var r = s + " : " +t;
		alert(r);
	});//countCost(this.id.substr(1,2), this.value));
	
	// при нажатии крестика на верхней картинке картинка прячется 
	// и выполняются другие скрытые действия, определенные функцией unSelectItem(id)
    $(".cross").click(function(){
        $(this.parentNode).animate({ opacity: "hide" }, "slow", hideItemBlock(this.parentNode));
    });
	
	// при нажатии кнопки на нижней панели открывается картинка на верхней
	// и прочие действия, определенные функцией selectItem(key) key - порядковый номера юнита.
	$(".itemtochoose").click(function(){
		selectItem(this);
	});

});


function selectItem(key){
	showItemBlock(key);
	addItemInSet();
}

function unSelectItem(elem){
	hideItemBlock(elem);
	removeItemInSet();
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

function addItemInSet(key){
;
}

function removeItemInSet(key){
;
}

function countCost(key,val){
	alert(key);
}
