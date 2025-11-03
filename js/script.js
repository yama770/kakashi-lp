$(document).ready(function(){
    $('.achievements__slick-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev">❮</button>',
        nextArrow: '<button type="button" class="slick-next">❯</button>',
    });
});

// FAQアコーディオン機能
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('is-open');
        });
    });
});
