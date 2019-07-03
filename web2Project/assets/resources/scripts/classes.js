$( document ).ready(function() {
    $( ".card-img" ).on( "click", function() {
        if( $(this).attr('id') == 'image-class') {
         $(this).attr("src", "assets/resources/img/Cartas/card-"+$(this).attr('value')+".png")
         $(this).attr('id', 'image-character') 
        } else {
            $(this).attr("src", "assets/resources/img/Cartas/class-"+$(this).attr('value')+".png")
            $(this).attr('id', 'image-class') 
        }
    });
});