<?php
// 文件代理解决前端ajax请求跨域问题
	$url = $_GET['url'];
	$data = file_get_contents($url);
	echo $data;
?>