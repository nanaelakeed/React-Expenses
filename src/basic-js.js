
//declare variable   var=let
let myname="nana";
console.log(myname);



//built normal function
function myname1(name){
    console.log(name);
}

myname1("afnan");


//Classes
class Human{
    constructor() {
        this.gender="male";
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super();
        this.name="Dareen";
        this.gender="female";
    }
    printName(){
        console.log(this.name);
    }
}

const p1=new Person();
p1.printName();
p1.printGender();


//spread and Rest
//spread
const oldArr=[1,2,3];
const newArr=[...oldArr,4]
console.log(newArr);


//two ways of functions
function fun(){

}

const fun2 = () =>{

};


