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
		$mobileNav = $('.mobile-nav'),
		$siteHeader = $('.site-header')

	if ($mobileNav.hasClass('open')) {
		$mobileNav.removeClass('open')
		$mobileHam.removeClass('active')
		$siteHeader.removeClass('mobile-open')
	}
	else {
		$mobileHam.addClass('active')
		$mobileNav.addClass('open')
		$siteHeader.addClass('mobile-open')
	}
}

$( () => {
	// setInterval( checkScrollPosition, 10)
	$(window).on('scroll', checkScrollPosition)
	$('.mobile-ham').on('click', onMobileHamClick)
})
