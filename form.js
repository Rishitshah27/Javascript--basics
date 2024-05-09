const error=document.getElementById('error');
const fname=document.getElementById('fname');
const password=document.getElementById('password');
const email=document.getElementById('email');
const btn=document.getElementById('submit');

const validateform=()=>{
    let messages=[];
    if(fname.value==='')
    {
        messages.push("please enter fname");
    }
    if(email.value==='')
    {
        messages.push("please enter email");
    }
    else if(!email.value.includes("@")){
        messages.push("please enter valid email");
    }
    if(password.value==='')
    {
        messages.push("please enter password");
    }
    else if (password.value.length<6)
    {
        messages.push("please enter more than 6 characters");
    }
    else if(
        !password.value.includes("@")&&
        !password.value.includes("$")&&
        !password.value.includes("#")
    ){
        messages.push("please enter special character");
    }
    if(messages.length>0){
        error.innerHTML=messages.join("<br/>");
    }
    else{
        error.innerHTML=" ";
    }
}


btn.addEventListener("click", validateform);
password.addEventListener("input", validateform);
fname.addEventListener("input", validateform);
email.addEventListener("input", validateform);