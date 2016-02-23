
if (wfTask == 'Application Submittal' && wfStatus == 'Documents Needed') {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray= capContactResult.getOutput();
	for (y in conArray) {
		// TODO: branch doesn't exist
		branch('ES_BUILDING_ACA_DOCUMENT_NEEDED_EMAIL');
		}
	}

if (wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray= capContactResult.getOutput();
	for (y in conArray)  
//start replaced branch: ES_BUILDING_FENCE_ACA_READY_TO_ISSUE_EMAIL
 {
assignedToUser = getAssignedToStaff(capId);
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
userObj = aa.person.getUser(firstName,middleName,lastName).getOutput();
userPhoneNumber = user.getPhoneNumber();
sender= 'accela@elpasotexas.gov';
subject = 'Your permit ' + capIdString + ' has been approved and is ready for issuance';
emailBody = 'Your permit has been approved and is ready for issuance. To complete the permitting process please log in to your ACA account to submit payment and print your permit <BR><BR> To navigate to our website please visit http://epermit.elpasotexas.gov/citizenaccess <BR><BR> If you have any questions Please contact your Case Manager below: ';
reviewerInfo =  ('<BR>'+ userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
if (emailAddr != undefined && (conType =='Applicant' || conType =='APPLICANT')) {
	email(emailAddr, sender, subject, (emailBody + '<BR>' + reviewerInfo + '<BR>'));
	}

showMessage=true;
comment(emailAddr + ', ' + lastName + ', ' + firstName + ' ' +  userPhoneNumber + ' ' + conType );

}
//end replaced branch: ES_BUILDING_FENCE_ACA_READY_TO_ISSUE_EMAIL;
	}

if (isTaskActive('Completeness Check') == true) {
	
//replaced branch(ES_COMP_WORKFLOW_CASE_MGR_EMAIL_NOTIFICATION)
ES_COMP_WORKFLOW_CASE_MGR_EMAIL_NOTIFICATION();
	}

if (wfTask == 'Completeness Check' &&  (wfStatus == 'Revisions Required' || wfStatus == 'Ready to Issue' || wfStatus == 'Hold for Corrections')) {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray= capContactResult.getOutput();
	for (y in conArray) 
//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
ES_WORKFLOW_BUILDING_ACA_EMAIL();
	}

