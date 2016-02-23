function ES_WORKFLOW_BUILDING_ACA_EMAIL() {

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

}
