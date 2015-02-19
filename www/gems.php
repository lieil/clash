<?php
require_once './baza.php'; 
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Fun-script для игры Clash of Clans</title>
    <meta name="Author" content="Elena Frolova">
    <meta name="Description" content="Калькулятор для рассчета количества кристаллов(гемов) в игре Clash of Clans. Удачной игры!">
    <meta name="Keywords" content="Clash of Clans, игра, армия, кристаллы, гемы, препятствия, деревья, расчет, калькулятор">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Cache-Control" content="no-cache">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="./css/style .css">


    <link rel="stylesheet" type="text/css" href="./css/gems.css">
    
	<link rel="stylesheet" href="css/jslider.css" type="text/css">
	<link rel="stylesheet" href="css/jslider.blue.css" type="text/css">
	
<script type="text/javascript" src="./script/jquery-2.1.1.min.js"></script>

	<script type="text/javascript" src="script/jshashtable-2.1_src.js"></script>
	<script type="text/javascript" src="script/jquery.numberformatter-1.2.3.js"></script>
	<script type="text/javascript" src="script/tmpl.js"></script>
	<script type="text/javascript" src="script/jquery.dependClass-0.1.js"></script>
	<script type="text/javascript" src="script/draggable-0.1.js"></script>
	<script type="text/javascript" src="script/jquery.slider.js"></script>

<script type="text/javascript" src="./script/add.js"></script>
<script type="text/javascript" src="./script/gems.js"></script>
</head>
<body>
    <header><div id="logo"><img src="./img/logo-fun.png"/><a class="nav"  href="./gems.php"><img src="./img/gemscalc-button.png" title = "Оценка времени появления препятствий"/></a><a class="nav"  href="./about.php"><img src="./img/myclan-button.png" title = "Мой край&nbsp;&mdash; Россия"/></a><a class="nav" href="./index.php"><img src="./img/troopscalc-button.png" title = "Калькулятор стоимости войск"/></a></div></header>
    <nav></nav>
	<div id="maindiv" class="shadow">
	  <h1>Ориентировочное время получения кристаллов (gems) за&nbsp;счет уборки территории деревни от&nbsp;препятствий</h1>
		<div class="outbar">
			<input id="gems" type="slider" name="gems" value="80" /><div class = "label"><img src="./img/gem.png"> Кристаллы </div>
		</div>
<!--
		<div class="outbar">
			<input id="time" type="slider" name="time" value="20;20" /><div class = "label"><img src="./img/clock.png"><br/>Время</div>
		</div>
-->
		<div class="outbar">
			<input id="tree" type="slider" name="tree" value="40;40" /><div class = "label"><img src="./img/tree.png">Препятствия</div>
		</div>
		 
<!--		<div class="outbar">
			<div id="gems"><div class = "bar"></div><div class = "tap"><input class = 'num' value='20'/></div></div><div class = "label"><img src="./img/gem.png"> Кристаллы </div>
		</div>
		<div class="outbar"><div id="time"><div class="fill"><div class = "start"><div class = "num">2</div></div><div class = "bar"></div><div class = "end"><div class = "num">18</div></div></div></div><div class = "label"><img src="./img/clock.png"><br/>Время</div></div>
		<div class="outbar"><div id="tree"><div class="fill"><div class = "start"><div class = "num">4</div></div><div class = "bar"></div><div class = "end"><div class = "num">36</div></div></div></div><div class = "label"><img src="./img/tree.png">Препятствия</div></div>
-->	
	</div>
	
	<div id = "signdiv">
		<div id="sign">Ваша Elic</div>
		
<!-- metrika is here -->


	</div>
    <footer></footer>
</body>
</html>