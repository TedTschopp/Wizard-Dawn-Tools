<?php

$qry = mysqli_query( $connection, "SELECT * FROM menus WHERE mn_inactive=0 AND mn_group='Genres' ORDER BY mn_name");
	echo "<p style='font-size:" . round(30 * $font_size_adjust_text) . "px; margin-top: 0; margin-bottom: 0;'>Choose a Genre<p>";
while ($ary=mysqli_fetch_assoc($qry)) :
	echo "<p style='margin-top: " . $menu_spacing . "px; margin-bottom: " . $menu_spacing . "px;'><a href='" . $ary['mn_link'] . "'>" . $ary['mn_name'] . "</a></p>";
endwhile;

	echo "<br>";
$qry = mysqli_query( $connection, "SELECT * FROM menus WHERE mn_inactive=0 AND mn_group='Free Game' ORDER BY mn_name");
	echo "<p style='font-size:" . round(30 * $font_size_adjust_text) . "px; margin-top: 0; margin-bottom: 0;'>Wizardawn Games<p>";
while ($ary=mysqli_fetch_assoc($qry)) :
	echo "<p style='margin-top: " . $menu_spacing . "px; margin-bottom: " . $menu_spacing . "px;'><a href='" . $ary['mn_link'] . "'>" . $ary['mn_name'] . "</a></p>";
endwhile;

?>