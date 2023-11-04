var slideIndex = 0;
var slide = document.getElementsByClassName("myslide");
slideShow();
function slideShow() {
    var i;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    slide[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 1000);

}