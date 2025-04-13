/*var x=50;
function print(name)
{
    console.log("value is "+name);
}
print(x);
console.log("this is first time");
let x=(name) => {
    console.log("this is your "+name);
}
console.log(typeof x);
x("harshdeep");
console.log("this is you ");*/
//document.getElementById("heading").style.border="1px solid Red";
/*const element=document.getElementById("box-2");
element.addEventListener("click",(event)=>{
    console.log("button clicked"+ event);
})*/

/*for(let i=0;i<6;i++)
{
    console.log(i,"hello");
}
let i=2;
while(i<8)
{
    i++;
    console.log(i,"how are you");
}

i=0;
do{
    i++;
    console.log("kya raha he be");
}
while(i<5)*/

/*function funx()
{
    console.log("this is a function");
}

funx();*/

/*function boo()
{
    const a="harshdeep";
    //console.log(a);
    //bar();
    //hor();

    function bar()
    {
        const b="manpreet";
        //console.log(b);

        function hor()
        {
            const c="munish";

            console.log(a);
            console.log(b);
            console.log(c);
        }
        hor();
       
    }
    bar();
}

console.log("we are calling function");
boo();*/


//function with paranthesis 
/*function greet(name)
{
    console.log("hello "+name);
}
greet("harsh");*/

//function with return 

/*function add(a,b)
{
    return a+b;
}

const c=add(1,3);
console.log(c);*/

//this is expression function also called anonymous function
let funx=function(name){
    console.log("hello kya kar rahe ho "+name);
    return "kuch bhi";
}

console.log(funx("harsh"));
console.log(funx("manpreet"));
console.log(funx("munish"));


//this is arrow function

let arrow = ()=>{
    console.log("this is arrow funtion");
}

arrow();










let arr= ["munish","manpreet","harshdeep","lokesh"];
arr.sort();
//foreach function
arr.forEach((element)=>{
    console.log("hello "+element);
})

//console.log(arr);
// for inserting value that is syntax
//arr.splice(3,0,"harshpal","monish");
//console.log(arr);

//for deleting value the syntax is below
/*arr.splice(4,2);
console.log(arr);*/

//for both deleting and inserting
//arr.splice(3,2,"ankit","deepanshu");
//console.log(arr);






/*console.log(arr);
arr.push("kosar");
console.log(arr);
console.log(arr.includes("kosar",3));
arr.pop();
console.log(arr);
console.log(arr.includes("kosar"));
console.log(arr.indexOf("manpreet"));

/*for (const key in arr) {
        console.log(key,arr[key]);
}*/