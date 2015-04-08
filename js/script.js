(function resize() {
	var windowHeight = window.innerHeight,
		footerHeight = 40,
		wrapper = document.getElementById('wrapper');

	wrapper.style.height = windowHeight - (footerHeight) + 'px';
	//wrapper.style['overflow-y'] = 'scroll';
})();
