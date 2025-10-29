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
    const faqIcons = document.querySelectorAll('.faq__item-question--icon');
    
    faqIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            const faqItem = this.closest('.faq__item');
            
            faqItem.classList.toggle('is-open');
        });
    });
});
