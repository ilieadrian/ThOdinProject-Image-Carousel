let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dotsContainer = document.getElementById("dots-container");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

document.addEventListener("DOMContentLoaded", (e) => {
    slides[0].style.display = "block"
});

leftArrow.addEventListener("click", fireSlideDecrease);
rightArrow.addEventListener("click", fireSlideIncrease);

function fireSlideDecrease() {
  console.log("now decreasing")
  if (slideIndex > 0) {
    slideIndex--;
    console.log(slideIndex);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  } else {
    return;
  }
}

function fireSlideIncrease() {
  console.log("now increasing")
  if (slideIndex < slides.length-1) {
    slideIndex++;
    console.log(slideIndex);
    console.log(slides[slideIndex]);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
    slides[0].style.display = "block"
});

dotsContainer.addEventListener("click", (e) => {
    console.log(e.target.id);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    slides[e.target.id].style.display = "block"
})