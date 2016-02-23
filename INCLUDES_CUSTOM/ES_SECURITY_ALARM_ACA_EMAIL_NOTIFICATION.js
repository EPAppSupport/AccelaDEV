function ES_SECURITY_ALARM_ACA_EMAIL_NOTIFICATION() {

	sender = 'accela@elpasotexas.gov';
	recipient = 'businesslicense@elpasotexas.gov;delafuentejr@elpasotexas.gov';
	subject = ('Record Number: ' + capIDString + ' Has been renewed');
	body = ('Record Number: ' + capIDString + ' Has been renewed');
	email(recipient, sender, subject, body);

}
