// function makeHeaderFixed(){
//   const headertab = document.getElementById("header");
//   const headertabRect = headertab.getBoundingClientRect();
//   const headertabOffsetTop = headertabRect.top + window.scrollY;

//   // get headertab's height and give it to #tab-cont
//   headertab.style.height = headertabRect.height + "px";

//   window.onscroll = function() {
//       if (window.scrollY >= headertabOffsetTop) {
//         headertab.classList.add("fixed-head");
//       }else{
//         headertab.classList.remove("fixed-head");
//       }
//   }
// }

let slideIndex  = 1;


function displaySlides(number){
  let i;
  let slides = document.getElementsByClassName("slidebox");
  let dots = document.getElementsByClassName("dot");

  if(number > slides.length){
    slideIndex = 1;
  }

  if(number < 1){
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

} 


displaySlides(slideIndex);

function currentSlide(number){
  displaySlides(slideIndex = number)
}
function switchSlides(slideNum){
   displaySlides(slideIndex += slideNum);
}


// module.exports = {currentSlide,switchSlides};
