<?php function cors() {
    
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
    
    echo "You have CORS!";
}
cors();

@apache_setenv('no-gzip', 1);
@ini_set('zlib.output_compression', 0);
@ini_set('implicit_flush', 1);

include 'functions.php';
/*include 'dbConfig.php';*/


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

function traceIP($ip){
	for ($i = 0; $i < ob_get_level(); $i++) { 
		ob_end_flush(); 
	}
	ob_implicit_flush(1);
	$first = true;

	$proc = popen("tracert ".$ip, 'r');
		while (!feof($proc)) {
			$o = fread($proc, 4096);
			if (preg_match('/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/', $o, $ip_match)) {
				if(!$first){
					echo "/".$ip_match[0];
				}
				$first = false;
			}
			flush();
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