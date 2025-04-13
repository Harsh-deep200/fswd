//import { greetclient } from "../class object and json/script.js";

//error handling 
//try and catch 
//below is simple syntax of try catch block
/* try {
    throw new Error("useful error!")
} catch (error) {
    console.log(`somethin went wrong ${error.message}`);
} */

/* try {
    const a=0;
    a=a/0;//is line error he tho is ke baad ka try block ka code run nhi karega
    console.log("there is no error");
} catch (error) {
    console.log(error.message);
    console.log("there is error spotted");
} finally{
    console.log("finally block is always executed")
} */

/* //export and import 
//import function from ../class object and json/script
const name ="harsh";
console.log(name);
console.log(greetclient(name)); */



//higher order function
/* //that is program to print even numbers but if we print odd we write different program 
//so that was why we need higher order function
const a=[1,2,3,4,5,6,7,8];
function evenNumbers()
{
    const b=[];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2==0)
        {
            b.push(a[i]);
        }
    }
    return b;
}
const evennumbers=evenNumbers();
console.log(evennumbers); */

/* const a=[1,2,3,4,5,6,7,8];
function filternumber(conditionfunction)
{
    const b=[];
    for(let i=0;i<a.length;i++)
    {
        if(conditionfunction(a[i]))
        {
            b.push(a[i]);
        }
    }
    return b;
}
const multipleof3=filternumber(function(num){
    return num%3==0;
});
console.log(multipleof3);//output [3,6]

/* function isEven(num)
{
    return num%2==0;
}

function isOdd(num)
{
    return num%2!=0;
}

const evennumbers=filternumber(isEven);
console.log(evennumbers);

const oddnumbers=filternumber(isOdd);
console.log(oddnumbers); */ 


//fiter ,map and find
/* //array fiter method
//filter function original array mein change nhi karta 
const a=[8,7,6,5,4,3,2,1];
function isEven(num)
{
    return num%2==0;
}

function isOdd(num)
{
    return num%2!=0;

}
const b=a.filter(isEven);
const c=a.filter(isOdd);
console.log(c);
console.log(b);
a.filter((currentvalue,index,arr)=>{        //filter mein tin chij pass karwate skte he currentvalue ,index ,arr
    console.log(currentvalue,index,arr);
});
const f=a.filter((currentvalue)=>{  //filter function mein hum condition batate he kis basis pe array ko filter karna chate he 
    return currentvalue%3==0;
})
console.log(f); */

//array map function
/* const a =[1,2,3,4,5,6,7,8];
function square(num)
{
    return num*num;
}

const b=a.map(square);
console.log(b);
console.log(a);
const c=a.map((num)=>{
    if(num%2==0)
    {
        return 1;
    }
    if(num%2!=0)
    {
        return 0;
    }
});
console.log(c);



const d=a.map((num)=>{
    return num%3;
})
console.log(d);
 */


//array find function
/* 
const a=[1,2,3,4,5,6,7,8];

const found=a.find((element)=>{
    console.log(element%2==0);
    return element%2==0;//jo bhi pahle element condition true karega usko hi return karega
});
console.log(found); */
