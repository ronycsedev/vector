
(function($){
	$(function(){








        

        if ($('.client-wrap').length) {
            $('.client-wrap').marquee({
                direction: 'left',
                duration: 60000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }

        if($('.testimonial-item-wrap').length){
            $('.testimonial-item-wrap').slick({
                dots: true,
                arrows: false,
                autoplay:true,
                autoplaySpeed:5000,
                infinite: true,
                navigation:false,
                speed: 300,
                slidesToShow:1,
                slidesToScroll: 1,
                fade: true,
            });
        }
    
        if ($('.blog-item-wrap').length) {
            var $slider = $('.blog-item-wrap');
            $slider.slick({
                arrows: true,
                dots: false,
                infinite: false,
                slidesToShow: 2,
                centerMode: false,
                vertical: false,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 570,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
    
                ]
            });
    
            $(window).on('resize', function () {
                $('.blog-item-wrap').slick('resize');
    
            });
            
        }
		
	})// End ready function.
   
    

	

})(jQuery)

