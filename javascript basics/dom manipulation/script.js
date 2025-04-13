/* const element=document.getElementById("box-3");
console.log(element);

const bytagname=document.getElementsByTagName("div");
console.log(bytagname);

const byclassname= document.getElementsByClassName("container");
console.log(byclassname); 

const a =document.getElementsByClassName("box");
console.log(a);

//access element by classname
const b=document.querySelectorAll(".box");
console.log(b);

//access element by id
const c=document.querySelector("#box-2");
console.log(c);

//access element by tagname
const d=document.querySelectorAll("div");
console.log(d); */

/* //change innerhtml using dom
//document.getelementbyid("id").attribute=new value;
//example  document.getelementbyid("myimage").src="landscape.jpg";
document.getElementById("box-1").innerText="this is box 1";

//adding a new class 
const element=document.getElementById("box-5");
element.classList.add("redclass");

//removing a class 
element.classList.remove("redclass");

//toggle a class
//add a class if it is not present and remove if it is present
element.classList.toggle("redclass"); */


// creating and appending new html
const para = document.createElement("p");
const node = document.createTextNode("this paragragh is inserted dynamically");
para.appendChild(node);
const ele = document.getElementById("box-6");
ele.appendChild(para);


// changing html style
//document.getelementbyid("id").style.property = new style

/* const element2 =document.getElementById("box-4");
element2.style.border = "5px solid yellow";
element2.style.borderRadius ="50%" */

/* console.log(()=>{
    console.log("this is arrow function");
}); */
 
const button =document.querySelector(".btn");
button.addEventListener("click",()=>{
    console.log("button is clicked");
})