﻿<?php
$treeappear = array (
"5.12 19:00",
"6.12 00:47",
"6.12 11:48",
"11.12 7:33",
"11.12 16:44",
"12.12 7:20",
"13.12 7:58",
"14.12 8:20",
"15.12 16:53",
"15.12 7:56",
"16.12 8:43",
"16.12 13:46",
"17.12 19:46",
"18.12 7:59",
"18.12 8:13",
"18.12 13:46",
"19.12 8:15",
"19.12 8:47",
"19.12 23:21",
"20.12 8:11",
"20.12 18:15 0",
"21.12 7:40",
"21.12 16:37",
"22.12 0:49",
"22.12 18:54",
"23.12 7:47",
"23.12 7:47",
"24.12 00:11",
"24.12 7:01",
"24.12 23:36",
"25.12 13:02",
"25.12 13:02 5",
"26.12 4:17 1",
"26.12 16:29 3",
"26.12 21:39 2",
"27.12 7:33  0",
"27.12 13:28  0",
"28.12 0:13 5",
"28.12 22:11 1",
"29.12 8:48 0",
"29.12 17:04 3",
"30.12 0:48 4",
"30.12 11:02 0",
"30.12 17:25 0",
"31.12 6:50  5",
"31.12 14:04 0",
"1.01 2:00 1",
"1.01 23:16 0",
"1.01 23:16",
"2.01 6:57",
"2.01 11:37",
"2.01 21:17",
"3.01 9:00",
"3.01 21:41",
"3.01 21.41",
"4.01 9:38",
"4.01 21:28",
"5.01 10:28",


);

$gemboxappear = array (
"28.12 22:11",
"11.01 0:11",
);

$gemboxappear2 = "11/01/2015 1:03";
 
$gembox = "aaa";

function getData($n){
  global $gemboxappear;
  global $treeappear;
  if ($n == 1) {$d = $treeappear;}
    else  {$d = $gemboxappear;}
  return json_encode($d);
}

	
?>