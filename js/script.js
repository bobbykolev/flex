(function resize() {
	var windowHeight = window.innerHeight,
		footerHeight = 40;

	document.getElementById('wrapper').style.height = windowHeight - (footerHeight) + 'px';
})();
