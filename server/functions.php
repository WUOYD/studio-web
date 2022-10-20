<?php function dump( ...$variables ) {
	foreach ( $variables as $variable ) {
		echo gettype( $variable ) . '<br>';
		echo '<pre>';
			print_r( $variable );
		echo '</pre>';
	}
}

function dbSanitize($string) {
    return addslashes($string);
} ?>