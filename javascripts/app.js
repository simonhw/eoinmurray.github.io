$(function(){
	var $bg = $('.bg-image')
    var yPos = -($(window).scrollTop()); 
    var coords = yPos - 70 + 'px';
    $bg.css('backgroundPosition', '0 ' + coords );
    
    $(window).scroll(function() {
        var yPos = -($(window).scrollTop()/2.); 
        var coords = yPos - 70 + 'px';
        $bg.css('backgroundPosition', '0 ' + coords );
    }); 

})