infra.listen(infra, 'layer.onshow', function (layer) {
    if (!layer.div || !layer.activelink) return;
    delete layer.activelink;
    infra.handle(infra.Crumb, 'onchange', function () { //Чтобы при любом onchange и хотябы один onshow уже был
    	//Функция выполняется при вперёд, назад
        infra.wait(infrajs, 'onshow', function () {//Если это первый запуск то нужно дождаться Onshow infrajs чтобы изменения слоя применились
            if (!layer.showed) return;//Если в текущем окружении слой скрыт, ждём.
            activelink('#' + layer.div);
        });
    });
});
