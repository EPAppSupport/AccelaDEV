function esWorkflowBuildingAcaEmail() {

	if (wfStatus == 'Ready to Issue') {
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		lastName = conArray[y].getPeople().lastName;
		firstName = conArray[y].getPeople().firstName;
		middleName = conArray[y].getPeople().middleName;
		userObj = aa.person.getUser(firstName, middleName, lastName).getOutput();
		userPhoneNumber = user.getPhoneNumber();
		sender = 'accela@elpasotexas.gov';
		subject = 'Record ' + capIDString + ' has a status of ' + wfStatus;
		emailBody = 'If you have any questions Please contact your Case Manager below: ';
		reviewerInfo = ('<BR>' + userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	}

	if (wfStatus == 'Hold for Corrections') {
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		lastName = conArray[y].getPeople().lastName;
		firstName = conArray[y].getPeople().firstName;
		middleName = conArray[y].getPeople().middleName;
		userObj = aa.person.getUser(firstName, middleName, lastName).getOutput();
		userPhoneNumber = user.getPhoneNumber();
		sender = 'accela@elpasotexas.gov';
		subject = 'Record ' + capIDString + ' has a status of ' + wfStatus;
		emailBody = 'If you have any questions Please contact your Case Manager below: ';
		reviewerInfo = ('<BR>' + userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	}

	if (wfStatus == 'No Revisions') {
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		lastName = conArray[y].getPeople().lastName;
		firstName = conArray[y].getPeople().firstName;
		middleName = conArray[y].getPeople().middleName;
		userObj = aa.person.getUser(firstName, middleName, lastName).getOutput();
		userPhoneNumber = user.getPhoneNumber();
		sender = 'accela@elpasotexas.gov';
		subject = ('Your Record' + capIDString + ' is ready to go to CRC');
		emailBody = 'Your Record is ready to go to CRC. <BR> If you have any questions Please contact your Case Manager below: ';
		reviewerInfo = ('<BR>' + userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	}

	if (wfStatus == 'Recommend Approval') {
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		lastName = conArray[y].getPeople().lastName;
		firstName = conArray[y].getPeople().firstName;
		middleName = conArray[y].getPeople().middleName;
		userObj = aa.person.getUser(firstName, middleName, lastName).getOutput();
		userPhoneNumber = user.getPhoneNumber();
		sender = 'accela@elpasotexas.gov';
		subject = 'Case ' + capIDString + ' has a status of ' + wfStatus;
		emailBody = 'Your subdivision application has been set to Recommend Approval';
		reviewerInfo = ('<BR>' + userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	}

	assignedToUser = getAssignedToStaff(capId);
	var user = aa.person.getUser(assignedToUser);
	userEmail = undefined;
	userFirst = undefined;
	userLast = undefined;
	emailAddr = undefined;
	if (user.getSuccess()) {
		user = user.getOutput();
		userEmail = user.getEmail();
		userFirst = user.getFirstName();
		userLast = user.getLastName();
		showMessage = true;
		comment(userFirst + ' ' + userLast + ' ' + userEmail);
	}

	if ((wfStatus == 'Revisions Required' || wfStatus == 'Revisions Requested' || wfStatus == 'Recommend Denial')) {
		failedTasks = CompileFailedTasks(capId);
		conType = conArray[y].getPeople().contactType;
		emailAddr = conArray[y].getPeople().email;
		lastName = conArray[y].getPeople().lastName;
		firstName = conArray[y].getPeople().firstName;
		middleName = conArray[y].getPeople().middleName;
		userObj = aa.person.getUser(firstName, middleName, lastName).getOutput();
		userPhoneNumber = user.getPhoneNumber();
		sender = 'accela@elpasotexas.gov';
		subject = 'Case ' + capIDString + ' ,  ' + wfTask + ' has a status of ' + wfStatus;
		emailBody = failedTasks;
		reviewerInfo = ('<BR>' + userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	}

	if (emailAddr != undefined && (conType == 'Applicant' || conType == 'APPLICANT' || conType == 'APPLICANT/DEVELOPER' || conType == 'REPRESENTATIVE')) {
		email(emailAddr, sender, subject, (emailBody + '<BR>' + reviewerInfo + '<BR><BR>' + 'To access your application please click on the link below:<BR>http://epermit.elpasotexas.gov/CitizenAccess/'));
	}

	showMessage = true;
	comment(emailAddr + ', ' + lastName + ', ' + firstName + ' ' + userPhoneNumber + ' ' + conType);

}
