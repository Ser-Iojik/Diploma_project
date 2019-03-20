jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('#container_menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('#container_menu').removeClass('fixed');
        }
    });
});
