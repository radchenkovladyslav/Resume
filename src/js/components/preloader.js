const init = () => {
   
    window.onload = function () {
        if (!sessionStorage.alreadyClicked) {
            $('body').css({
                'position': 'fixed'
            });
            $('.preloader').addClass('is-show');
            const rocketBoy = $('.preloader_rocketboy');
            const rocketBoyHeight = $('.preloader_rocketboy').height();
            const rocketBoyWidth = $('.preloader_rocketboy').width();
            rocketBoy.css({
                'left': -rocketBoyHeight,
                'bottom': -rocketBoyWidth
            });
            setTimeout(() => {
                rocketBoy.css({
                    'left': $(window).width(),
                    'bottom': $(window).height() 
                });
                function defaultSetting(){
                    $('body').css({
                        'position': 'relative'
                    });
                    $('.preloader').removeClass('is-show');
                };
                setTimeout(defaultSetting, 3000);
            }, 2000);
        
        sessionStorage.alreadyClicked = 1;
        }
    }
};
export default {
	init
};