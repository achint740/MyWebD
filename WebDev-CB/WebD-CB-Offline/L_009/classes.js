class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    //Getters
    get Firstname(){
        return this.name.split(' ')[0];
    }

    get Lastname(){
        return this.name.split(' ')[1];
    }

    //Setters
    set Lastname(xyz){
        let a = this.name.split(' ');
        a[1] = xyz; //or pop and then push
        this.name = a.join(' ');
    }

    //Static Function
    static ageDiff(a,b){
        return a.age - b.age;
    }
}

class Student extends Person(){
    constructor(name,age,marks){
        super(name,age); //!!FIRST!!
        this.marks = marks;
    }
}

let p = new Person('Achi',19);
let p1 = new Person('AGam Dawra','16');

console.log(p);
console.log(p1.Firstname); //no need of calling 
                          //in case of getters
console.log(Person.ageDiff(p,p1));


