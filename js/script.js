$(function() {
    
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$(".burger").on("click", function(event) {
    $(".burger").toggleClass("active");
    $(".burger__nav").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".nav__link").on("click", function(event) {
    $(".burger__nav").removeClass("active");
    $(".burger").removeClass("active");
    $("body").removeClass("lock");
});

$(".intro__container div").hover(function(){
    $(".hand__1").css("right", "-70px");
    $(".intro__title").css("right", "90px");
    }, function(){
    $(".hand__1").css("right", "-200px");
    $(".intro__title").css("right", "0px");
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('anim-show');
        }
        else {
            change.target.classList.remove('anim-show');
        }
    });
}
let options = {
    threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim');
    for (let elm of elements) {
      observer.observe(elm);
    }
});

let obj = $(".anim");
let scrollChange = 1;
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= scrollChange) {
        obj.addClass('anim-show');
    }
});