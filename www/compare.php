<?php
require_once './baza.php'; 
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Fun-script для игры Clash of Clans</title>
    <meta name="Author" content="Elena Frolova">
    <meta name="Description" content="Калькулятор для рассчета цены армии в игре Clash of Clans. Удачной игры!">
    <meta name="Keywords" content="Clash of Clans, игра, армия, расчет, калькулятор">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Cache-Control" content="no-cache">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="./css/style.css">

<script type="text/javascript">
	var set = <?php echo $script; ?> 
	var NUMPOSITION = <?php echo $NUMPOSITION; ?>;
</script>
<script type="text/javascript" src="./script/jquery-2.1.1.min.js"></script>
<!--<script type="text/javascript" src="./script/objects.js"></script>-->
<script type="text/javascript" src="./script/position.js"></script>
</head>
<body>
    <header><div id="logo"><img src="./img/logo-fun.png"/></div></header>
    <nav></nav>
	<div class="maindiv shadow">
		<div class="container">
			<div id="armychoice">
				<?php
				for($i=0; $i<$NUMPOSITION; $i++){
					echo "<div id='a" . $army[$i]['key'] . "' class='itemtochoose'><img src='" . $army[$i]['img'] . "'/>
									</div>";
				}
			?>
			</div>
		</div>
	</div>
	<div class = "resultdiv">
		<div id="resultCost" class="result"><span>Цена войска:</span><img src="./img/el-drop.png"/></div>
		<div id="resultSpace" class="result"><span>Занимает места:</span></div>
		<div id="buttonsleft">
		<!--	<div>Параметры юнитов:</div>-->
			<input type="submit" id="savebutton" value = "сохранить" onclick = "saveLvl()"/><!--Сохранить уровни войск-->
			<input type="submit" id="getbutton" value = "загрузить" onclick = "loadLvl()"/><!--загрузить сохраненные уровни войск-->
<!-- <input type="submit" id="levelbutton" value = "показать уровни войск" onclick = "showLvl()"/><!--Показать массив уровней войск-->

		</div>
		<div id="buttons">
			<input type="submit" id="resetbutton" value = "обнулить численность" onclick = "resetNum()"/><!--Обнулить>-->
			<input type="submit" id="myarmybutton" value = "показать мои войска" onclick = "showArmy(1)"/><!--Открыть войска с уровнем большим, чем n-->
			<input type="submit" id="allarmybutton" value = "открыть все войска" onclick = "showArmy(0)"/><!--Открыть войска с уровнем большим, чем n-->
			<input type="submit" id="hidebutton" value = "спрятать всех" onclick = "hideArmy()"/><!--Открыть войска с уровнем большим, чем n-->
		</div>
		
	</div>
	<div id = "signdiv">
		<div id="sign">Ваша Elic</div>
		
		<div id="metr">
			<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=25956385&amp;from=informer"
target="_blank" rel="nofollow"><img src="//bs.yandex.ru/informer/25956385/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" onclick="try{Ya.Metrika.informer({i:this,id:25956385,lang:'ru'});return false}catch(e){}"/></a> 
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter25956385 = new Ya.Metrika({id:25956385,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/25956385" style="position:absolute; left:-9999px;" alt="" /></div></noscript> 
<!-- /Yandex.Metrika counter -->
		</div>
	</div>
    <footer></footer>
</body>
</html>