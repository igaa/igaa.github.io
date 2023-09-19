const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//water effect
$(".full-landing-image").ripples({
    resolution: 256,
    perturbance: 0.01,
  });


var $parallaxBg = $('#parallax-bg');

function parallax() {
    $(window).on('scroll', function() {
        $parallaxBg.css('top', $(window).scrollTop() * -.5);
    });
};

$(document).ready(function () {
    parallax();
})