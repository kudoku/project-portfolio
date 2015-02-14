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
//= require jquery.fullPage.min.js
//= require typed.js

//= require_tree .


$(function() {

	// fullpage animations
	$('#landing').fadeIn(2400, function() {		
		$('.typed').typed({
			strings: [" working code."],
			contentType: 'html',
			typeSpeed: 45
		});
		setTimeout(function() {
			$('.arrow').fadeIn(600, function() {});
		}, 1500);
	});

	// $('.bio').mouseenter(function() { 
	// 	console.log('enter');
	// 	// $(this).typed({
	// 	// strings: ["<h2>Fullstack RoR dev who is always looking for ways to test his skills. I simply love the \"Aha, eureka!\" moment of working code. While I'm not coding, I'm playing the violin and listening to the greats on high end audio setups.</h2>"],
	// 	// contentType: 'html',
	// 	// typeSpeed: 0
	// 	// });
	// 	$(this).width(450);
	// }).mouseleave(function() {
	// 	console.log("left");
	// 	$(this).empty();
	// 	$(this).width();
	// });

	

	// $(".bottom-right").hover(function() {
	// 	$(this).typed({
 //      strings: ["Contact"],
 //      typeSpeed: 30
 //    }); 
	// });

	
		

	// $('.example2 .anim_queue_example a')
	//   .hover(function() {
	//     $(this).stop().animate({ left: 20 }, 'fast');
	//   }, function() {
	//     $(this).stop().animate({ left: 0 }, 'fast');
	//   });


	// isotope/masonry
	var $masonry_container = $('#masonry_container');
	// init
	$masonry_container.isotope({
	  // options
	  itemSelector: '.item',
    masonry: {
      columnWidth: 25
    },

	  layoutMode: 'masonry'
	});


	$('.bio').on("click", function() {
		console.log(this);
		$(this).toggleClass('is-expanded');
		$masonry_container.isotope('layout');
	});


	// smooth scroll
	// $('.arrow a').click(function() {
	// 	$("body").css("overflow", "auto");
	// 	$('html, body').animate({
	// 		scrollTop: $( $(this).attr('href') ).offset().top
	// 	}, 500);
	// 	return false;
	// });

	$('#fullpage').fullpage({
    anchors: ['section1', 'section2']
	});

	// $('.arrow-up a').click(function() {
	// 	console.log('scrollplz');
	// 	$('body').scrollTo('#fullpage',{duration:'slow', offsetTop : '50'});
	// });




	$("div.item.medium.about-me").hover(function(){
    $(this).animate({ height: "350px" }, {duration: 600 }, {queue: false});
	}, function() {
    $(this).animate({ height: "300px" }, {duration: 600 }, {queue: false});
	});

	// $('div.item.medium.about-me').hover(function() {
	// 	// console.log('about hover');
	// 	// console.log(this);
		
	// 	$( "div.item.medium.about-me" ).animate({ "height": "105%" }, "slow", {queue: false} );
	// }, function() {
	// 	$( "div.item.medium.about-me" ).animate({ "height": "100%" }, "slow", {queue: false} );
	// });

});