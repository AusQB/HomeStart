//----- Initialize Variables ------//

var defaultAnimation = 'easeOutCubic',
	defaultSpeed     = 1000,
	isSafari		 = false,
	iOSXS			 = 0,
	isMobile		 = jQuery.browser.mobile,
	_window			 = $(window),
	_document		 = $(document),
	_html 		 	 = $('html'),
	_body			 = $('body'),
	_htmlbody		 = $('html, body'),
	resizeImages	 = $('.homes-list-image > img, .home-list .image img, .swipe .image img'),
	wrapper 		 = $('.wrapper'),
	header			 = $('.header'),
	footer			 = $('.footer'),
	btt				 = $('.btt'),
	assets			 = '/template/default_site/assets/'
	tvc_url			 = assets+'media/tvc-1';

if(navigator.userAgent.match(/(iPod|iPhone)/) && navigator.userAgent.match(/Safari/) && navigator.userAgent.match(/Version/)) {
	isSafari = true;
	iOSXS = 60;
}

//----- Initialize ------//

if(isMobile) {
	_document.on('pageinit', initialize);
} else {
	_document.ready(initialize);
}

//----- Start Common ------//

function initialize() {
	
	resizeImages.resizeToParent();
	
	$('form').not('#search-form').each(function() {
		//$(this).validate();
		//$(this).removeAttr('novalidate');
	});

	$('form').each(function() {
		$(this).attr('data-ajax', 'false');
	});
	
	jQuery.validator.addMethod("number", function(value, element) {
		return /^\+?[0-9(),.-]+$/.test(value);
	}, "Please only enter numbers.");


	$('.your_chance_to_win').validate({
		rules: {
			phone: {
				required: true,
				number: true
			}
		},
		messages: {
			phone: {
				required: "Please enter numbers only."
			}	
		}
	});
	
			
	$('.main-nav > ul > li').hover(function() {
		$(this).find('> ul').stop(true, true).slideDown(400, 'easeOutBack');
	}, function() {
		$(this).find('> ul').stop(true, true).slideUp(400, 'easeInQuad'); 		
	});
	
	_window.resize(function() {
		// $.colorbox.resize();
	});
	
	$('.view-more-slider ul').not('.no-slider').bxSlider({
		auto: true,
		pause: 5000,
		controls: false
	});
	
	$('.view-floorplan').colorbox({
		inline: true,
		scrolling: false,
		fixed: true,
		close: '<a class="cbox-close" href="#"></a>',
		innerWidth: $(window).width(),
		innerHeight: $(window).height(),
		maxWidth: '100%',
		maxHeight: '100%'
	});
	
	/*$('.finance-faq li a.colorbox').colorbox({
		inline: true,
		scrolling: isMobile ? true : false, 
		current: '',
		previous: '<a class="btn-green small" href="#">Back</a>',
		next: '<a class="btn-green" href="#">Next</a>',
		close: '<a class="cbox-close" href="#"></a>',
		current: isMobile ? '' : '{current}/{total}',
		fixed: true,
		loop: false,
		width: isMobile ? '100%' : '80%',
		height: isMobile ? '100%' : 'auto',
		maxWidth: isMobile ? '' : '1080px'
	});*/
	
	$('.noUiSlider').noUiSlider({
		range: [0, 500000],
		start: [0, 500000],
		step: 10000,
		handles: 2,
		connect: true,
		margin: 40,
		orientation: 'horizontal',
		serialization: {
		   	to: [$('#min-price'), $('#max-price')],
			resolution: 1
	   }
	});
	
	$('.filter-results-reset').on('click', function() {
		$('.noUiSlider').val([0, 500000]);
	});
	
	$('.location-button').on('click', function() {
		codeAddress($(this).data());
		$('.location-button').removeClass('current');
		$(this).addClass('current');					 
	});
	
	var $els = $('iframe.facebook, .podcast-options embed');
    $('iframe').not($els).each(function() {
		$(this).removeAttr('width');
		$(this).removeAttr('height');
    });

    $('#suburb-list li a').click(function(e) {
    	e.preventDefault();
    	var suburb = $(this).parent().data();
    	zoomMarker(suburb['index']);
    	$('#freeform_suburb_of_interest option').each(function() {
    		if($(this).data('index') == suburb['index']) {
    			$(this).attr('selected','selected');
    		}
    	});
    });
	
}

//----- End Common ------//

//----- Start Mobile Only ------//

if(isMobile) {
	
_document.on('pageinit', function() {

	$('#freeform_do_you_own_a_home_of_your_own_1').click(function() {
		window.location.replace(window.location.href+'/sorry');
	});
	
	// FastClick.attach(document.body);

	$('#home-video .no-mobile, #home-video #tvc-dog-d').remove();
	
	var scrollable = document.getElementById("menu-container");
	new ScrollFix(scrollable);
	
	$('.ui-panel .ui-panel-inner').css({
		'height': (window.orientation == 0 && isSafari) ? $(window).height() + iOSXS : $(window).height()
	});
	
	// $('#home-video').html('<video id="tvc-dog" controls preload><source src="/template/default_site/assets/media/tvc-1.mp4" type="video/mp4"><source src="/template/default_site/assets/media/tvc-1.webm" type="video/webm"><source src="/template/default_site/assets/media/tvc-1.ogv" type="video/ogg">Your browser does not support the video tag.</video>');

	_window.resize(function() {
		
		$('.finance-faq li a').colorbox.resize({
			width: '100%',
			height: '100%'	
		});
		
	});
	
	_window.on('orientationchange', function() {
		resizeImages.resizeToParent();
	});
	
	/*_window.scroll(function() {
		
		var sTop 	= _window.scrollTop(),
			wHeight = _window.height(),
			dHeight = _document.height(),
			hHeight = header.height(),
			diff	= (sTop + wHeight) - (dHeight - iOSXS);
		
		// $('#logo').empty().html('<p>'+sTop+'</p><p>'+wHeight+'</p><p>'+dHeight+'</p><p>'+iOSXS+'</p><p>'+diff+'</p><p>'+window.orientation+'</p>');
		
		if(isSafari) {
			if((diff >= 0 && window.orientation == 0) || (diff >= 60 && window.orientation != 0)) {
				btt.css('top', hHeight);
			} else {
				btt.css('top', 0);
			}
		} else {
			if(diff >= 0) {
				btt.css('top', hHeight);
			} else {
				btt.css('top', 0);
			}
		}
		
		$('.ui-panel .ui-panel-inner').css('height', wHeight);
		
	});*/
	
});

_document.on('pageinit', '#contact-map', function() {
	gMaps();
});

_document.on('pagebeforeshow', function() {
	$('.ui-icon-arrow-r').html('<i class="icon-angle-right"></i>');
});

_document.delegate('.ui-panel-content-wrap-open', 'touchmove', false);

_document.delegate('.btt, .bttf', 'click', function () {
	_htmlbody.animate({
		scrollTop: 0
	}, defaultSpeed, defaultAnimation, function() {
		//_htmlbody.clearQueue();
	});
});

	
var playing;

_document.delegate('.hover-gif', 'tap', function() {
	if(!playing) {
		playing = true;
		$(this).attr('src', '/template/default_site/assets/img/'+$(this).data('src')+'.gif');
		setTimeout(function() {
			playing = false;
		}, 3500);
	}
});


//----- End Mobile Only ------//

} else {
	
//----- Start Desktop Only -----//

_document.ready(function() {

	var promotionColorbox = $('#freeform_do_you_own_a_home_of_your_own_1').colorbox({
		html: '<h2 style="padding:4em;">Sorry, this promotion is not available to home owners.</h2>',
		fixed: true,
		width: 'auto',
		height: 'auto',
		onClosed: function() {
			window.location.reload()
		}
	});

	positionFooter();
	
	gMaps();

	// $('form').each(function() {
	// 	if($(this).find('#freeform_hear_about')) {
	// 		$(this).validate({
	// 			rules: {
	// 				hear_about: {
	// 					selectCheck: true
	// 				}
	// 			}
	// 		});
	// 		$.validator.addMethod('selectCheck', function(value) {
	// 			return (value != '0');
	// 		}, 'You must select an option');
	// 	}
	// });
	
	/*$('html *').each(function() {
		if($(this).css('color')) {
			console.log('1px ' + $(this).css('color'));
			$(this).css('-webkit-text-stroke', '0.5px ' + $(this).css('color'));
		}
	});*/

	$('#home-video mobile, #home-video #tvc-dog-m').remove();
	
	var url = window.location.href.split('/'),
		lastSegment = url[url.length-1],
		hash = lastSegment.split('#');
	
	if(hash.length > 1 && hash[0] == 'finance' && hash[1]) {
		$.colorbox({
			href: '#'+hash[1],
			inline: true,
			scrolling: false, 
			current: '',
			previous: '<a class="btn-green small" href="#">Back</a>',
			next: '<a class="btn-green" href="#">Next</a>',
			close: '<a class="cbox-close" href="#"></a>',
			current: '{current}/{total}',
			fixed: true,
			loop: false,
			width: '80%',
			height: 'auto',
			maxWidth: '1080px'
		});
	}
	
	/*$('#home-video a').colorbox.on('cbox_complete', function() {
		slider.stopAuto();
		$('#tvc-dog').get(0).play();
	}).on('cbox_closed', function() {
		slider.startAuto();
		$('#tvc-dog').get(0).pause();
	});*/

	// var tvc_html = '',
	// 	tvc_dog  = $('#tvc-dog');

	// tvc_html += '<video id="tvc-dog" controls preload>';
	// tvc_html += '<source data-type="mp4" src="'+tvc_url+'.mp4" type="video/mp4">';
	// tvc_html += '<source data-type="webm" src="'+tvc_url+'.webm" type="video/webm">';
	// tvc_html += '<source data-type="ogv" src="'+tvc_url+'.ogv" type="video/ogg">';
	// tvc_html += '</video>';
	
	// $('#tvc').html(tvc_html);

	// tvc_dog.children('source').each(function() {
	// 	$(this).attr('src', tvc_url+'.'+$(this).data('type'));
	// });
	// var timer = setInterval(function() {
	// 	clearInterval(timer);
	// 	tvc_dog[0].load();
	// })
	// $('#tvc-dog')[0].load();
	
	if(navigator.userAgent.match(/Safari/)) {
		$('#tvc').hover(
		function() {
			$(this).attr('controls','controls');
		},
		function() {
			$(this).removeAttr('controls')
		});
	}
	
	var slider = $('#slideshow').bxSlider({
		auto: true,
		pause: 5000,
		controls: false,
		useCSS: false
	});
	
	$('.finance-faq li a.colorbox').colorbox({
		inline: true,
		scrolling: false, 
		current: '',
		previous: '<a class="btn-green small" href="#">Back</a>',
		next: '<a class="btn-green" href="#">Next</a>',
		close: '<a class="cbox-close" href="#"></a>',
		current: '{current}/{total}',
		fixed: true,
		loop: false,
		width: '80%',
		height: 'auto',
		maxWidth: '1080px'
	});
	
	/*var container = $('.testimonials-container');
	container.masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.testimonial',
		gutter: '.gutter-sizer'
	});*/
	
	var playing;
	
	$('.hover-gif').on('mouseenter', function() {
		if(!playing) {
			playing = true;
			$(this).attr('src', '/template/default_site/assets/img/'+$(this).data('src')+'.gif');
			setTimeout(function() {
				playing = false;
			}, 3500);
		}
	});
	
	_window.resize(function() {
		
		resizeImages.resizeToParent();
		positionFooter();
		
		// $('#home-video a').colorbox.resize({
  //           width: '720px',
  //           height: '576px',
  //           innerWidth: '720px',
  //           innerHeight: '576px'
  //       });
		
		$('.finance-faq li a.colorbox').colorbox.resize({
			width: '80%',
			height: 'auto'	
		});
		
	});

	$(document).on('cbox_complete', function() {

		// var video_html = $('#cboxLoadedContent').html();

		// $('#cboxLoadedContent').html('');

		// $('#cboxLoadedContent').html(video_html);

	});

	_window.load(function() {

		// videojs('#tvc-dog-d',
		// 	{
		// 		'controls': true,
		// 		'autoplay': false,
		// 		'preload': 'auto'
		// 	},
		// 	function() {

				// Replaced for $500,000 thing
				$('#home-video a').colorbox({
					inline: true,
					scrolling: false, 
					closeButton: false,
					fixed: true,
					width: '80%',
					height: 'auto',
					maxWidth: '1280px',
					maxHeight: '720px',
					onComplete: function() {
						slider.stopAuto();
						$('#tvc-dog-d video').get(0).play();
						$('#cboxContent').css('background','transparent');
					},
					onCleanup: function() {
						slider.startAuto();
						$('#tvc-dog-d video').get(0).pause();
					}
				});
				
		// 	}
		// );

	});
	
});

}

//----- End Desktop Only -----//

//----- Helper Functions -----//

function positionFooter() {

	var wHeight = _window.outerHeight(),
		hHeight = header.outerHeight(),
		fHeight = footer.outerHeight(),
		bHeight = $('.breadcrumbs').outerHeight();
	
	if(isMobile) {
		wrapper.css('min-height', wHeight - (hHeight + fHeight + iOSXS));
	} else {
		wrapper.css('min-height', wHeight - (hHeight + fHeight + bHeight * 2));
	}
	
}

google.maps.visualRefresh = true;

var map,
	locations = [],
	markers = [],
	infoWindows = [],
	geocoder = new google.maps.Geocoder();
		
function gMaps() {
	
	/* ---- Google Maps ---- */
	$('.gmap').each(function() {
		var id = $(this).attr('id');
		if(id == 'gmap-contact-us') {
			$('.location-button').each(function() {
				locations.push($(this).data());
			});	
		} else if(id == 'gmap-packages') {
			$('#suburb-list li').each(function() {
				locations.push($(this).data());
			});	
		} else {
			locations.push($(this).data());
		}
		build_map(id, locations);
	});
	
}

function build_map(container, locations) {
	
	// Create an array of styles.
	var styles = [
		{
		stylers: [
			//{ hue: "#0565af" },
			{ hue: '#96c11f' },
			{ saturation: -20 }
		]
		},
		{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [
			{ lightness: 100 },
			{ visibility: 'simplified' }
		]
		},
		{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
			{ visibility: 'on' }
		]
		},
		{
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [
			{ color: '#4A96D2' },
			{ saturation: -20 },
			{ lightness: 20 }
		]
		},
		{
		featureType: 'water',
		elementType: 'labels.text',
		stylers: [
			{ color: '#FFFFFF' }
		]
		},
		{
		featureType: 'water',
		elementType: 'labels.text.stroke',
		stylers: [
			{ visibility: 'off' }
		]
		}
	];

	var styledMap = new google.maps.StyledMapType(styles,{name: 'Styled Map'});

	var thisLatLng = null;
	
	var coords = locations[0]['coords'].split(',');
	thisLatLng = new google.maps.LatLng(coords[0],coords[1]);
	
	map = new google.maps.Map(document.getElementById(container),{
		zoom: 15,
		disableDefaultUI: true,
		center: thisLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControl: true
	});
	
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	
	var iconBase = '/template/default_site/assets/img/pin.png';
	var markerImage = {
		url: iconBase,
		scaledSize: new google.maps.Size(40,58),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(20,58)
	};

    var i;

	for (i = 0; i < locations.length; i++) {  
		
		var title   = locations[i]['title'],
			coords  = locations[i]['coords'].split(','),
			street  = locations[i]['street'],
			suburb  = locations[i]['suburb'],
			phone   = locations[i]['phone'],
			fax     = locations[i]['fax'],
			index	= locations[i]['index']-1;

		var markerOptions = {
			position: new google.maps.LatLng(coords[0], coords[1]),
			map: map,
			icon: markerImage,
			animation: google.maps.Animation.DROP,
			optimized: false,
			index: index
		};
		
		markers[i] = new google.maps.Marker(markerOptions);
		
		var contentString = '';
		
		if(title && street && suburb) {
			contentString += '<div class="map-content"><h3>'+title+'</h3><p>'+street+'<br>'+suburb+'</p>';
			if(phone) contentString += '<p><strong>P:</strong>'+phone+'</p>';
			if(fax) contentString += '<p><strong>F:</strong>'+fax+'</p>';
			contentString += '</div>';
		} else if(suburb) {
			contentString += '<div class="map-content"><h3>'+suburb+'</h3></div>';
		}
	
		infoWindows[i] = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 200
		});
	
		google.maps.event.addListener(markers[i], 'click', function(i) {
			return function() {
				closeAllInfoWindows();
				infoWindows[i].open(map, markers[i]);
			}
		}(i));
		
	}

	if(locations.length > 3) {

		var bounds = new google.maps.LatLngBounds();
		
		for(i=0;i<markers.length;i++) {
			bounds.extend(markers[i].getPosition());
		}

		map.fitBounds(bounds);

	}
	
	/*map[container]['homeLatLng'] = thisLatLng;
	map[container]['markers'] = [];
	map[container]['markers'].push(
		new google.maps.Marker({
			position: thisLatLng,
			icon: image,
			map: map[container]
		})
	);*/
	
	$('#'+container).css('background-image','none');
	
}

function closeAllInfoWindows() {
	for (var i=0;i<infoWindows.length;i++) {
		infoWindows[i].close();
	}
}

function zoomMarker(i) {
	closeAllInfoWindows();
	google.maps.event.trigger(markers[i-1], 'click');
	map.setZoom(11);
	map.panTo(markers[i-1].position);
}

function codeAddress(data) {
	
	var coords  = data['coords'].split(','),
		street  = data['street'],
		suburb  = data['suburb'],
		address = street + ' ' + suburb;
		
	geocoder.geocode( { 'address': address}, function(results, status) {
		
		if (status == google.maps.GeocoderStatus.OK) {
						
			map.setCenter(results[0].geometry.location);
	
			// infoWindows[i].open(map, markers[i]);
	
		} else {
			// alert("Geocode was not successful for the following reason: " + status);
		}
		
	});
	
}