var RandomGenerator = {
	
	/*
		Denna metod tar antalet rader och columner som inparameter.
		
		Metoden returnerar en array innehållandes utslumpade tal mellan 1 och (rows*cols)/2. Varje tal representeras två
		gånger och motsvarar således en spelbricka. 
		
		I en 4*4 matris kan Arrayen t.ex. se ut så här:
		[1,2,6,8,6,2,5,3,1,3,7,5,8,4,4,7]
		
		I en 2*4 matris kan Arrayen t.ex. se ut så här:				
		[3,4,4,1,2,1,2,3]
	*/
	
	getPictureArray: function(rows, cols)
	{
		var numberOfImages = rows*cols;
		var maxImageNumber = numberOfImages/2;
	
	   	var imgPlace = [];
	
	   //Utplacering av bilder i Array
	   for(var i=0; i<numberOfImages; i++)
		  imgPlace[i] = 0;
	
		for(var currentImageNumber=1; currentImageNumber<=maxImageNumber; currentImageNumber++)
		{		
			var imageOneOK = false;
			var imageTwoOK = false;
			
			do
			{
				if(imageOneOK == false)
				{
					var randomOne = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
					
					if( imgPlace[randomOne] == 0 )
					{
						imgPlace[randomOne] = currentImageNumber;
						imageOneOK = true;
					}
				}
				
				if(imageTwoOK == false)
				{
					var randomTwo = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
								
					if( imgPlace[randomTwo] == 0 )
					{
						imgPlace[randomTwo] = currentImageNumber;
						imageTwoOK = true;
					}
				}			
			}
			while(imageOneOK == false || imageTwoOK == false);		
		}
		
		return imgPlace;
	}
}
