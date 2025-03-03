const warpper = document.querySelector('.warpper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');



 btnPopup.addEventListener("click", ()=> {
     warpper.classList.add("active-popup");
 });


 iconClose.addEventListener("click", ()=> {
     warpper.classList.remove("active-popup");
 });


registerlink.addEventListener('click', ()=> {
    warpper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    warpper.classList.remove('active');
});

// function login(){
// let email = document.getElementById("email").value;
// let pass = document.getElementById('password').value;

// if(email == 'ankit1@gmail.com' && pass == '123456789'){
// alert("login succesful ! ");
//     window.location.assign('home.html')
// }else{
// alert("invelid details ! ");
// }
// }

