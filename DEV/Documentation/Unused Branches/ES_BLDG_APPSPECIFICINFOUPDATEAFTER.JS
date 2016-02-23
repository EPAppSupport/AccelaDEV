
showDebug = false;
showMessage = false;
if (matches(currentUserID,'KHOBDAY','GUTIERREZMA','JCIPRIANO','CPARKS','MARTINEZA')) {
	showDebug = true;
	showMessage=true;
	}

if (appMatch('Building/Commercial/New/*') || appMatch('Building/Residential/New/*') && AInfo['Notify Case Manager'] == 'Yes') {
	
//start replaced branch: ES_WORKFLOW_CASE_FLAG_EMAIL_NOTIFICATION
 {
sender= 'accela@elpasotexas.gov';
subject = 'Case Manager,  Record ' + capIDString  + 'Is active for review.';
emailBody = 'Notification for Case Manager. The Record has been submitted for your review, Thank you.';
assignedToUser = getAssignedToStaff();
if(assignedToUser != null) emailAddrs = aa.person.getUser(assignedToUser).getOutput().getEmail();
comment('this is the email address: ' + emailAddrs);
comment('this is the user: ' + assignedToUser);
if ((emailAddrs != undefined && emailAddrs != '' && emailAddrs != null)) {
	email(emailAddrs, sender, subject,emailBody);
	}

}
//end replaced branch: ES_WORKFLOW_CASE_FLAG_EMAIL_NOTIFICATION;
	}

