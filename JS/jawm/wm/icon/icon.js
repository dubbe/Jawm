var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.wm) DUBBE.jawm.wm = {} ;

DUBBE.jawm.wm.icon = function(name, img, func) {
	
	var that = this ;
	
	var icon = $("<div>").addClass("icon") ;
	var iconA = $("<a>").appendTo(icon).attr("href", "#").click(function() {
		var window = new func ;
		console.log(window.init()) ;
	});

	
	var iconImg = $("<img>").appendTo(iconA).attr("src", "appPics/icons/"+img).addClass("iconImg").mouseenter(function(e) {
		DUBBE.jawm.wm.tooltip.showTooltip(e, name, icon) ;
		$(iconImg).animate({
			top: '-15',
			height: '+=15'
		}, 100, function(){
			
		}) ;
	}).mouseleave(function(e) {
		DUBBE.jawm.wm.tooltip.hideTooltip(e) ;
		$(iconImg).animate({
			top: '0',
			height: '-=15'
		}, 100, function(){
			
		}) ;
		
	}
	
	) ;


	DUBBE.jawm.wm.dock.addIcon(icon) ;
	
	
}