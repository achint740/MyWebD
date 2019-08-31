//Check Off
$("ul").on("click","li",function (){
//    alert("Clicked LI");
    $(this).toggleClass("completed");
});

//Deletion
$("ul").on("click","span",function (evt){
    //alert("Clicked!"); 
    evt.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});

//Creating New
$("input").keypress(function(e){
    if(e.which === 13){
    //alert("Key Pressed!");
    var text = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + text + "</li>");
    }
});

$(".fa-pen").on("click",function(){
    $("input").fadeToggle();
});

