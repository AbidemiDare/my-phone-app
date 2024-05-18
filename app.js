const headerBar = document.getElementById('header-bar');
const menuContainer = document.querySelector('.menu-container');
const cancelMenu = document.querySelector('.cancel-menu');

headerBar.addEventListener('click', function() {
 menuContainer.classList.add('show')
})

cancelMenu.addEventListener('click', function() {
 menuContainer.classList.remove('show')
})

// signup variables
const headerBtn = document.querySelector('.header-btn');
const menuBtnTwo = document.querySelector(".menu-btn-two");
const cancelSignUp= document.querySelector(".cancel-signup");
const signupSection = document.querySelector(".signup-section");

// Display signup form onclick (Desktop view)
headerBtn.addEventListener("click", function () {
  signupSection.style.display = "block";
});


// Display pop modal onclick (Mobile view)
menuBtnTwo.addEventListener('click', function() {
    signupSection.style.display = 'block';
})

// Remove pop modal onclick
cancelSignUp.addEventListener("click", function () {
  signupSection.style.display = 'none'
});

let inputPassword = document.querySelector("#password");
let inputConfirmPassword = document.querySelector("#confirm-password");
const passwordBtn = document.querySelector('.password-btn')
const faEye = document.querySelector(".fa-pass-eye");
const faEyeSlash = document.querySelector(".fa-pass-slash");

const confirmPasswordBtn = document.querySelector(".confirm-password-btn");
const faConfirmEye = document.querySelector(".fa-confirm-eye");
const faConfirmEyeSlash = document.querySelector(".fa-confirm-slash");


passwordBtn.addEventListener('click', function() {
  if (inputPassword.type === "password") {
    inputPassword.type = "type";
    faEye.style.display = 'block';
    faEyeSlash.style.display = "none";
  } else {
    inputPassword.type = "password";
    faEye.style.display = "none";
    faEyeSlash.style.display = "block";
  }
})

confirmPasswordBtn.addEventListener('click', function() {
   if (inputConfirmPassword.type === "password") {
     inputConfirmPassword.type = "type";
     faConfirmEye.style.display = "block";
     faConfirmEyeSlash.style.display = "none";
   } else {
     inputConfirmPassword.type = "password";
     faConfirmEye.style.display = "none";
     faConfirmEyeSlash.style.display = "block";
   }
})

const loginBtn = document.querySelector('.login-btn')
const logEye = document.querySelector('.log-eye');
const logSlash = document.querySelector('.log-slash');
const logPassword = document.getElementById('log-password')

loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (logPassword.type === 'password') {
          logPassword.type = 'text';
          logEye.style.display = 'block'
          logSlash.style.display = 'none';
        } else {
           logPassword.type = 'password';
          logEye.style.display = 'none'
          logSlash.style.display = 'block';
        }
})

//  Login Variables
const menuBtnOne = document.querySelector(".menu-btn-one");
const cancelLogin = document.querySelector(".cancel-login");
const loginSection = document.querySelector(".login-section");

// Display login popup onclick
menuBtnOne.addEventListener('click', function() {
    loginSection.style.display = 'block'
})

// Remove login popup onclick
cancelLogin.addEventListener('click', function() {
      loginSection.style.display = "none";
})

// const formDet = document.querySelector('#show-log')

// formDet.addEventListener('click', function() {
//   signupSection.style.display = 'none';
//     loginSection.style.display = "block";
// })

const showDropdown = document.querySelector('.fa-caret-down');
const menudropdown = document.querySelector('.menu-links li .dropdown');

showDropdown.addEventListener('click', function(e) {
  e.preventDefault();
      menudropdown.classList.add("show");
      menudropdown.style.display = 'block'
})

