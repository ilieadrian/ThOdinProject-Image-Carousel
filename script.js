let slideIndex = 5;
const slides = document.getElementsByClassName("slide");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", fireSlideDecrease);
rightArrow.addEventListener("click", fireSlideIncrease);

function fireSlideDecrease() {
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
  if (slideIndex < slides.length) {
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
