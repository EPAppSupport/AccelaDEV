function ES_WORKFLOW_CASE_EMAIL_NOTIFICATION() {

	assignedToUser = getAssignedToStaff();
	if (assignedToUser != null)
		emailAddrs = aa.person.getUser(assignedToUser).getOutput().getEmail();
	var fullName = aa.person.getUser(assignedToUser).getOutput().getFirstName() + ' ' + aa.person.getUser(assignedToUser).getOutput().getLastName();
	if ((AInfo['Expedited'] == 'PBA' || AInfo['Expedited'] == 'CPR')) {
		subject = 'Expedited Record ' + capIDString + '	' + wfTask + ' ' + wfStatus + '.';
		emailBody = 'Case Manager <b> ' + fullName + '</b>, <BR><BR>Workflow task <b>' + wfTask + '</b> for <b>Expedited</b> record <b>' + capIDString + '</b> has a status of <b>' + wfStatus + '</b> <BR><BR> Thank you.';
	} else {
		subject = 'Record ' + capIDString + ' ' + wfTask + ' ' + wfStatus + '.';
		emailBody = 'Case Manager <b> ' + fullName + '</b>, <BR><BR>Workflow task <b>' + wfTask + '</b> for record <b>' + capIDString + '</b> has a status of <b>' + wfStatus + '</b> <BR><BR> Thank you.';
	}

	if ((emailAddrs != undefined && emailAddrs != '' && emailAddrs != null)) {
		email(emailAddrs, 'accela@elpasotexas.gov', subject, emailBody);
	}

}
