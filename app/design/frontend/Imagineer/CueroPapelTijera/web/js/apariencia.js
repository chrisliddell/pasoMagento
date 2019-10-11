require(['jquery'],function($){

	$(document).ready(function(){

        $('.ui-icon-carat-1-e').css('display', 'relative');
        
		//eliminar <p></p> vacios
		$('p').each(function() {
			var $this = $(this);
			if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
				$this.remove();
		});
		

		//animacion para rectangulo en slider del home
		  $( ".2" ).click(function() {
			$( ".sliderDividerRect" ).slideDown( "slow", function() {
			  // Animation complete.
			});
		  });

		//cambiar fondo en las paginas de productos
		if(window.location.pathname.includes('mujer') || window.location.pathname.includes('hombre') || window.location.pathname.includes('men') || window.location.pathname.includes('women') || window.location.pathname.includes('catalog')){
			$(".column.main").css("background-color","#f5f1eb");
			$(".page-main").css("background-color","#f5f1eb");
		} else {
			$(".page-main").css("background-color","white");
			$(".column.main").css("background-color","white");
		}

		
		//cambiar apariencia en las paginas de checkout
		if(window.location.pathname.includes('checkout') ){
			$(".page-main").css("max-width","100%");
			$(".page-main").css("padding-left"," 0 ");
			$(".page-main").css("padding-right"," 0");
		} else {
			$(".page-main").css("max-width"," 100% !important;");
			$(".page-main").css("padding-left"," 0 !important");
			$(".page-main").css("padding-right"," 0 !important");
		}

	});
});	

