
assignedToUser = getAssignedToStaff(capId);
var user = aa.person.getUser(assignedToUser);
userEmail = undefined;
userFirst = undefined;
userLast = undefined;
emailAddr = undefined;
if (user.getSuccess()) {
	user = user.getOutput();
	userEmail= user.getEmail();
	userFirst = user.getFirstName();
	userLast = user.getLastName();
	showMessage=true;
	comment(userFirst + ' ' + userLast + ' ' + userEmail );
	}

if (wfStatus == 'Recommend Denial') {
	conType = conArray[y].getPeople().contactType;
	emailAddr = conArray[y].getPeople().email;
	lastName= conArray[y].getPeople().lastName;
	firstName= conArray[y].getPeople().firstName;
	middleName= conArray[y].getPeople().middleName;
	userObj = aa.person.getUser(firstName,middleName,lastName).getOutput();
	userPhoneNumber = user.getPhoneNumber();
	sender= 'accela@elpasotexas.gov';
	subject = 'Case ' + capIDString  + ' ,  ' + wfTask + ' has a status of ' + wfStatus;
	emailBody = 'If you have any questions please contact your case manager';
	reviewerInfo =  ('<BR>'+ userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	}

if (emailAddr != undefined && (conType =='Applicant' || conType =='APPLICANT' || conType =='APPLICANT/DEVELOPER')) {
	email(emailAddr , sender, subject, (emailBody + '<BR>' + reviewerInfo + '<BR><BR>' + 'To access your application please click on the link below:<BR>http://epermit.elpasotexas.gov/CitizenAccess/'));
	}

showMessage=true;
comment(emailAddr + ', ' + lastName + ', ' + firstName + ' ' +  userPhoneNumber + ' ' + conType );

