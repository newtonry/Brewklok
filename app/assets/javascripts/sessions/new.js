var loginAsGuest = function() {
	$("#user_username").val('guest');
	$("#user_password").val('123456');
	$("#login_form").submit().delay(1000);
};