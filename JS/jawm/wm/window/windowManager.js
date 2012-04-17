var DUBBE ;
if (!DUBBE) DUBBE = {}
if (!DUBBE.jawm) DUBBE.jawm = {}
if (!DUBBE.jawm.wm) DUBBE.jawm.wm = {}
if (!DUBBE.jawm.wm.windowManager) DUBBE.jawm.wm.windowManager = {

    windows: [], //en array som innehåller objektet

    init: function() {
    
    //console.log("JAWN är uppe!") ;
    /* Ritar upp skrivbordet */
    DUBBE.jawm.wm.background() ;	// Default storlek 800x600px 
    DUBBE.jawm.wm.dock.init() ;			// Ritar upp dockan
	
	/* Ritar upp vilka ikoner jag vill ha på skrivbordet */
	DUBBE.jawm.wm.icon("Image Viewer", "image.png", DUBBE.jawm.app.imageViewer) ;  		// Image viewer
	DUBBE.jawm.wm.icon("RSS-reader", "rss.png", DUBBE.jawm.app.rssReader) ; 			// RSSreader
	DUBBE.jawm.wm.icon("JAWM Chat", "empathy.png", DUBBE.jawm.app.messageBoard) ; 		// Labby
	DUBBE.jawm.wm.icon("Memory", "memory.png", DUBBE.jawm.app.memory) ; 				// Memory
	DUBBE.jawm.wm.icon("Om", "om.png", DUBBE.jawm.app.about) ; 							// Om 
	DUBBE.jawm.wm.icon("Inställningar", "settingsBig.png", DUBBE.jawm.app.settings) ; 		// Om
	
    }
}
$(DUBBE.jawm.wm.windowManager.init);

