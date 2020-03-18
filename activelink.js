(async () => {
	window.activelink = async (div) => {
		var href = location.href
		
		if (!div) div = document
		var is = false

		let CDN = (await import('/vendor/akiyatkin/load/CDN.js')).default
		await CDN.load('jquery')

		$(div).find('a').removeClass('active').each(function(){
			var a=$(this);
			if (a.prop('href')==href) {
				a.addClass('active');
				a.parent().filter('li').addClass('active');
				is=true;
			} else {
				a.removeClass('active').parent().filter('li').removeClass('active');
			}
		});
		if(is)return;
		var r=href.split('#');
		href=r[0];
		$(div).find('a').removeClass('active').each(function(){
            var a=$(this);
            if (a.prop('href')==href) {
                a.addClass('active');
                a.parent().filter('li').addClass('active');
                is=true;
            } else {
                a.removeClass('active').parent().filter('li').removeClass('active');
            }
        });
	}
	return window.activelink;
})();