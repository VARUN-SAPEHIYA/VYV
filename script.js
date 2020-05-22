(function(){
    var prelaod = document.getElementById("prelaod");
    var loading = 0;
    var id = setInterval(frame,64);

    function frame(){
        if(loading == 100){
            clearInterval(id);
            window.open("main.html","_self");
        }else{
            loading = loading + 1;
            if(loading == 90){
                prelaod.style.animation = "fadeout is ease";
            }
        }
    }
})();
