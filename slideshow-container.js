let slideIndex = 1;
ShowSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}
ShowSlides();
function ShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(ShowSlides, 5000); // Change image every 5 seconds
}