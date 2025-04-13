
/* //kis tarah se childnodes ko access karte he 
const ulcounting=document.getElementById("counting");
const childnodes= ulcounting.childNodes;
console.log(childnodes); */

/* //kis tarah se nodes ke parent ko access karte he 
const list=document.getElementById("list-1");
const parentnodes=list.parentNode;
console.log(parentnodes); */

/* //kis tarah se child nodes se parent nodes ko access karte he 
const node=document.getElementById("list-3");
const prntnode=node.parentElement.childNodes;
console.log(prntnode); */

/* //kis tarah se child se parent nodes ko access karte he 
//chilren hor childNodes mein difference hote he
const node=document.getElementById("list-3");
const prntnode=node.parentElement.children;
console.log(prntnode); */

//firstChild and lastChild
const node=document.getElementById("list-3");
const firstnode=node.parentElement.firstChild;
const lastchild=node.parentElement.lastChild;
console.log(firstnode);
console.log(lastchild);
