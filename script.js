/* globals $ */
/* eslint no console rule */
function clickedHandler(){
    console.log( "li clicked!" );
    $( "ol" ).off( "click",clickedHandler );
}
$( "ol" ).on( "click", "li", clickedHandler );
