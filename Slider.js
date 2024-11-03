const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    console.log(slides);  
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide, 5000);
    } else {
        console.error("No slides found");
    }
}

function showslide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); 
    });

    console.log("Showing slide:", slideIndex); 
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalid);
    slideIndex--;
    showslide(slideIndex);
    intervalid = setInterval(nextSlide, 5000); 
}

function nextSlide() {
    clearInterval(intervalid);
    slideIndex++;
    showslide(slideIndex);
    intervalid = setInterval(nextSlide, 5000); 
}

