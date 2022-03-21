const init = () => {
    const ancor1 = $('#resume').offset().top;
    const ancor2 = $('#about').offset().top;
    const ancor3 = $('#skills').offset().top;
    function activeNavItem(){
        if($(window).scrollTop() > (ancor1 - 100)){
            $('.header__nav_item').removeClass('active');
            $('.header__nav_item:nth-child(1)').addClass('active');
        } 
        if ($(window).scrollTop() > (ancor2 - 100)) {
            $('.header__nav_item').removeClass('active');
            $('.header__nav_item:nth-child(2)').addClass('active');
        }
        if ($(window).scrollTop() > (ancor3 - 100)) {
            $('.header__nav_item').removeClass('active');
            $('.header__nav_item:nth-child(3)').addClass('active');
        }
    }
    $(window).on('scroll', function() {
        if($(window).width() >= 768){
            activeNavItem();
        }
        
    });
}
export default {
	init
};