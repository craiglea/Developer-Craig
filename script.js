$(document).ready(function() {

	// $('#slides').superslides({
	// 	animation: 'fade',
	// 	play: 3500,
	// 	pagination: false
	// });


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});




    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinish = false;
    $(window).scroll(function() {

    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

		 	$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#0e4379',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 14,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


    	}


    	if(!countUpFinish && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
    		$(".counter").each(function() {
		    	var element = $(this);
		    	var endVal = parseInt(element.text());

		    	element.countup(endVal);
		    })

		    countUpFinish = true;
	    }


    });

    $(function () {
    	$(document).scroll(function(){
    		var $nav = $("#mainNavbar");
    		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    	});
    });


    // $("#navigation li a").click(function(e) {
    // 	e.preventDefault();

    // 	var targetElement = $(this).atter("href");
    // 	var targetPosition = $(targetElement).offset().top;
    // 	$("html, body").animate({ scrollTop: targetPosition - 50}, "slow")
    // });



    // const nav = $("#navigation");
    // const navTop = nav.offset().top; 

    // $(window).on("scroll", stickyNavigation);

    // function stickyNavigation() {

    // 	var body = $("body");

    // 	if($(window).scrollTop() >= navTop ) {
    // 		body.addClass("fixedNav")
    // 	}
    // 	else {
    // 		body.removeClass("fixedNav")
    // 	}







    // }

  


});









