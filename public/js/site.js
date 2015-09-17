/**
 * All JS required for the entire site.
 * JQ must be loaded before.
**/

/// Functions ///



/// After page load ///

$(function() {

	var handler = function() {

		//for less weight on window
		setTimeout(function() {
			if(!$('#row2 .pitch-desc').hasClass('animated') && $('#row2').visible(true)) {
				$('#row2').addClass('animated fadeIn delay-1');
				$('#row2 .pitch-image').addClass('fadeInUp delay-2');
			}

			if(!$('#row3 .pitch-desc').hasClass('animated') && $('#row3').visible(true)) {
				$('#row3').addClass('animated fadeIn delay-1');
				$("#row3 .pitch-image").addClass('fadeInLeft delay-2');
			}

			if(!$('#row4 .pitch-desc').hasClass('animated') && $('#row4').visible(true)) {
				$('#row4').addClass('animated fadeIn delay-1');
				$("#row4 .pitch-image").addClass('fadeInRight delay-2');
			}

			if(!$('#row5 .pitch-desc').hasClass('animated') && $('#row5').visible(true)) {
				$('#row5').addClass('animated fadeIn delay-1');
				
			}

		}, 50);
	};


	//bind listener
	$(window).on('DOMContentLoaded load resize scroll', handler); 

	});
