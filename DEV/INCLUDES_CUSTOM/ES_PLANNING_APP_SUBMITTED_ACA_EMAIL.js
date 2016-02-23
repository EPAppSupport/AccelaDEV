function ES_PLANNING_APP_SUBMITTED_ACA_EMAIL() {

	emailAddr = undefined;
	if (publicUser) {
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		lastName = conArray[y].getPeople().lastName;
		firstName = conArray[y].getPeople().firstName;
		middleName = conArray[y].getPeople().middleName;
		userObj = aa.person.getUser(firstName, middleName, lastName).getOutput();
		sender = 'accela@elpasotexas.gov';
		subject = ('Your Subdivision Application' + capIDString + ' has been submitted');
		emailBody = 'Your Subdivision application has been submitted.<BR> We will start processing it and will notify you of any updates.';
	}

	if (emailAddr != undefined && conType == 'APPLICANT/DEVELOPER') {
		email(emailAddr, sender, subject, emailBody);
	}

}
