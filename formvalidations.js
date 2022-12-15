var myform=document.querySelector('#my-form');
var nameinput=document.querySelector('#name');
var emailinput=document.querySelector('#email');
var msg=document.querySelector('.msg');
var userlist=document.querySelector('#users');

myform.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameinput.value===''|| emailinput.value===''){
        msg.innerHTML="please enter values";
    }
    else{
        msg.innerHTML="success";
        console.log("success");
        
    }
}
