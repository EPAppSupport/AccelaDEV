function esCompWorkflowCaseMgrEmailNotification() {

	sender = 'accela@elpasotexas.gov';
	subject = 'Case Manager,  Record ' + capIDString + ' has all Reviews completed.';
	emailBody = 'Notification for Case Manager. All reviews are completed,Workflow Task Completeness Check is light up and ready to use, Thank you.';
	assignedToUser = getAssignedToStaff();
	if (assignedToUser != null)
		emailAddrs = aa.person.getUser(assignedToUser).getOutput().getEmail();
	if ((emailAddrs != undefined && emailAddrs != '' && emailAddrs != null)) {
		email(emailAddrs, sender, subject, emailBody);
	}

}
