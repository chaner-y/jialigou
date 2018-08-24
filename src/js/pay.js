jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');
    
    var $adddizhi = $('.adddizhi');
    $adddizhi.on('click',function(){
        $('.main_c2').fadeToggle();
    });
});