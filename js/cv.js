$(function(){
	(function moveElement(){
		var $clientWidth = parseInt($('html').css('width'));
		var $right_wrap = $('.right_wrap');
		if($clientWidth < 768){
			$right_wrap.append($('.contact'));
		};
	})();

	(function(){
		
	})();
});