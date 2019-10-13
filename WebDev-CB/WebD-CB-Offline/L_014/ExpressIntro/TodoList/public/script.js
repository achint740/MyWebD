$(()=>{
    let new1 = $('#new'); //Input 
    let add1 = $('#add'); //Add Button
    let task = $('#tasklist'); //Unordered List

    function refresh(){
        //Make the Task List Empty
        task.empty();
        //Grab the array
        //And append it
        $.get('/todos',(data)=>{
             for(let x of data){
               // alert(x);
                task.append(
                    $('<li>')
                        //Text of li
                        .text(x)
                        //Property contenteditable -- make it true
                        .prop('contenteditable',true)
                        //Append 2 buttons
                        .append(
                        //------------------- **Delete** -------------------//
                            $('<button>')
                                .text('X')
                                .attr('id','btn')
                                .on('click',function(){
                                    // let y = $(this).parent().text();
                                    $.get(`/delete?del=${x}`,(data)=>{
                                        if(data == 'Successfully Deleted')
                                            refresh();
                                    })
                                }),
                        //------------------- **Update** -------------------//
                            $('<button>')
                                .text('U')
                                .on('click',function(){
                                    let p = x;
                                    let y = $(this).parent().text();
                                    let new_y = y.substring(0,y.length-2);
                                    $.get(`/update?naya=${new_y}&purana=${p}`,(data)=>{
                                        if(data == 'Successfully Updated'){
                                            refresh();
                                        }
                                    })
                                })
                        //------------------- **Keypress** -------------------//
                        //------------------- **Not Working** -------------------//
                                .keypress(function(ev){
                                    if(ev.which == '13'){
                                        let p = x;
                                        let y = $(this).parent().text();
                                        let new_y = y.substring(0,y.length-2);
                                        $.get(`/update?naya=${new_y}&purana=${p}`,(data)=>{
                                            if(data == 'Successfully Updated'){
                                                refresh();
                                            }
                                        })
                                    }
                                })
                        )
                    );
             }
        });
    }
    refresh();

    // $('#btn').click(function(){
    //     alert('Hello');
    //     let x = $(this).parent().val();
    //     $.get(`/delete?del=${x}`,(data)=>{
    //         if(data == 'Successfully Deleted')
    //            refresh();
    //    })
    // })

    //Click funtionality For Add Buttom
    add1.on('click',function(){
        // alert('CLicked');
        //Grab the input data
        let t = new1.val();
        new1.val("");
        //alert(t);
        $.get(`/addtodo?newtodo=${t}`,(data)=>{
             if(data == 'Success'){
                 refresh();
             }
        });
    });

});