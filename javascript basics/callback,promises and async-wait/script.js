//setTimeout(function,milliseconds,argument in function)
/* //this is setTimeout
function greet(){
    console.log("hello world");
}

setTimeout(greet,2000);
console.log("this is written after greet "); */



/* //pass argument in setTimeout function 
function greet(name){
    console.log(`hello ${name}`);
}

setTimeout(greet,2000,"harsh");
console.log("this is written after greet "); */



/* //how arrow function use in settimeout function
setTimeout(()=>{
    console.log("hello world")
},3000);

console.log("this is print after greet"); */



/* //how to pass argument in arrow function in setTimeout interval
setTimeout((name)=>{
    console.log(`hello ${name}`);
},2000,"harsh");
console.log("this is print after setTimeout interval"); */


/* //how to clear setTimeout 
function greet(){
    console.log("hello world");
}
console.log("this is print before greet");

const timeoutid=setTimeout(greet,2000);
clearTimeout(timeoutid);//setTimeout now not work
console.log("this is print after greet"); */


/* //setInterval is useful when you want to repeat a block of code multiple times
//setInterval(function,milliseconds)
let count=0;
function increaseCount(){
    if(count==7)
    {
        return;
    }
    count++;
    console.log(count);
}
setInterval(increaseCount,2000); */


/* //clear interval function use in setinterval 
let count=0
const intervalID= setInterval(greet,2000,"harsh");

function greet(name){
    if(count==6)
    {
        clearInterval(intervalID);
    }
    count++;
    console.log(`${count} hello ${name}`);
} */

//callback
/* const orderpizza=(callback)=>{
    setTimeout(()=>{
        const pizza="<>";
        callback(pizza);
    },2000);
}

orderpizza((pizza)=>{
    console.log(`here is my pizza ${pizza}`);
}); */





/* const orderpizza=(myfunction)=>{
    setTimeout(()=>{
        const pizza="<>";
        myfunction(pizza);
    },2000);
}
const notifyMeorsuccess=(pizza)=>{
    console.log(`here is my notification ${pizza}`);
}
orderpizza(notifyMeorsuccess);
console.log("visited nani");
console.log("rest"); */


/* function orderpizza(myfunction){
    getcheese((cheese)=>{
        makeDough(cheese,(dough)=>{
            bakePizza(dough,(pizza)=>{
                myfunction(pizza);
            });
        });
    });
}
function getcheese(next){
    setTimeout(()=>{
        const cheese="chse";
        console.log(`sending the ${cheese}`);
        next(cheese);
    },2000);
}
function makeDough(cheese,next){
    setTimeout(()=>{
        const dough=cheese+' doh';
        console.log(`sending the ${dough}`);
        next(dough);
    },2000);
}
function bakePizza(dough,next){
    setTimeout(()=>{
        const pizza=dough+" <>";
        console.log(`sending the ${pizza}`);
        next(pizza);
    },2000);
}
function notifyMeorsuccess(pizza){
    console.log(`here is my notification for ${pizza}`);
}
orderpizza(notifyMeorsuccess);
console.log("visited nani");
console.log("rest"); */




//promises
/* function orderpizza(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const pizza="<>";
            resolve(pizza);
        },2000);
    });
}
const pizza=orderpizza();//this will return promise in that is in pending state
console.log(pizza);*/

/* function orderpizza(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const pizza="<>";
            resolve(pizza);
        },2000);
    });
}
const pizzapromise=orderpizza();
pizzapromise
.then((pizza)=>{
    console.log(`my pizza ${pizza}`);//this will print pizza
}) */

/* function orderpizza(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const pizza="<>";
            resolve(pizza);
        },2000);
    });
}
const pizzapromise=orderpizza();
pizzapromise
.then((pizza,error)=>{
    console.log(`my pizza ${pizza}`);//this will print pizza
    console.log(error);
}).catch((error)=>{
    console.log(`error occured ${error}`);
}) */

/* function orderpizza(){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            const isAvailable=false;
            if(isAvailable){
                const pizza="<>";
                res(pizza);
            }else{
                rej("we do not have pizza");
            }
        },2000);
    });
}

const pizzapromise =orderpizza();
pizzapromise
.then((pizza)=>{
    console.log(`my pizza`,pizza);
}).catch((error)=>{
    console.log(`error occured ${error}`);
}) */

function getcheese(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`cheese `);
        },2000);
    });
}
function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${cheese} dough`);
        },2000);
    });
}

function makePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${dough} pizza`);
        },2000);
    });
}

async function orderpizza(){
    const cheese= await getcheese();
    console.log(`now we have ${cheese}`);
    const dough=await makeDough(cheese);
    console.log(`now we have ${dough}`);
    const pizza=await makePizza(dough);
    console.log(`now we have ${pizza}`);
    return pizza;
}

orderpizza().then((pizza)=>{
    console.log(pizza);
});



