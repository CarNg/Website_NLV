$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'over'
			},
			thumbs	: {
				width	: 60,
				height	: 60
			}
		}
	});
});