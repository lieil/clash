<?php
require_once './maketvars.php'; 
require_once './data.php'; 
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<?php echo $sitemeta ?>
<title>График :)</title>
</head>

<body>

<?php echo $siteheader ?>
<div class="maindiv shadow" style= "overflow: auto; width:auto; padding:10px">
 <!--  <div><?php 
   	$set = getData(1);
      for ($i = 1; $i <= count($set); $i++){
        echo $set[$i]." ";
      } 
   ?></div>-->

    <canvas height='600' width='1000' id='plotArea'>Обновите браузер</canvas>
            <script>
				var set = <?php echo getData(1) ?>;
				console.log(set[set.length-1]);
								console.log(set[set.length]);
	for (j=0; j<set.length; j++){ 
		console.log(set[j]);
		set[j] = Date.parse(set[j].replace(/(\d+)\.(\d+)\b/, '2014-$2-$1'));
		console.log('new' + set[j]);
		};
		
                var plot = document.getElementById("plotArea"),
                ctx  = plot.getContext('2d');
			
				dY = plot.heigth/set.length;
				dX = plot.wigth/parseTime(set[set.length-1])-parseTime(set[0])-
				
			ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, plot.height);
            ctx.lineTo(1000, plot.height);
			ctx.strokeStyle = "rgb(0,0,0)";			
			ctx.stroke();
			
			ctx.beginPath();
			 ctx.moveTo(0,plotheight);
			 ctx.lineTo();

            </script>
<script type="text/javascript">

</script>           

</div>
</body>
</html>