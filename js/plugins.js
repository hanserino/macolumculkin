// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function() {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());




/*  ================================================================================
 Modernizr Tests
 Custom modernizr tests tests
 ================================================================================  */
// Column Span - test for browser ie10
Modernizr.addTest('ie10', function() {
	return !!navigator.userAgent.match(/MSIE\s([\d]+)/);
});

// Column Span - test for support of column span property
Modernizr.addTest('csscolumnspan', function() {
	return Modernizr.testAllProps('columnSpan');
});

// Hover Support - test for support of column span property
Modernizr.addTest('hover', function() {
	var ua = navigator.userAgent.toLowerCase();
	return !(ua.match(/(ipad|iphone|ipod)/i) || (ua.indexOf("android") > -1));
});

// Retina, anything above 1 for pixel ratio is determined to be retina
Modernizr.addTest('retina', function() {
	return ((typeof(window.devicePixelRatio) != 'undefined') && (window.devicePixelRatio > 1));
});

// If it doesn't support svg lets load the icon fallback file
Modernizr.load({
	test: Modernizr.svg,
	yep : console.log('supports svg'),
	nope: '/css/icons.fallback.css'
});