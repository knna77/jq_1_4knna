 	
$(document).ready(function () {
$( "p" ).after( "<a href='#'>back to the top</a>" );

//$( ".footnote" ).css('background-color', 'grey');
 	

$("#footer").prepend( $(".footnote") );
//hi ha que posar els elemnets en una llista
//$(".footnote").css('list-style-type','decimal');

});

