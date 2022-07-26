console.log("thiss is form validation project");
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let success = document.getElementById('success');
let danger = document.getElementById('danger');
// console.log(username, phone, email); 
username.addEventListener('blur', ()=>{
    console.log('blur name');
    let regex = /([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    console.log(str, regex);
    if(regex.test(str)){
        console.log('congrats it matched');
    }
    else{
        danger.classList.add('show')
    }
});
email.addEventListener('blur', ()=>{
    console.log('blur email');
    let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){0,7}$/;
    let str = email.value;
    console.log(str, regex);
    if(regex.test(str)){
        console.log('congrats it matched');
    }
    else{
        console.log('invallid'); 
    }
});
phone.addEventListener('blur', ()=>{
    console.log('phone');
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(str, regex);
    if(regex.test(str)){
        console.log('congrats it matched');
    }
    else{
        console.log('not valid number');
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
  console.log('clicked');  
  e.preventDefault();
  
  success.classList.add('show')  
});