var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.app) DUBBE.jawm.app = {} ;

DUBBE.jawm.app.imageSingle = function(link){
		
			
	
	
		if (parseInt($(link).attr("height")) + 74 > parseInt($("#background").css("height"))) {
			this.winHeight = parseInt($("#background").css("height")) ;
			this.imgHeight = parseInt($("#background").css("height")) - 74 ;
			
			var x =  this.imgHeight / parseInt($(link).attr("height")) ;
			
			//console.log(x+" = "+parseInt($(link).attr("height"))+" / "+this.imgHeight) ;
			
			this.imgWidth = x * parseInt($(link).attr("width")) ;
			
			this.winWidth = this.imgWidth ;
			
		} else {
			this.winHeight = parseInt($(link).attr("height")) + 74 ;
		}
		
	
		if (parseInt($(link).attr("width")) + 10 > parseInt($("#background").css("width"))) {
			this.winWidth = parseInt($("#background").css("width")) ;
		} else {
			if (!this.imgWidth) {
				this.winWidth = parseInt($(link).attr("width"));
			}
		}
		
	
	
	DUBBE.jawm.wm.window.call(this, $(link).attr("src"), "image16", this.winWidth, this.winHeight, "no") ;
	

}

DUBBE.jawm.app.imageSingle.prototype = new DUBBE.jawm.wm.window ;

DUBBE.jawm.app.imageSingle.prototype.init = function(){
	this.drawWindow() ;
	this.menuOpt() ;
	this.drawImage() ;
}

DUBBE.jawm.app.imageSingle.prototype.drawImage = function(){
	
	$(this.getContent()).addClass("imageSingleWindowMain") ;

	$("<img>").appendTo(this.getContent()).attr("src", "pics/"+this.getName()).addClass("imageSingleImg").css({
		"height": this.imgHeight,
		"width": this.imgWidth
	});
	
	$(this.getInfo()).text(" ") ;

}
DUBBE.jawm.app.imageSingle.prototype.setAsBg = function(){
	$("#background").css({"background": "url(pics/"+this.getName()+")"}) ;	
}
DUBBE.jawm.app.imageSingle.prototype.menuOpt = function(){
	var that=this ;
	var menuArr = [] ;
	menuArr.push([this.closeWindow, "NULL", "close.png", "Arkiv", "Stäng"]);
	menuArr.push([this.setAsBg, this, "bg.png", "Redigera", "Sätt som bakgrund"])
	
	that.drawMenu(menuArr) ;
	
}
