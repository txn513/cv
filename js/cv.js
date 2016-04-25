$(function(){
	(function moveElement(){
		var $clientWidth = parseInt($('html').css('width'));
		var $right_wrap = $('.right_wrap');
		var progessBarScroll = $('.last').offset().top - $(window).height();
		var animation_1 = $('.animation-1').offset().top - $(window).height();
		if($clientWidth < 768){
			$right_wrap.append($('.contact'));	
		};

		animationStart();

		function animationStart(){
			if ($(window).scrollTop() > progessBarScroll){
				animateProgessBar();
			}
			else{
				mobileScroll();
			}
			if ($(window).scrollTop() > animation_1){
				alert(1);
			}
			else{
				
			}
		}
		function mobileScroll(){
			$(window).bind('scroll', function scrollTop(){
				if($(window).scrollTop() > progessBarScroll){
					animateProgessBar();
					//alert(1);
					$(this).unbind();
				};
			});	
		}
		function animateProgessBar(){
			$('.progress-bar').each(function() {
			    var bar_value = $(this).attr('aria-valuenow') + '%';                
			    $(this).animate({ width: bar_value }, 'slow');
			});
		}
		function animateTitle1(){
			
		}
		
	})();
	
});