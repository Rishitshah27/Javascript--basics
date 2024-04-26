/* 1>question
const colors=["red","green","blue"]
const ans=colors.join('-')
console.log(ans)*/

/* 2>question
const fruits=[]
fruits.push('mango')
console.log(fruits)
fruits.push('banana')
console.log(fruits)
fruits.push('Water-melon')
console.log(fruits)*/

/*3>question
const no=[1,2,3]
no.push(34,45,56,77)
console.log(no)*/

/*4>question
const no=[1,2,3,4,5]
console.log(no)
no.pop()
console.log(no)*/

/*5>question
const plates=['plate1','plate2','plate3']
console.log(plates)
plates.shift()
console.log(plates)*/

/*6>question
const a1=[1,2,3]
const a2=[4,5,6]
const a3=a1.concat(a2)
console.log(a3)

const a4=[1,2,3,4]
const a5=[5,6,7,8]
const a6=[...a4,...a5]
console.log(a6)*/

/*16>question
const no=[1,2,3,4,5]
no.forEach((val,index)=>{
    no[index]=val*2
})
console.log(no)*/

/*17>question
const names=['alice','bob','charlie','david']
names.forEach((val,index)=>{
    names[index]='hello,'+  '  '+val
})
console.log(names)*/

/*18>question
const students=[
    {name:'Alice',grade:85},
    {name:'BOb',grade:92},
    {name:'Charlie',grade:78},
    {name:'David',grade:88},
]
let total=0;
students.forEach(val=>{
    total+=val.grade;
})
console.log("sum of all three marks:",total)
console.log("avg of all students:",total/students.length)*/

/*19>question
const no=[-5,3,10,-8,2,7,-1]
let total=0;
no.forEach(val=>{
    if(val>0)
    {
        total+=val
    }
})
console.log(total)*/

/*20>question
const no=[1,2,3,4,5]
const a=no.map((val,index)=>val*2)
console.log(a)*/

/*21>question
const products=[
    {id:1,name:'iphone',price:999},
    {id:2,name:'samsung',price:899},
    {id:3,name:'google pixel',price:799}
]

const a=products.map((val,index)=>val.name)
console.log(a)*/

/*22>question 

const products=[
    {name:'laptop',price:999,qty:2},
    {name:'phone',price:799,qty:4},
    {name:'tablet',price:499,qty:1}
]

const b=products.map((val)=>{
    return val.price*val.qty
})
console.log(b)*/

/* 23>question
const employee=[
    {name:'alice',dept:'hr',salary:60000},
    {name:'bob',dept:'finance',salary:45000},
    {name:'charlie',dept:'it',salary:70000}
]

const b=employee.map((val)=>({
    name:val.name,
   permonth:val.salary>50000

   }))
console.log(b)*/


/*24>question 
  
 const employees = [
  { id: 1, name: "Alice", skills: ["JavaScript", "HTML", "CSS"] },
  { id: 2, name: "Bob", skills: ["Python", "Java"] },
  { id: 3, name: "Charlie", skills: ["React", "Node.js", "MongoDB", "Express"] }
 ];

const b=employees.map((val)=>({
     name:val.name,
     skill:val.skills.length
}))
console.log(b)*/

/* 25>question
const numbers = [5, 12, 3, 20, 8, 15];
const b=numbers.filter((val)=>{
    return val>10
})
console.log(b)*/

/* 26>question
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 18 }
   ];

const a=students.filter((val)=>{
    return val.age>=18
})
console.log(a) */

/* 27>question
const users = [
    { name: "Alice", age: 20, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 22, email: "charlie@example.com" }
  ];
  
const a=users.filter((val)=>{
    return val.age<25
}) 
console.log(a) */

/* 28>question
const products = [
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "T-shirt", price: 15, category: "Clothing" },
    { name: "Headphones", price: 80, category: "Electronics" }
  ];

  const a=products.filter((val)=>{
    return val.price>100
  })

  console.log(a)*/


/* 29>question
  const orders = [
    { id: 1, status: "completed", total: 50 },
    { id: 2, status: "pending", total: 100 },
    { id: 3, status: "completed", total: 80 }
  ];
  
const a=orders.filter((val)=>{
    return val.status=='pending'
})  
console.log(a)*/


/*30>question
const employees = [
    { name: "Alice", department: "HR", salary: 60000 },
    { name: "Bob", department: "Finance", salary: 45000 },
    { name: "Charlie", department: "IT", salary: 70000 }
  ];
  
  const a=employees.filter((val)=>{
    return val.department=='HR'
})  
console.log(a)*/

/*31>question
const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 16, grade: 60 },
    { name: "Charlie", age: 18, grade: 75 }
  ];
  
const a=students.filter((val)=>{
    return val.age<18 && val.grade<=70
})  
console.log(a)*/

/* 32>question
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" }
  ];
const a=books.filter((val,index)=>{
    return val.author.length>10
})  
console.log(a)*/

/*33>question
const numbers = [5, 12, 3, 20, 8, 15]
const a=numbers.findIndex((val)=>{
    return val>10
})
console.log(a)*/


/* 34>question 
const users = [
    { name:"Alice", age: 25 },
    { name:"Bob", age: 30 },
    { name:"Charlie", age: 22 }
  ]
const a=users.find((val)=>{
    return val.name=='Alice'
})  
console.log(a)*/


/*35>question
const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 80 }
  ]

const a=products.findIndex((val)=>{
    return val.price>50 && val.price<100
})
console.log(a)*/

const numbers = [1, 2, 3, 4, 5];
const a=numbers.find((val,index)=>{
    return val[index]==5
})
console.log(a)
  
  

