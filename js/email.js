(function () {
	emailjs.init('');
})();

if ($('#email-form').length) {
	$('#submit').click(function () {
		var username = $('#email-form .username').val();
		var email = $('#email-form .email').val();
		var message = $('#email-form .message').val();
		var subject = $('#email-form .subject').val();


		if (username == '' || email == '' || subject == '') {
			$('#email-form .response').html('<div class="failed">Please fill the required fields.</div>');
			return false;
		}
		$('#email-form .response').html('<div class="text-info"><img src="images/preloader.gif"> Loading...</div>');
		//Default
		const serviceID = '';
		const templateID = '';

		var contactParams = {
			username: username,
			mail: email,
			subject: subject,
			message: message,
		};
		emailjs.send(serviceID, templateID, contactParams)
			.then(function () {
				console.log('Mail Sent !');
				$('#email-form .response').html('<div class="success">Email has been sent successfully.</div>');
			}, function (error) {
				console.log('FAILED...', error);
				$('#email-form .response').html('<div class="error">Error: Email has not been sent.');
			});
	});
}
