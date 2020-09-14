import { Event } from '/vendor/infrajs/event/Event.js'
import { DOM } from '/vendor/akiyatkin/load/DOM.js'

Event.handler('Layer.onshow', layer => {
	if (!layer.activelink) return;
	delete layer.activelink;
	Event.handler('Crumb.onchange', function () { //Чтобы при любом onchange и хотябы один onshow уже был
		//Функция выполняется при вперёд, назад
		Event.one('Controller.onshow', function () {//Если это первый запуск то нужно дождаться Onshow infrajs чтобы изменения слоя применились
			if (!layer.showed) return;//Если в текущем окружении слой скрыт, ждём.
			if (layer.div) activelink('#' + layer.div);
			else activelink();
		});
	});
});
