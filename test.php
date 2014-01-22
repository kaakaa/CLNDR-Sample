<?php
	$param = "{\"date\":\"2014-01-01\",\"title\":\"TEST ENTRY\",\"URL\":\"http://example.com\"}"; // $_GET['param'];
	$year = "2014"; // $_GET['year'];
	$month = "sample"; // $_GET['month'];
	$root = "events";

	function get_json_path(){
		$arg_num = func_num_args();
		$args_list = func_get_args();
		$path = ".";
		for($i=0; $i<$arg_num; $i++){
 			$path = rtrim($path, '\\/') . DIRECTORY_SEPARATOR . $args_list[$i];
		}
		return $path. ".json";
	}

	function write($path, $content = ""){
		if(is_writable($path)) {
			if(!$fp = fopen($path, "a")) {
				echo "$path could not open!";
				exit;
			}
			if(fwrite($fp, $content) === false){
				echo "$path could not write!";
				exit;
			}
			fclose($fp);
		} else {
			echo "$path cannot write";
		}
	}

	header("content-type: application/x-javascript");
 	$file_path = get_json_path($root, $year, $month);
	write($file_path, ",". PHP_EOL. $param);
?>
