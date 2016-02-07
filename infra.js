(function () {
	Event.handler('layer.onshow', function (layer) {
	    if (!layer.div || !layer.activelink) return;
	    delete layer.activelink;

	    Event.handler('Crumb.onchange', function () { //Чтобы при любом onchange и хотябы один onshow уже был
	    	//Функция выполняется при вперёд, назад

	        Event.one('Infrajs.onshow', function () {//Если это первый запуск то нужно дождаться Onshow infrajs чтобы изменения слоя применились
	            if (!layer.showed) return;//Если в текущем окружении слой скрыт, ждём.
	            activelink('#' + layer.div);
	        });
	    });
	});
})();