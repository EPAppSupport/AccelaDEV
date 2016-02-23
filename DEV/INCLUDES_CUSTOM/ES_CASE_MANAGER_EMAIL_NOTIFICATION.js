function ES_CASE_MANAGER_EMAIL_NOTIFICATION() {

	sender = 'accela@elpasotexas.gov';
	if (appMatch('Planning/Zoning/Special Permit/*')) {
		subject = ('Case Manager;Planing Zoning Record ' + capIDString);
		emailBody = ('Notification for Case Manager: <br/>The Planning Zoning Record Number ' + capIDString + ' has been submitted' + '<BR><BR>' + 'This is an Expedited review for a Personal Wireless Service Facility Special Permit.  The expedited review is Required so that the City of El Paso will be in compliance with new FCC Regulations governing the expedited processing time on these types of facilities. Please review within 5 days of review of the distribution.');
	}

	if (appMatch('Planning/Zoning/PWSF Communications/*')) {
		subject = ('Case Manager;Planing Zoning Record ' + capIDString);
		emailBody = ('Notification for Case Manager: <br/>The Planning Zoning Record Number ' + capIDString + ' has been submitted' + '<BR><BR>' + 'This item needs to be fast tracked in order to meet FCC regulations on Personal Wireless Service facilities.');
	}

	assignedToUser = getAssignedToStaff();
	if (assignedToUser != null)
		emailAddrs = aa.person.getUser(assignedToUser).getOutput().getEmail();
	if ((emailAddrs != undefined && emailAddrs != '' && emailAddrs != null)) {
		email(emailAddrs, sender, subject, emailBody);
	}

}
