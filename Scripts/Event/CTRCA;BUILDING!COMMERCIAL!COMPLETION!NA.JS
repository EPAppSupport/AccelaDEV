
if (currentUserID.indexOf('PUBLICUSER') >= -1) {
	email('delacruzja@elpasotexas.gov;ChaviraD1@elpasotexas.gov;LamasMX@elpasotexas.gov','accela@elpasotexas.gov','A new Commercial Completion Permit is submitted online, permit number is ' + capIDString + '.','A new Commercial Completion Permit is submitted online, permit number is ' + capIDString + '.');
	}

if (currentUserID.indexOf('PUBLICUSER') >= -1 && AInfo['ADA Improvements only'] == 'Yes') {
	sender = 'accela@elpasotexas.gov';
	theRecipient = 'estalajo@elpasotexas.gov;morrison-vegavx@elpasotexas.gov;delacruzja@elpasotexas.gov';
	subject = ('ADA Record Number: ' + capIDString);
	content = ('The ADA Record Number ' + capIDString + ' has been submitted');
	email(theRecipient, sender, subject, content);
	}

