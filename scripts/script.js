// JavaScript Document

var navLinks = document.getElementById("js-nav-links");
var navToggle = document.getElementById("btn-toggle");
var burger = document.querySelector(".btn-burger-toggle")

navToggle.addEventListener("click", function () {
    
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggle");
});
