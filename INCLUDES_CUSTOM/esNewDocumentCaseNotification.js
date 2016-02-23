function esNewDocumentCaseNotification() {

	emailAddrs = '';
	sender = 'accela@elpasotexas.gov';
	subject = 'Case Manager,  Record ' + capIDString + ' has new documents uploaded.';
	emailBody = 'Notification for Case Manager. New Documents have been uploaded to this record Id.';
	assignedToUser = getAssignedToStaff();
	if (assignedToUser != null)
		emailAddrs = aa.person.getUser(assignedToUser).getOutput().getEmail();
	if ((emailAddrs != undefined && emailAddrs != '' && emailAddrs != null)) {
		email(emailAddrs, sender, subject, emailBody);
	}

}
