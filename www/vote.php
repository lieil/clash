<?php
$army  = array(
			array(	'name' => 'barbarian',
					'img' => './img/barbarian.png',
					'dps' => array (8,11,14,18,23,26),
					'xp' => array (45,54,65,78,95,110),
					'cost' => array (25,40,60,80,100,150),
					'space' => 1,
				),
			);
echo json_encode($army);