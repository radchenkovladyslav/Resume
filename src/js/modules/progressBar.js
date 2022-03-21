const init = () => {
	function updateProgress(num1, num2){
		var percent = Math.ceil( num1 / num2 * 100 ) ;
		
		if(percent > 100){
			percent = 100;
		}
		if(percent < 1){
			$('.progress_container').addClass('hide');
		}else{
			$('.progress_container').removeClass('hide');
		}
		

		$('#progress').text(percent + '%');
	  }
	  
	  window.addEventListener('scroll', function(){
		var top = window.scrollY;
		var height = document.body.getBoundingClientRect().height - window.innerHeight;
		updateProgress(top, height);
	  });
};

export default {
	init
};