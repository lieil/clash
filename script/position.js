function getElementsByClass(searchClass, node, tag) {
    var classElements = new Array();
     
    if (node == null) node = document;
    if (tag == null) tag = '*';
     
    var els = node.getElementsByTagName(tag);
    var pattern = new RegExp('(^|\\\\s)'+searchClass+'(\\\\s|$)');
     
    for (var i = 0, j = 0; i < els.length; i++)
    if (pattern.test(els[i].className)) {
        classElements[j] = els[i];
        j++;
    }
    return classElements;
}

function setOnclickResponse(){
	var node = document.getElementById('armychoice');
	var allElems = getElementsByClass('itemtochoose', node, 'div');
	for(var i=0; i<allElems.length; i++) {
		allElems[i].onclick  = function(){
		selectItem(this.id);
		};
	}
}

function selectItem(id){
	showItemBlock(id);
	addItemInSet();
}

function unSelectItem(id){
	hideItemBlock(id);
	removeItemInSet();
}

function showItemBlock(id){
	var sd = "s" + id.substr(1,2);
	var elem = document.getElementById(sd);
	elem.className = elem.className.replace(" closed", " ") + ' open';
}

function hideItemBlock(id){
	var sd = "s" + id.substr(1,2);
	var elem = document.getElementById(sd);
	elem.className = elem.className.replace(" open", " ") + " closed";
}

function addItemInSet(key){
;
}

function removeItemInSet(key){
;
}