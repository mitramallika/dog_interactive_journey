$("body").on("click", ".start-btn,.steps-btn", function (e) {
	e.preventDefault();
	const myPath = $(this),
		mySlide = myPath.data('id'),
		mySlideBackground = mySlide + "-background",
		mySlideColor = myPath.data('color');
	$("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor);
	$("#" + mySlide).addClass('active').css("background-color", mySlideColor);
	$('html, body').animate({
		scrollTop: $("#" + mySlideBackground).offset().top
	}, 400);
});

$("body").on("click", ".restart-btn", function (e) {
	e.preventDefault();
	$(".hide").removeClass('active');
	scrollyUp();
});

function scrollyUp() {
	$("html, body").animate({
		scrollTop: $(".intro").offset().top + "px"
	});
}