$(()=>{
    function refresh(){
        $('#tasklist').empty();
        $.get('/todos',(data)=>{
            for(let x of data){
                $('#tasklist').append(
                    $('<li>').append(
                        x.name + " ",
                        `<b>${x.priority}</b>`
                        )
                )
            }
        })
    }
    refresh();

    $('#add').on('click',function(){
        $.post(
                '/todos',
                {
                    name : $('#new').val(),
                    priority : +($('#pr').val())
                },
                (data)=>{
                    if(data.success == "true")
                        refresh();
                }
            )
    });
})