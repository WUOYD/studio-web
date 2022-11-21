<?php include 'functions.php';

cors();

@apache_setenv('no-gzip', 1);
@ini_set('zlib.output_compression', 0);
@ini_set('implicit_flush', 1);
set_time_limit(60);

if(!isset($_POST["ajax"])){
	$_POST =  json_decode(file_get_contents('php://input'), true);
}

if(isset($_POST["action"]) && !empty($_POST["action"])) {
	$action = $_POST["action"];
	if($action == "traceIP"){
		if(isset($_POST["ip"]) && !empty($_POST["ip"])){
			$ip = $_POST["ip"];
			traceIP($ip);
		}
	}else if($action == "checkIP"){
		if(isset($_POST["ip"]) && !empty($_POST["ip"])){
			$ip = $_POST["ip"];
			checkIP($ip);
		}
	}else if($action === "insertDB") {
		if(isset($_POST["data"]) && !empty($_POST["data"])){
			$data = $_POST["data"];
			insertDB($data);
		}
	}
}

function is_valid_domain_name($domain_name){
    return (preg_match("/^([a-z\d](-*[a-z\d])*)(\.([a-z\d](-*[a-z\d])*))*$/i", $domain_name) //valid chars check
            && preg_match("/^.{1,253}$/", $domain_name) //overall length check
            && preg_match("/^[^\.]{1,63}(\.[^\.]{1,63})*$/", $domain_name)   ); //length of each label
}

function is_valid_ip_address($ip){
    return preg_match("/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/", $ip); 
}

function traceIP($ip){
	if (is_valid_domain_name($ip) || is_valid_ip_address($ip)) {
		for ($i = 0; $i < ob_get_level(); $i++) { 
			ob_end_flush(); 
		}
		ob_implicit_flush(1);
		$first = true;
		$play = true;

		$proc = popen("tracert ".$ip, 'r');
		while (!feof($proc) && $play) {
			$o = fread($proc, 4096);
			echo $o;
			/*if(str_contains($o, 'Maximum execution time of')){
				echo "stop";
				ob_end_flush();
				$play = false;
			}*/
			if (preg_match('/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/', $o, $ip_match)) {
				if(!$first){
					echo "/".$ip_match[0];
				}
				$first = false;
			}
		}
	}else{
		echo "invalid domain";
	}
} 

function checkIP($ip){
	$r = [];
	include 'dbConfig.php'; 
	$data = "SELECT * FROM locations WHERE query='".$ip."'";
    $data = $conn->query($data);
    if ($data->num_rows > 0) {
        while($data_row = $data->fetch_assoc()){
        	$r[] = $data_row;
        }
        echo json_encode($r[0]);
    }
} 

function insertDB($data){
	include 'dbConfig.php';
	$insert = "INSERT INTO locations (`id`, `as`, `city`, `country`, `countryCode`, `isp`, `lat`, `lon`, `org`, `query`, `regionName`, `timezone`, `zip`) VALUES (
		'".NULL."',
		'".dbSanitize($data['as'])."',
		'".dbSanitize($data['city'])."',
		'".dbSanitize($data['country'])."',
		'".dbSanitize($data['countryCode'])."',
		'".dbSanitize($data['isp'])."',
		".dbSanitize($data['lat']).",
		".dbSanitize($data['lon']).",
		'".dbSanitize($data['org'])."',
		'".dbSanitize($data['query'])."',
		'".dbSanitize($data['regionName'])."',
		'".dbSanitize($data['timezone'])."',
		'".dbSanitize($data['zip'])."'
	)";
	if ($conn->query($insert) === TRUE) {
		echo "Record updated successfully";
	}else{
		echo "Error updating record: " . $mysqli->error; 
	}
} ?>