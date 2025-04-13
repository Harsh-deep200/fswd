const student={
    firstname:"harshdeep",
    age:16,
    class:"b.tech cse third year"
};

/* //this is sytnax to access class member
console.log(student.firstname);
console.log(student.age);

//below sytnax is also used to access object member
console.log(student["class"]);
 */

/* for (const key in student) {
    //display the properties
    console.log(key,student[key]);
} */


/* //function return object 
function getvehicle(){
    return{
        type:"car",
        wheels:4
    }
}

const myvehicle=getvehicle();
console.log(myvehicle);

//we can also change the value 
myvehicle.wheels=3;
console.log(myvehicle); */

/* //object destroying
//first method to destructing object
let person={
    firstName:"john",
    lastname:"doe"
};

/* let firstName=person.firstName;
let lastname=person.lastname;
console.log(firstName,lastname); */


/* //second way to destructing object
//let{ property1: variable1, property2: variable }=object;
let{ firstName: fname,lastname: lname}=person; 


//third way to destructing object
let{firstName,lastname}=person;
console.log(firstName,lastname); */


//javascript object methods
//object containing method

const person={
    name:"harshdeep",
    greet(){
        console.log("hello "+ this.name);
        console.log(`hello ${this.name}`);
        return "kya haal he "
    }
};
//without destructing object
console.log(person.greet());
/* output :- hello harshdeep
             hello harshdeep
             kya haal he */

             
/* //with destructing 
let{name:Name,greet}=person;
//greet();
console.log(Name,greet());
/* output :- hello 
             hello 
             kya haal he */ 


/* //javascript classes
class person1{
    constructor(name){
        this.name=name;
    }
    greeting(){
        return(`hello ${this.name}`);
    }
}
const prsn1=new person1("harsh");
const prsn2=new person1("manpreet");
const prsn3=new person1("munish");
const prsn4=new person1("lokesh");
console.log(prsn1.greeting());
console.log(prsn2.greeting());
console.log(prsn3.greeting());
console.log(prsn4.greeting()); */

/* //JSON object javascrpit object notation
//JSON syntax
myobj={"name":"john","age":22,"car":null};
console.log(myobj); */

//create json object by parsing a json string
/* myjson='{"name":"harsh","age":22,"car":null}';
console.log(myjson);
myobj= JSON.parse(myjson);
console.log(myobj);
//convert back string from object
myjson=JSON.stringify(myobj);
console.log(myjson); */


// one way to export

function greetclient(client)
{
    return `hello ${client}`;
}

export{greetclient};

//second way to export
/* export function greetclient(client)
{
    return `hello ${client}`;
} */


