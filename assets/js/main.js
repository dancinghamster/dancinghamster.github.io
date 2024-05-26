/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});



			
})(jQuery);

var ham = document.getElementById('ham');
var documentContainer = document.documentElement; // Change this if you have a specific container

var rotationX = 0; // Initialize rotation variables for desktop
var rotationY = 0; // Initialize rotation variables for mobile
var SCALE_X = 8; // Adjust these values for the desired rotation range for desktop
var SCALE_Y = 16; // Adjust these values for the desired rotation range for mobile
var direction = 1; // Variable to track the direction of rotation

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

documentContainer.onblur = function() {
  mouseHover = false;
};

documentContainer.onfocus = function() {
  mouseHover = true;
};
function hamDance(e) {
	var ham = document.getElementById('ham');
	rotateHam(ham, e);

	var ham2 = document.getElementById('ham2');
	rotateHam(ham2, e);

	var ham2 = document.getElementById('ham3');
	rotateHam(ham3, e);

	var ham2 = document.getElementById('ham4');
	rotateHam(ham4, e);

	var hammini = document.getElementById('hammini');
	rotateHam(hammini, e);
  }
  function rotateHam(ham, e){
	var rect = ham.getBoundingClientRect();
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
	var mousePosition = { x, y };
	var hamSize = {
	  width: ham.offsetWidth || 0,
	  height: ham.offsetHeight || 0,
	};
	ham.style.transform = `perspective(1000px) rotateX(${
	  (mousePosition.y / hamSize.height) * -(SCALE_Y * 2) + SCALE_Y
	}deg) rotateY(${
	  (mousePosition.x / hamSize.width) * (SCALE_X * 2) - SCALE_X
	}deg) translateZ(10px)`;
  }
  function hamDanceMobile() {
	rotationY += 0.2 * direction; 
  
	if (rotationY >= 25 || rotationY <= -25) {
	  direction *= -1;
	}
  
	ham.style.transform = `perspective(1000px) rotateY(${rotationY}deg) translateZ(10px)`;
  
	requestAnimationFrame(tiltMobile); 
  }
  
  if (isMobileDevice()) {
	hamDanceMobile();
  } else {
	documentContainer.addEventListener('mousemove', hamDance);
  
	documentContainer.onmouseout = function() {
	  mouseHover = false;
	  ham.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
	};
  
	documentContainer.onmouseover = function() {
	  mouseHover = true;
	};
  }