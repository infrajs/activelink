infra.listen(infra, 'layer.onshow', function(layer){
    if (!layer.div||!layer.activelink) return;
    delete layer.activelink;
    infra.handle(infra.Crumb,'onchange',function(){
        infra.wait(infrajs,'onshow',function(){
            if(!layer.showed)return;
            activelink($('#'+layer.div));
        });
    });
});
