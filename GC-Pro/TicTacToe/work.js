$("td").on("click",function(){
    var str = $(this).text();
    alert(str);
    $(this).text("");
    $(this).keypress(function(e){
        // if(e.which === 13)
           alert("Lock!");
    });
});