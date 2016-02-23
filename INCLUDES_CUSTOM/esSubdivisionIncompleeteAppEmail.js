function esSubdivisionIncompleeteAppEmail() {

	assignedToUser = getAssignedToStaff(capId);
	var user = aa.person.getUser(assignedToUser);
	userEmail = undefined;
	userFirst = undefined;
	userLast = undefined;
	if (user.getSuccess()) {
		user = user.getOutput();
		userEmail = user.getEmail();
		userFirst = user.getFirstName();
		userLast = user.getLastName();
		showMessage = true;
		comment(userFirst + ' ' + userLast + ' ' + userEmail);
	}

	conType = conArray[y].getPeople().contactType;
	emailAddr = conArray[y].getPeople().email;
	lastName = conArray[y].getPeople().lastName;
	firstName = conArray[y].getPeople().firstName;
	middleName = conArray[y].getPeople().middleName;
	userObj = aa.person.getUser(firstName, middleName, lastName).getOutput();
	userPhoneNumber = user.getPhoneNumber();
	sender = 'accela@elpasotexas.gov';
	subject = 'Your application ' + capIdString + ' is incomplete';
	emailBody = 'After initial review, the application ' + capIdString + ' submitted is missing one or more documents and the application is deemed incomplete.  Please upload any missing documents via customer portal or contact subdivision staff if you have any questions.<BR><BR>Please contact your Case Manager below: ';
	reviewerInfo = ('<BR>' + userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	if (emailAddr != undefined && (conType == 'Applicant' || conType == 'APPLICANT/DEVELOPER')) {
		email(emailAddr, sender, subject, (emailBody + '<BR>' + reviewerInfo + '<BR>'));
	}

	showMessage = true;
	comment(emailAddr + ', ' + lastName + ', ' + firstName + ' ' + userPhoneNumber + ' ' + conType);

}
