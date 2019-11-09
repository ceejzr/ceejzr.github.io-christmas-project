

setInterval(()=>{
	const countdownElement = document.querySelector('.countdown');
	const subCountdownElement = document.querySelector('.countdown-secondary');
	const navbarCountdownElement = document.querySelector('.countdown-navbar');


	const duration = moment.duration(moment("December 25, 2019").diff( moment() ));
	
	const months = duration.months();
	const days   = duration.days() + months*30;

	const hours   = duration.hours();
	const minutes = duration.minutes();
	const seconds = duration.seconds();


	countdownElement.innerHTML = ( days > 0 ? days + " days " : hours + ":" + minutes + ":" + seconds + "s" );
	subCountdownElement.innerHTML =( days > 0 ? hours + " h " + minutes + " m " + seconds + " s" : "" );
	navbarCountdownElement.innerHTML = ( ( days > 0 ? days + " days " : "" ) + hours + " hours, " + minutes + " min " + seconds + " s" );

},1000);


$(window).scroll(function () {
	if ($(window).scrollTop() >= 200) {
	    $('.navbar').addClass('navbar-scrolled');
	  } else {
	    $('.navbar').removeClass('navbar-scrolled');
	}
	if ($(window).scrollTop() >= 100) {
	    $('.countdown').addClass('countdown-hide');
	    $('.countdown-secondary').addClass('countdown-hide');
	} else {
	    $('.countdown').removeClass('countdown-hide');
	    $('.countdown-secondary').removeClass('countdown-hide');
	}
});