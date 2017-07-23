/**
 * Created by 孙帅男 on 2017/7/21.
 */
(function(win,docu){
    win.onresize = function(){
        change();
    };
    change();
    function change(){
        var osize = docu.documentElement.clientWidth /(320/20);
        docu.documentElement.style.fontSize = osize+"px";
    }
})(window,document);