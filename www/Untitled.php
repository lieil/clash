<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Документ без названия</title>
</head>

<body>

<?php 
$connection = mysql_connect("127.0.0.1", "root") 
                   or exit("Ошибка соединения с сервером базы данных!");

     //Выбираем базу данных
     $db = mysql_select_db("cherepashka", $connection) 
           or exit("Ошибка соединения с базой данных!");
		   
	  mysql_query("INSERT INTO treeappear VALUES (NOW())" );
		   
		    //Осуществляем выборку
     $result = mysql_query("SELECT * FROM treeappear");
	 
	
	
	
		 
	 
	      //Формируем HTML таблицу с результатами
     if ($result)
     {
      $rows=mysql_num_rows($result); 
      $cols=mysql_num_fields($result);

      echo "<b>Результаты:</b> загружено ".$rows." записей<br/>";      
      echo "<table><tr>";

      //Формируем заголовок
      for($i=0; $i<$cols; $i++)
      {
        $field = mysql_field_name($result, $i);
        echo "<th>$field</th>";
      }

      echo "</tr>";

      //Формируем содержимое таблицы
      for($i=0; $i<$rows; $i++)
      {
        echo "<tr>";

        for($j=0; $j<$cols; $j++)
        {
          $field=mysql_result($result, $i, $j);
          echo "<td>$field</td>";
        }

        echo "</tr>";
      }

      echo "</table>";
     }
     else {echo "<b>Ошибка:</b> ".mysql_error()."<br/>";}

     //Закрываем соединение
     mysql_close($connection);  
	 
	 
	 
	 
	 
?>

</body>
</html>