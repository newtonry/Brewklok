var alertMessage = function(message, type) {
	$('nav').prepend('<div id="alert-message" class="alert alert-' + type + '">' + message + '</div>');
	$('#alert-message').fadeIn('fast').delay(2000).fadeOut('slow', function() {
		$('#alert-message').remove();
	});
}