
if (wfTask == 'Complaint Received' && wfStatus == 'Assigned') {
	uId = getTaskAssignedUserID(wfTask);
}

if ((wfTask == 'Complaint Received' && wfStatus == 'Assigned' && uId != '')) {
	assignTask('Investigation', uId);
} else {
	showMessage = false;
	comment("Assigned staff couldn't be applied ");
}

var getInvestigationUserID = getTaskAssignedUser3(' Investigation ');
comment('**  **  **  ** USERID IS ' + getInvestigationUserID);
if (getInvestigationUserID != ' ') {
	assignTask('Court', getInvestigationUserID);
}

var getCourtUserID = getTaskAssignedUser3('Court');
comment('**  **  **  ** USERID IS ' + getCourtUserID);
if (getCourtUserID != ' ') {
	assignTask('Close', getCourtUserID);
}
