// window.onload = function(){
//     console.log(jQuery);
// }

// $('document').ready(function(){
//     alert("Hello");
// });

// $('#DIV').css('color','blue').attr('class','xyz');  //fluent api/method chaining

// $('#btn').on('click',function(){
//     alert("Button Clicked!");
// });

// $("#btn").unbind();
// //  ]unbind //

// $("list").append(
//     $("<li>").text("kajscac");
// )

$(document.body)
    .append(
        $('<input>')
            .attr('id','newtask')
    )
    .append(
        $('<button>')
            .attr('id','addtask')
            .text('ADD')
            .click(()=>{
                $('#tasklist')
                    .append(
                        $('<li>')
                            .text($('#newtask').val())
                            .append(
                                $('<button>')
                                    .text("X")
                                    .click(function(){
                                        $(this).parent().remove();
                                    })
                            )
                            .append(
                                $('<button>')
                                    .text("U")
                                    .attr('class','btn-up')
                                    .click(function(){
                                        $(this).parent().insertBefore($(this).parent().prev());
                                    })
                            )
                            .append(
                                $('<button>')
                                    .text("D")
                                    .attr('class','btn-d')
                                    .click(function(){
                                        $(this).parent().insertAfter($(this).parent().next());
                                    })
                            )
                        )
            })
    )
    .append(
        $('<ul>')
            .attr('id','tasklist')
    )