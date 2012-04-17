/* 
 * Slänger in en funktion för att parsa xml i IE8, hoppas det fungerar... 
 * http://bugs.jquery.com/ticket/3143
 */
jQuery.parseXml = function(xml){
	
	if (jQuery.browser.msie)
	{
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM"); 
		xmlDoc.async="false";

		xmlDoc.loadXML(xml);
		xml = xmlDoc;
	}
	
	return xml;

}