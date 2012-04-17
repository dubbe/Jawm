var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.wm) DUBBE.jawm.wm = {} ;

DUBBE.jawm.wm.background = function(bgImg, width, height) {
  	// console.log("Laddar in bakgrunden") ;
	 
  	$("<div>").attr("id", "background").appendTo("body").center() ;
	$("<img>").attr("src", "appPics/logo.png").addClass("logo").appendTo("#background") ;
  
  	this.getWidth = function(){
		return width;
	}
	this.getHeight = function(){
		return height;
	}
	this.setBackground = function(_img){
		$("#background").css({"background": "url("+_img+")"}) ;
	}
  
}
