let arr = [5,2,1,4,3,11,121,112];
arr.sort(function(a,b){
    console.log(a + ' ' + b); //Insertion Sort
    return a-b;
});
console.log(arr);

//Stable Operation on Array : 
//Map
//Filter
//Values

let arr1 = [1,4,5,2,3];

let arr2 = arr1.map(function(value,index,arr1){
    console.log(index + '-->' + value);
});

let arr3 = arr1.map((value)=>value*2);
console.log(arr3);

let arr4 = arr1.map((value)=>{
    if(value%2)
        return "even";
    else
        return "odd";
});


//FIlter Function
//Either true or false
let arr5 = arr1.filter(function(value){
    if(value%2==0) return true;
    else    return false;
});

//Reduce function

let arr6 = arr1.reduce(function(accum,value,index,arr){
    return accum+value;
    //accum kind of recursive
});

console.log(arr5);
console.log(arr6);
