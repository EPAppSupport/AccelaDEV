function esSubdivisionEmailPreMylarComplete() {

	conType = conArray[y].getPeople().contactType;
	emailAddr = conArray[y].getPeople().email;
	lastName = conArray[y].getPeople().lastName;
	firstName = conArray[y].getPeople().firstName;
	middleName = conArray[y].getPeople().middleName;
	sender = 'accela@elpasotexas.gov';
	subject = 'Pre-Mylar Review for application ' + capIdString + ' is complete';
	emailBody = 'The pre-cloth has been reviewed by city staff.  Please pick-up your copy at the One-Stop-Shop.';
	if (emailAddr != undefined && (conType == 'Applicant/Developer' || conType == 'APPLICANT/DEVELOPER')) {
		email(emailAddr, sender, subject, emailBody);
	}

	showMessage = true;
	comment(emailAddr + ', ' + lastName + ', ' + firstName + ' ' + conType);

}
