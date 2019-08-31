//In JS,we can create a function inside any function and return it as well
//The inner function inherits the variables and other properties of outer function
//This is known as Closure Scope.
//This is very useful in a lot of ways such as Building A Counter 

function alpha(){
    var a=10;
    function add(){
        console.log(++a);
    }
    return add;
}

var x = alpha();
x();
x();

function counter(a,d){
    return {
        add(){
            a+=d;
            console.log(a);
        },
        sub(){
            a-=d;
            console.log(a);
        }
    }
}

var obj = counter(5,1);
obj.add();
obj.sub();
obj.add();
obj.sub();

