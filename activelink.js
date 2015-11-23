window.activelink=function(div){
    var href=location.href;
    if (!div) div=document;
    $(div).find('a').removeClass('active').each(function(){
        var a=$(this);
        if (a.prop('href')==href) {
            a.addClass('active');
            a.parent().filter('li').addClass('active');
        } else {
            a.removeClass('active').parent().filter('li').removeClass('active');
        }
    });
}
