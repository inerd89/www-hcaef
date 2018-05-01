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

function onMobileHamClick() {
	let $mobileHam = $('.mobile-ham'),
		$mobileNav = $('.mobile-nav')

	if ($mobileNav.hasClass('open')) {
		$mobileNav.removeClass('open')
		$mobileHam.removeClass('active')
	}
	else {
		$mobileHam.addClass('active')
		$mobileNav.addClass('open')
	}
}

$( () => {
	// setInterval( checkScrollPosition, 10)
	$(window).on('scroll', checkScrollPosition)
	$('.mobile-ham').on('click', onMobileHamClick)
})
