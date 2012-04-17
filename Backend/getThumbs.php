<?php

//sleep(2);

	// Sökvög till tumnagelbilderna.
	$path_thumb = "../pics/thumbs/";
	$path_pics = "../pics/";
	
	if ($handle = opendir($path_thumb)) 
	{
		while ((false !== ($file = readdir($handle))) ) 
		{
			if(stripos($file, ".jpg") != 0)
			{
				$sizeThumb = getimagesize($path_thumb.$file);
				$sizeImg = getimagesize($path_pics.$file);				
			
				echo($file.",".$sizeThumb[0].",".$sizeThumb[1].",".$sizeImg[0].",".$sizeImg[1].";");			
			}
		}
		closedir($handle);
	}
?>