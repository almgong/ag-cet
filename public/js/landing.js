/**
 * All JS required for the landing page.
 * JQ must be loaded before.
**/

/// Functions ///



/// After page load ///

$(function() {

	/** 
	* Initializes all waypoints for the fadeIn / animation effects
	*
    **/
	function setWayPoints() {
		var row2wp = new Waypoint({
			element: $('#row2')[0],
			handler:function(d) {
				
				$('#row2').css('visibility', 'visible');
				$('#row2').addClass('animated fadeIn delay-1');
				$('#row2 .pitch-image').addClass('fadeInUp delay-2');
				
			},
			offset:500
		});

		var row3wp = new Waypoint({
			element: $('#row3')[0],
			handler:function(d) {
				
				$('#row3').css('visibility', 'visible');
				$('#row3').addClass('animated fadeIn delay-1');
				$('#row3 .pitch-image').addClass('fadeInLeft delay-2');
				
			},
			offset:500
		});

		var row4wp = new Waypoint({
			element: $('#row4')[0],
			handler:function(d) {
				
				$('#row4').css('visibility', 'visible');
				$('#row4').addClass('animated fadeIn delay-1');
				$('#row4 .pitch-image').addClass('fadeInRight delay-2');
				
			},
			offset:500
		});

		var row5wp = new Waypoint({
			element: $('#row5')[0],
			handler:function(d) {
				
				$('#row5').css('visibility', 'visible');
				$('#row5').addClass('animated fadeIn delay-1');
				
			},
			offset:500
		});


	}

	setWayPoints();

	});
