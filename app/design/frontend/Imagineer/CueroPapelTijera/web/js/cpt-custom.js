require(['jquery'],function($){

	var enMenu = false;

	//expandir el header cuando se navegan submenus (estetica)
	function expandMenu(){
		if(enMenu){
			$("#myHeader").css("padding-bottom","10%");
			$("#lineaHeaderMenu").css("display", "block");
		} else {
			$("#myHeader").css("padding-bottom","20px");
			$("#lineaHeaderMenu").css("display", "none");
		}
	}

	$(document).ready(function(){
		$(window).scroll(function(el){
		  var height = $(window).scrollTop();

		  if(height >= 1600){
		  	$("#up").fadeIn("fast");
		  }else{
		  	$("#up").fadeOut("fast");
		  }		  

/*
		  if((height >= 1000){
			$("#myHeader").css("position", "relative");
			$("#myHeader").css("opacity", "1");
		  } else {
			$("#myHeader").css("position", "fixed");
			$("#myHeader").css("opacity", "0.2");
		  }*/
		});
		var headerContent = $("div.header.content").html();
		//var languageSwitcher = $("#switcher-store").html();
		$("div.header.content").remove();
		$("#actionsTop").append(headerContent);
		//$("#actionsTop").append("<div class='switcher store switcher-store' id='switcher-store'>"+languageSwitcher+"</div>");

		$(document).on("click","#up",function(){
			$('html, body').animate({scrollTop:0}, 400);	
		});

		//hacer que el header no tenga collision si esta en el homepage
		if(window.location.pathname == '/cr' || window.location.pathname == '/us' || window.location.pathname == '/cr/' || window.location.pathname == '/us/' ){
			$("#myHeader").css("position", "fixed");
			//$("#myHeader").css("opacity", "0.2");
		} else {
			$("#myHeader").css("position", "sticky");
			$("#myHeader").css("top", "0");
			//$("#myHeader").css("opacity", "1.0");

		}


		$( ".level0.parent" ).mouseover(function() {
			enMenu = true;
			expandMenu();
		  });
		
		$( ".level1" ).mouseover(function() {
			enMenu = true;
			expandMenu();
		  });
			
		$( ".level2" ).mouseover(function() {
			enMenu = true;
			expandMenu();
		  });
		
		$( ".level0.parent" ).mouseout(function() {
			enMenu = false;
			expandMenu();
		  });
		$( ".submenu" ).mouseout(function() {
		enMenu = false;
		expandMenu();
		});
		  
	});	
});	

