$(document).ready(function(){

    $(".original_image2").on({

        mouseenter:function(){
            $(this).css("background-image", "Lorem Picsum.jpg");
        },

        mouseleave:function(){
            $(this).css("background-image", "lightblue");
        }
        
    });

});