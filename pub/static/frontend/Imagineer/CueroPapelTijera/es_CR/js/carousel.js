if(window.location.pathname == '/cr' || window.location.pathname == '/us' || window.location.pathname == '/cr/' || window.location.pathname == '/us/' ){
 
require(['jquery'],function($){


    $(document).ready(function(){
        //slider principal de bienvenida
        $(".dot").click(function(){ 
            showSlides(slideIndex = $(this).attr("class").split(/\s+/)[1]); //agarra el numero clase del dot ej: class="dot 1". Se hizo asi porque magento static block no permite agregar value o name a los elementos
         });



        // Thumbnail image controls
        function currentSlide(n) {
            
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" activeDot", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " activeDot";
        }

        var slideIndex = 1;
        showSlides(slideIndex);



        //slider de producto en seccion 

        var slideIndex2 = 1;
        showSlides2(slideIndex);
        
        function showSlides2(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides2");
            if (n > slides.length) {slideIndex2 = 1}
            if (n < 1) {slideIndex2 = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex2-1].style.display = "block";
        }

        // Next/previous controls
        function plusSlides(n) {
            showSlides2(slideIndex2 += n);
        }
        
        $(".prevSlider").click(function(){ 
            plusSlides(-1);    
        });
         $(".nextSlider").click(function(){ 
            plusSlides(1);
         });
    });
});	


}