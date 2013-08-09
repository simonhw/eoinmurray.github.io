$(function(){
	var $bg = $('.bg-image')
    var yPos = -($(window).scrollTop()); 
    var coords = yPos - 30 + 'px';
    $bg.css({ backgroundPosition: coords });
    $(window).scroll(function() {
        var yPos = -($(window).scrollTop()/2.); 
        var coords = yPos - 30 + 'px';
        $bg.css({ backgroundPosition: coords });
    }); 
})