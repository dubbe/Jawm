var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.wm) DUBBE.jawm.wm = {} ;
if (!DUBBE.jawm.wm.dock) 
	DUBBE.jawm.wm.dock = {
	
		init: function(){
			this.dock = $("<div>").appendTo("#background").addClass("dock") ;
		},
		
		addIcon: function(icon){
			$(icon).appendTo(this.dock) ;
		
		}
	}