let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dotsContainer = document.getElementById("dots-container");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

document.addEventListener("DOMContentLoaded", (e) => {
    slides[0].style.display = "block"
});

leftArrow.addEventListener("click", fireSlideDecrease);
rightArrow.addEventListener("click", fireSlideIncrease);

function fireSlideDecrease() {
  if (slideIndex > 0) {
    slideIndex--;
    resetStyles()
    slides[slideIndex].style.display = "block";
  } else {
    return;
  }
}

function fireSlideIncrease() {
  if (slideIndex < slides.length-1) {
    slideIndex++;
    resetStyles()
    slides[slideIndex].style.display = "block";
  } else {
    return;
  }
} 
setInterval(fireSlideIncrease, 5000);

function resetStyles(){
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
    slides[0].style.display = "block"
});

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    resetStyles(); 
    slideIndex = e.target.id - 1; 
    slides[slideIndex].style.display = "block"; 
    e.target.classList.add("active"); 
    return slideIndex;
  }
});
