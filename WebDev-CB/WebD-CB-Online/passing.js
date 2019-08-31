function change(a){
    a=20;
}

var a=10;

console.log("Before Changing a = " + a);
change(a);
console.log("After Changing a = " + a);

//The value of a didn't change //PassByValue

//Arrays are passed by referance

function change(arr){
    for(i in arr){
        arr[i]=i;
    }
}

var arr = [1,2,3];
console.log("Before Changing : " + arr);
change(arr);
console.log("After Changing : " + arr);