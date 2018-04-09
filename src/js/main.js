import $ from 'jquery'

function checkScrollPosition() {
	let $header = $('.site-header'),
		headerHeight = $header.height(),
		pos = $(window).scrollTop()

	if (pos > headerHeight) {
		$header.addClass('scrolled')
	}
	else {
		$header.removeClass('scrolled')
	}
}

$( () => {
	// setInterval( checkScrollPosition, 10)
	$(window).on('scroll', checkScrollPosition)
})
