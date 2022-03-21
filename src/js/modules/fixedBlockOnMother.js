$( window ).on( "load", function() {
	var element = $(".fixed_block");
	const initFixedBlock = function(){
		if(window.screen.width >= 768){
			var element = $(".fixed_block");
			var height_el = element.offset().top - 80;
			var element_stop = $(".fixed_block_stop"); 
			var height_el_stop = element_stop.offset().top;
			
			$(window).on('scroll', function() {
			
				if($(window).scrollTop() > height_el_stop - element.outerHeight() - 80) {
					element.removeClass("fixed")
					$('.fixed_block_position').addClass("bottom_fixed");
				} else {
					if($(window).scrollTop() > height_el) {
						element.addClass("fixed").removeClass("bottom_fixed top_fixed");
						$('.fixed_block_position').removeClass("top_fixed bottom_fixed");
					} else {
						element.removeClass("fixed bottom_fixed top_fixed");
						$('.fixed_block_position').addClass("top_fixed");
					}
				}
			});
		} else {
			$(".fixed_block").removeClass("bottom_fixed top_fixed fixed");
			$('.fixed_block_position').removeClass("top_fixed bottom_fixed");
		}
	};
	$(window).on('resize', function(){
		if(window.screen.width >= 768){
			element.removeClass("fixed bottom_fixed top_fixed static");
			$('.fixed_block_position').removeClass("top_fixed bottom_fixed");
			initFixedBlock();
		} else {
			element.addClass('static').removeClass("fixed bottom_fixed top_fixed ");
			$('.fixed_block_position').removeClass("top_fixed bottom_fixed fixed");
		}
		element.removeClass("fixed");
	});

	initFixedBlock();
});