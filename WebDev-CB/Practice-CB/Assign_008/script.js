let arr = new Array(1000);
let c=0;
for(let i=0;i<arr.length;i++){
    arr[i]=[];
}

$('#add').on('click',function(){
    // alert('CLicked');
    var name1 = $('#name').val();
    $('#name').val("");
    var age = $('#num').val();
    $('#num').val("");
    $('ul').append("<li>" + name1 + " " + age + "</li>");
    arr[c].push(name1);
    arr[c].push(age);
    c++;
});

function sort1(arr,x){
    for(let i=0;i<x;i++){
        for(j=i+1;j<x;j++){
            if(arr[j][0]<arr[i][0]){
                //swap name
                let temp1=arr[j][0];
                arr[j][0]=arr[i][0];
                arr[i][0]=temp1;
                //Swap Age
                let temp2=arr[j][1];
                arr[j][1]=arr[i][1];
                arr[i][1]=temp2;
            }
        }
    }
}

function sort2(arr,x){
    for(let i=0;i<x;i++){
        for(j=i+1;j<x;j++){
            if(Number(arr[j][1])<Number(arr[i][1])){
                //swap name
                let temp1=arr[j][0];
                arr[j][0]=arr[i][0];
                arr[i][0]=temp1;
                //Swap Age
                let temp2=arr[j][1];
                arr[j][1]=arr[i][1];
                arr[i][1]=temp2;
            }
        }
    }
}

$('#s1').on('click',function(){
    let items = $('ul li');
    sort1(arr,items.length);
    $('ul').empty();
    for(let i=0;i<items.length;i++){
        // console.log(items[i]);
        let y = arr[i][0] + " " + arr[i][1];
        $('ul').append("<li>" + y + "</li>");
    }
});

$('#s2').on('click',function(){
    let items = $('ul li');
    sort2(arr,items.length);
    $('ul').empty();
    for(let i=0;i<items.length;i++){
        // console.log(items[i]);
        let y = arr[i][0] + " " + arr[i][1];
        $('ul').append("<li>" + y + "</li>");
    }
});

