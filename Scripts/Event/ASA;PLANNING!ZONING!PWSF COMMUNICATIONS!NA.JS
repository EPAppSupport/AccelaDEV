
if (AInfo['Fast Track'] == 'Yes') {
	sender = 'accela@elpasotexas.gov';
	theRecipient = 'chavezj1@elpasotexas.gov;salloumam@elpasotexas.gov;mcelroyms@elpasotexas.gov;rubioax@elpasotexas.gov';
	subject = ('Planning Zoning Record Number: ' + capIDString);
	content = ('The Planning Zoning Record Number ' + capIDString + ' has been submitted'+ '<BR><BR>' +'This item needs to be fast tracked in order to meet FCC regulations on Personal Wireless Service facilities');
	email(theRecipient, sender, subject, content);
	}

