var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.app) DUBBE.jawm.app = {} ;

DUBBE.jawm.app.imageViewer = function(width, height) {
	
	DUBBE.jawm.wm.window.call(this, "Image Viewer", "image16", 350, 300) ;


 	
}

DUBBE.jawm.app.imageViewer.prototype = new DUBBE.jawm.wm.window ;

DUBBE.jawm.app.imageViewer.prototype.init = function(data){
	
	this.drawWindow() ;
	this.menuOpt() ;

	var that=this  ;
	
	$.ajax({
  		url: 'Backend/getThumbs.php',
		beforeSend: function(data) {
			$(that.getInfo()).html("<img src='appPics/ajax-loader.gif' class='windowBottomTextLoader' /> Laddar...") ;
			that.startTime = new Date().getTime();
		},
  		success: function(data) {
    		that.drawThumbs(data) ;
    		// console.log('Load was performed.');
  		},
		error: function() {
		}
		
		
	});
	
	return(this.getId()) ;
}

DUBBE.jawm.app.imageViewer.prototype.drawThumbs = function(data) {
	//console.log("Data laddad "+data) ;
	
	
	
	var dataArray = data.split(";") ;
	
	/*
	 * Hitta största bredd och höjd
	 */
	var maxWidth = 0 ;
	var maxHeight = 0 ;
	
	for (var i = 0; i < dataArray.length-1; i++) {
		tmpArray = dataArray[i].split(",");
		dataArray[i] = tmpArray ;
		
	 	if(maxWidth < dataArray[i][1]) {
			maxWidth = dataArray[i][1] ;
		}
		
		if(maxHeight < dataArray[i][2]) {
			maxHeight = dataArray[i][2] ;
		}
	}
	
	/*
	 * Rita upp tummnaglarna
	 * 
	 */
	
	
	//console.log(this.content) ;
	for (var i = 0; i < dataArray.length-1 ; i++ ){
		var imgName = dataArray[i][0] ;
		var imgWidth = dataArray[i][1] ;
		var imgHeight = dataArray[i][2] ;
		var imgPrntWidth = dataArray[i][3] ;
		var imgPrntHeight = dataArray[i][4] ;
		
		var that = this ;
		
		var link = $("<a>").attr({
			"href": "#",
			"src": imgName,
			"height": imgPrntHeight,
			"width": imgPrntWidth
			}).appendTo(this.getContent()).addClass("imageViewerThumbLink").click(this.openImage);

		
		var imgContainer = $("<div>").appendTo(link).addClass("imageViewerThumbCont").css({
			"width": maxWidth,
			"height": maxHeight
		}).mouseenter(function(e) {
			var text = "Namn: "+imgName+"<br />Höjd: "+imgPrntHeight+"px<br />Bredd: "+imgPrntWidth+"px" ;
			DUBBE.jawm.wm.tooltip.showTooltip(e, text, imgContainer) ;
		}).mouseleave(function(e) {
			DUBBE.jawm.wm.tooltip.hideTooltip() ;
		}).scroll(function(e) {
			DUBBE.jawm.wm.tooltip.hideTooltip() ;
		}); 
		
		
		
		$("<img>").appendTo(imgContainer).attr("src", "pics/thumbs/"+imgName).addClass("imageViewerThumbImg").css({
			"width": imgWidth,
			"height": imgHeight
		}).center() ;
		
		
	}
	
	var elapsed = new Date().getTime() - this.startTime;

	
	$(that.getInfo()).html(i+1 +" bilder laddade på "+elapsed+"ms.") ;

	

}
DUBBE.jawm.app.imageViewer.prototype.openImage = function(){
	// console.log(this) ;
	var window = new DUBBE.jawm.app.imageSingle(this) ;
	window.init() ;
}
DUBBE.jawm.app.imageViewer.prototype.menuOpt = function(){
	var that=this ;
	var menuArr = [] ;
	menuArr.push([this.closeWindow, "NULL","close.png", "Arkiv", "Stäng"]);
	
	that.drawMenu(menuArr) ;
	
}
