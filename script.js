AOS.init({
duration:1000,
once:true
});


/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
mobileMenu.classList.remove("active");
});


/* MOBILE DROPDOWN */

const mobileLink = document.querySelector(".mobile-link");
const mobileSubmenu = document.querySelector(".mobile-submenu");

mobileLink.addEventListener("click", () => {

if(mobileSubmenu.style.display === "block"){
mobileSubmenu.style.display = "none";
}else{
mobileSubmenu.style.display = "block";
}

});







document.getElementById("subscribeForm").addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("email").value.trim();
let error=document.getElementById("emailError");

let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email===""){
error.innerText="Please fill the field";
return;
}

if(!pattern.test(email)){
error.innerText="Enter valid email address";
return;
}

error.innerText="";
window.location.href="404.html";

});







/* SCROLL TO TOP */

let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function(){

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

};


scrollBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};








const faqQuestions = document.querySelectorAll(".stackly-faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

if(answer.style.display === "block"){
answer.style.display = "none";
}
else{
answer.style.display = "block";
}

});

});





document.getElementById("stacklyContactForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

let fields = [name,email,subject,phone,message];

let valid = true;

fields.forEach(field =>{

let error = field.nextElementSibling;

if(field.value.trim() === ""){

field.classList.add("error-border");
error.innerText = "This field is required";

valid = false;

}else{

field.classList.remove("error-border");
error.innerText = "";

}

});

if(valid){
alert("Form submitted successfully!");
}

});




