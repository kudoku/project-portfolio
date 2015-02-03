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
//= require masonry/jquery.masonry
//= require turbolinks
//= require_tree .


$(function() {

	$('#fullpage').fadeIn(2400, function() {
		$('.span1').animate({ left: 60 }, 'slow');
		$('.span2').fadeIn(3000, function() {
			$('.arrow').fadeIn(600, function() {});
		});
	});
	$('#animate').animate({ left: 200 }, 'slow');

	var $masonry_container = $('#masonry_container');
	// initialize
	$masonry_container.masonry({
	  columnWidth: 200,
	  gutterWidth: 0,
	  itemSelector: '.item'

	});


	$('a').click(function() {
		$("body").css("overflow", "auto");
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});

});