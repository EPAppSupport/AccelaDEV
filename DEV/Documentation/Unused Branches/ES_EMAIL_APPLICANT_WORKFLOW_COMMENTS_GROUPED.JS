
var emailBody = EmailGroupedComments(capId);
assignedToUser = getAssignedToStaff(capId);
comment(emailBody);
var user = aa.person.getUser(assignedToUser);
userEmail = undefined;
userFirst = undefined;
userLast = undefined;
if (user.getSuccess()) {
	user = user.getOutput();
	userEmail= user.getEmail();
	userFirst = user.getFirstName();
	userLast = user.getLastName();
	showMessage=true;
	comment(userFirst + ' ' + userLast + ' ' + userEmail );
	}

conType = conArray[y].getPeople().contactType;
emailAddr = conArray[y].getPeople().email;
lastName= conArray[y].getPeople().lastName;
firstName= conArray[y].getPeople().firstName;
middleName= conArray[y].getPeople().middleName;
if (emailAddr != undefined && (conType == 'Applicant' || conType == 'APPLICANT')) {
	email('patrickc@elpasotexas.gov', 'accela@accela.com', 'TEST GROUP REVIEW COMMENTS', ('<b>Below are the results and comments for this Document review </b>' + '<BR>' + emailBody));
	}

