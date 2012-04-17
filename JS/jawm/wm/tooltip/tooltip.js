var DUBBE ;
if (!DUBBE) DUBBE = {} ;
if (!DUBBE.jawm) DUBBE.jawm = {} ;
if (!DUBBE.jawm.wm) DUBBE.jawm.wm = {} ;
if (!DUBBE.jawm.wm.tooltip) 
	DUBBE.jawm.wm.tooltip = {
		
		init: function(){
		},
		showTooltip: function(e, msg, cont) {
			var tooltip = $("<div>").appendTo("body").addClass("tooltip").html(msg) ;
			$(document).bind("mousemove", function(e) {
				$(tooltip).css({
					"top": e.pageY+5,
					"left": e.pageX+5,
					"z-index": 70000
				}) ;
			});

		},
		hideTooltip: function() {
			$(".tooltip").remove();
		}
		
	}