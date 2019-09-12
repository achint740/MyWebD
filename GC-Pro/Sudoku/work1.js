// alert("Connected!");

$("input").keypress(function(e){
//   alert("Clicked!");
//$(this).toggleClass("INP");
    var t = $(this).parent().text();
     if(t!=""){
         alert("Cannot Insert Here");
     }
     if(t==="" && e.which === 13){
        var text1 = $(this).val();
        alert(text1);
        $(this).parent().text(text1);
     }
});

function Keyf(e){
    
}