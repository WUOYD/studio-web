<?php
	// local
	$user = 'root';
	$password = '';
	$dbname = 'ip_locations';
	$server = 'localhost';

	// live
	/*$user = 'sasurani_ipdb';
	$password = 'zT?Pp1FvKSJ!N!LhWMUi';
	$dbname = 'sasurani_iplocations';
	$server = 'sasurani.mysql.db.internal';*/
	
	
	$conn = new mysqli($server, $user,$password, $dbname) or die(mysql_error()); // Connect to database server(localhost) with username and password.
	
	/*if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
	} 
	if ($conn->ping()) {
		printf ("Our connection is ok!\n"); 
	} else {
		printf ("Error: %s\n", $conn->error); 
	}*/
?>
