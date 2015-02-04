// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require isotope.pkgd.js
//= require typed.js
//= require turbolinks
//= require_tree .


$(function() {

	$('#fullpage').fadeIn(2400, function() {
		
		$('span').typed({
			strings: [" working code."],
			contentType: 'html',
			typeSpeed: 45
		});
		setTimeout(function() {
			$('.arrow').fadeIn(600, function() {});
		}, 1500);
	});

	// $(".bottom-right").hover(function() {
	// 	$(this).typed({
 //      strings: ["Contact"],
 //      typeSpeed: 30
 //    }); 
	// });

	if($(".top-center").hover()) {
		// $(this).typed({
		// 	strings: ["Contact"],
		// 	typeSpeed: 30
		// });
		console.log('hover');
		// alert('hover');


	}
	else {
		console.log('unhover');
	}
	
		

	$('.example2 .anim_queue_example a')
	  .hover(function() {
	    $(this).stop().animate({ left: 20 }, 'fast');
	  }, function() {
	    $(this).stop().animate({ left: 0 }, 'fast');
	  });



	var $masonry_container = $('#masonry_container');
	// init
	$masonry_container.isotope({
	  // options
	  itemSelector: '.item',
    masonry: {
      columnWidth: 100
    },

	  layoutMode: 'masonry'
	});

	$('.arrow a').click(function() {
		$("body").css("overflow", "auto");
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});


	$('.ihave').hover(function() {
		
	});

});