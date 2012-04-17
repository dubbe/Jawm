<?php
	/* Skript hämtat från http://articles.techrepublic.com.com/5100-22-5109834.html 2008-03-02 */
	/* Script from http://articles.techrepublic.com.com/5100-22-5109834.html 2008-03-02 */

  // Global variables for function use.
	
  if(isset($_GET["url"]))
	  $feed = urldecode($_GET["url"]);	
  else
      $feed = "http://lnu.se/1.454?l=sv_SE&format=rss";	

	
  $GLOBALS['title'] = false;
  $GLOBALS['link']  = false;
  $GLOBALS['description'] = false;
  $GLOBALS['titletext'] = null;
  $GLOBALS['linktext'] = null;
  $GLOBALS['desctext'] = null;
  

 

  // function: startElement

  // Deals with the starting element

  function startElement( $parser, $tagName, $attrs ) {

    // By setting global variable of tag name

    // I can determine which tag I am currently

    // parsing.

    switch( $tagName ) {

      case 'TITLE':

        $GLOBALS['title'] = true;

        break;

      case 'LINK':

        $GLOBALS['link'] = true;

        break;

      case 'DESCRIPTION':

        $GLOBALS['description'] = true;

        break;

    }

  }

 

  // function: endElement

  // Deals with the ending element

  function endElement( $parser, $tagName ) {

    // By noticing the closing tag,

    // I can print out the data that I want.

    switch( $tagName ) {

      case 'TITLE':

        echo "\n\n<h2 class='rss_title'>" . $GLOBALS['titletext'] . "</h2>\n";

        $GLOBALS['title'] = false;

        $GLOBALS['titletext'] = "";

        break;

      case 'LINK':

        echo "<a href=\"". $GLOBALS['linktext'] . "\">" . $GLOBALS['linktext'] . "</a><br/>\n";

        $GLOBALS['link'] = false;

        $GLOBALS['linktext'] = "";

        break;

      case 'DESCRIPTION':

        echo "<p>" . htmlspecialchars_decode($GLOBALS['desctext']) . "</p>\n";

        $GLOBALS['description'] = false;

        $GLOBALS['desctext'] = "";

        break;

    }

  

  }

 

  // function: charElement

  // Deals with the character elements (text)

  function charElement( $parser, $text ) {

    // Verify the tag that text belongs to.

    // I set the global tag name to true

    // when I am in that tag.

    if( $GLOBALS['title'] == true ) {

        $GLOBALS['titletext'] .= htmlspecialchars( trim($text) );

    } else if( $GLOBALS['link'] == true ) {

        $GLOBALS['linktext']  .= trim( $text );

    } else if( $GLOBALS['description'] == true ) {

        $GLOBALS['desctext'] .= htmlspecialchars( trim( $text ) );

    }

  }

 

  // Create an xml parser

  $xmlParser = xml_parser_create();

 

  

  // Set up element handler

  xml_set_element_handler( $xmlParser, "startElement", "endElement" );

 

  

  // Set up character handler

  xml_set_character_data_handler( $xmlParser, "charElement" );

 

 

  // Open connection to RSS XML file for parsing.

  $fp = fopen( $feed, "r" )

    or die( "Cannot read RSS data file." );

    

  // Parse XML data from RSS file.
  echo("<div class='rssFeed'>");
  while( $data = fread( $fp, 4096 ) ) {

    xml_parse( $xmlParser, $data, feof( $fp ) );
	
  }
  echo("</div>");
  

 

  // Close file open handler

  fclose( $fp );

 

 

  // Free xml parser from memory

  xml_parser_free( $xmlParser );

 
	
?>

