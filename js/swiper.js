$(function() {

   /*  <!-- #wrap --> */
   
        AOS.init();
   
        /* <!-- Swiper JS --> */
        
            var swiper = new Swiper(".addAccor", {
                spaceBetween: 10,
                centeredSlides: true,
                /*  autoplay: {
                     delay: 2500,
                     disableOnInteraction: false,
                 }, */
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
    

});