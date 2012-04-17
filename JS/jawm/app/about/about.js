var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.app) DUBBE.jawm.app = {} ;

DUBBE.jawm.app.about = function(){

	DUBBE.jawm.wm.window.call(this, "Memory", "memory", 420, 180, "no") ;
}

DUBBE.jawm.app.about.prototype = new DUBBE.jawm.wm.window ;

DUBBE.jawm.app.about.prototype.init = function(){
	this.drawWindow() ;
	this.menuOpt() ;

	$("<h1>").appendTo(this.getContent()).text("JAWM - Just another window manager") ;
	$("<p>").addClass("aboutVersionText").text("Version 0.1").appendTo(this.getContent()) ;
	$("<p>").addClass("aboutText").appendTo(this.getContent()).html("Skriven mestaldels i jQuery och javascript. Den nyttjar sig också av lite CSS3, så den ser lite bättre ut i Firefox och Google Chrome. <br />Utvecklad av <a href=\"http://dubbe.se\">Thomas Dahlberg</a>")


}
DUBBE.jawm.app.about.prototype.menuOpt = function(){
	var that=this ;
	var menuArr = [] ;
	menuArr.push([this.closeWindow, "NULL", "close.png", "Arkiv", "Stäng"]);
	
	that.drawMenu(menuArr) ;
	
}
