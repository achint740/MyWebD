$("td").on("click",function(){
    $("input").keypress(function(e){
        if(e.which === 88){
             $(this).parent().text("X");
            }
        else{
             $(this).parent().text("0");
        }
    });
});