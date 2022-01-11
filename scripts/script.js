// JavaScript Document

// var navLinks = document.getElementById("js-nav-links");
// var navToggle = document.getElementById("btn-toggle");
// var burger = document.querySelector(".btn-burger-toggle");

// navToggle.addEventListener("click", function () {
//   navLinks.classList.toggle("active");
//   burger.classList.toggle("toggle");
// });

// let carouselSlide = document.querySelector(".carousel-slide");
// let carouselArticles = document.querySelectorAll(".carousel-slide article");

// //buttons
// const prevBtn = document.querySelector("#prevBtn");
// const nextBtn = document.querySelector("#nextBtn");

// //Counter
// let counter = 1;
// const size = carouselArticles[0].clientWidth;

// carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// //Button listeners
// nextBtn.addEventListener("click", () =>{
//   if (counter >= carouselArticles.length -1) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
//   console.log(counter)
// });

// prevBtn.addEventListener("click", () =>{
//   if (counter <= 0) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter--;
//   carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
//   console.log(counter)
// });

// carouselSlide.addEventListener("transitionend", () =>{
//   if(carouselArticles[counter].id === "lastArticle"){
//     carouselSlide.style.transition = "none";
//     counter = carouselArticles.length - 2;
//     carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
//   }
//   if(carouselArticles[counter].id === "firstArticle"){
//     carouselSlide.style.transition = "none";
//     counter = carouselArticles.length - counter;
//     carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
//   }
// })

// console.log(counter)

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li")


  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

     //animate links
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
      }
      
    })
    // burger animation
    burger.classList.toggle("toggle");

  });
 
};

navSlide();
