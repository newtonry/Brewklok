var alertMessage = function(message, type) {
	$('nav').prepend('<div id="alert-message" class="alert alert-' + type + '">' + message + '</div>');
	$('#alert-message').fadeIn('fast').delay(1000).fadeOut('fast', function() {
		$('#alert-message').remove();
	});
}