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
			if(!$('#row2').hasClass('animated') && $('#row2').visible(true)) {
				console.log('row 2 in viewport');
				$('#row2').addClass('animated fadeIn delay-1');
			}

			if(!$('#row3').hasClass('animated') && $('#row3').visible(true)) {
				console.log('row 3 in viewport');
				$('#row3').addClass('animated fadeIn delay-2');
			}

		}, 50);
	};


	//bind listener
	$(window).on('DOMContentLoaded load resize scroll', handler); 

	});
