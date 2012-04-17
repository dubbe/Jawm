var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.app) DUBBE.jawm.app = {} ;

DUBBE.jawm.app.settings = function(){

	DUBBE.jawm.wm.window.call(this, "Settings", "settingsBig", 420, 180, "no") 

}

DUBBE.jawm.app.settings.prototype = new DUBBE.jawm.wm.window ;

DUBBE.jawm.app.settings.prototype.init = function(){

	var that = this ;
	
	
	var form = $("<form>");
	
	$("<span>").text("Höjd: ").appendTo(form).addClass("popUpLabel") ;
	var height = $("<input type='text'>").appendTo(form).attr({
		name: "height"
	}).val(parseInt($("#background").css("height"))) ;
	
	$("<br>").appendTo(form) ;
	$("<span>").text("Bredd: ").appendTo(form).addClass("popUpLabel") ;
	var width = $("<input type='text'>").appendTo(form).attr({
		name: "width"
	}).val(parseInt($("#background").css("width"))) ;


	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function() {
		that.changeSize($(height).val(), $(width).val())
		that.hidePopUp() ;
	}) ;	
		
	this.showPopUp("260px", "150px", form) ;

}
DUBBE.jawm.app.settings.prototype.changeSize = function(height, width){
	//console.log("ändrar storlek") ;
	$("#background").css({
		"height": height,
		"width": width
	});
}
