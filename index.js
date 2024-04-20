/*
data types

primitive data types:
string 
number
boolean
undefined
null

non primitive data types:
objects
array  
let firstName="risk"
let age=25
console.log(firstName)
console.log(age)

let employee={
    firstName:"rishit",
    age:35,
    company:"amazon",
    isrishitgoodemployee:true,
}
console.log(employee.firstName)
console.log(employee["age"])*/

/* types of operator
1> arithmetic :+,-,/,--;
2>comparison :==,===,!=;
3>logical:&&,||;
4>assignment:+=,-+; 

comparison:
let n=9;
let a="risk"
let j=3
let k=9
console.log(n==a)
console.log(a==n)
console.log(n===a)
console.log(n>j)
console.log(j>n)
console.log(n<=k)

logical:
let a=10
let b=20
let c=30
console.log(a>b && a>c)
console.log(a>b || a<c)

 
  arithmetic:
let b=20
let c=4
console.log(b++)
console.log(c--)

 assignment:
let x=4
console.log(x+=5)
console.log(x-=25)
console.log(x/=4)


//for loop
//while loop
//do while loop
//for in:object
//for of:string

for(i=1;i<=10;i++){
    console.log('promise',i)
}


let a=1
while(a<=5){
    console.log('academy',a)
    a++
}
let i=1
do{
    console.log('promise',i)
    i++
}while(i<=10)


let a='javascript'

for(let i of a){
    console.log(i)
}

let student={
    firstName:'Risk',
    roll:12,
    div:'A',
    bool:true,
}

for(let i in student){
    console.log(i)
    console.log(student[i])
}


 ARRAY METHODS
 1>Join method
const a=[1,2,3,4]
const b=a.join('@')
console.log(b)  

  2>push method
 const a=[1,2,3,4,5]
 a.push(20)
 console.log(a) 

 3>pop method
 const a=[1,2,3,4,5]
 a.pop()
 console.log(a)  

  4>shift method(removes element from beiginning)
  const a=[1,2,3,4,5]
  a.shift()
  console.log(a) 

  5>unshift method(add element to beginning)
  const a=[1,2,3,4,5]
  a.unshift(123)
  console.log(a) 

  6>concat,spread
  const a=[1,2,3,4]
  const b=[5,6,7,8]
  const c=[9,10,11]
  const d=a.concat(b,c)
  console.log(d) 

 spread
  const a=[1,2,3,4]
  const b=[5,6,7,8]
  const c=[...a,...b]  //spread operator
  console.log(c) */

//7) Array loop methods

// a) forEach method

//  const a = [1, 2, 3, 4, 5, 6]

//   a.forEach((val,index)=>{
//      a[index]=val+1
//   })

//   console.log(a)

// b) Map method

// const b = a.map((val, index) => val + 1)

// console.log(b)
// console.log(a)

//c) filter method

// const b = a.filter((val, index) => {
//     return val % 2 === 0
// })

// console.log(b)

// d) find method

// const b = a.find((val,index)=>{
//     return val>3
// })

// console.log(b)

//f) findIndex method

// const b = a.findIndex((val,index)=>{
//     return val>3
// })

// console.log(b)

//functions

// Normal function
// function prom(a, b) {
//     console.log(a + b)
// }

// prom(1, 2)
// prom(2, 4)
// prom(5, 5)

// //ES6 function
// const hello = (a , b) => {
//     console.log(a + b)
// }

// hello(10, 10)

// const div=(a,b)=>{
//     return a/b
// } 

//  const c = div(4,2)
// console.log(c)

// DOM
//Document object model

//HTML
//CSS
//JAVASCRIPT

// getElementById
//getElementByClassName
//getElementByTagName
//quertSelector
//querySelectorAll

//const b=document.getElementById('hello').innerHTML
//console.log(b)

//const a=document.querySelectorAll('#hello')[0].innerHTML='king'
//console.log(a)
//const b=document.querySelectorAll('#hello')[0].style.color='blue'
//console.log(b)
//const first=document.querySelector('#hello')
//console.log(first)
//const a=document.createElement('h1').innerHTML='<h1>H1 tag</h1>'
//first.append(a),prepend,before,after
//console.log(a)

//const a=document.getElementById('btn')

//a.addEventListener('click',()=>{
  //  console.log('btn is clicked')
//})

/*const error=document.getElementById('error')
const fname=document.getElementById('fname')
const lname=document.getElementById('lname')
const password=document.getElementById('password')
const form=document.getElementById('form')
const button=document.getElementById('btn')
form.addEventListener('submit',()=>{
    let message=[]
    if(fname.value==' '|| password.value=='')
    {
        message.push('please enter name and password')
    }
})*/

// timeout and interval methods 
// settimeout and setinterval

//setTimeout(()=>{
 //   console.log("hello");
//},500)

//setInterval(()=>{
 //   console.log("king is back....");
//},4000)


