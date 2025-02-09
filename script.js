// Lazy Loading Effect for Images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".small-box img");

    function handleScroll() {
        images.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.style.opacity = "1";
                img.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});
//document.addEventListener("DOMContentLoaded", function() {
   // const carousel = document.querySelector(".carousel");
    //let index = 0;

    //function moveCarousel() {
       // index++;
       // if (index > 5) {
        //    index = 0;
        //}
       // carousel.style.transition = "transform 5s ease-in-out";
       // carousel.style.transform = `translateX(-${index * 100}%)`;
    //}

    //setInterval(moveCarousel, 1000); // Changes background every 1s seconds
//});
