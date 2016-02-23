
if (wfTask == 'Complaint Received' && wfStatus == 'Cancelled') {
	deactivateTask('Complaint Received');
	updateTask('Close', 'Closed', 'Closed by Script', ' ');
	deactivateTask('Close');
}

if (wfTask == 'Complaint Received' && wfStatus == 'Assigned') {
	uId = getTaskAssignedUserID(wfTask);
}

if ((wfTask == 'Complaint Received' && wfStatus == 'Assigned' && uId != ' ')) {
	assignTask('Investigation', uId);
} else {
	showMessage = false;
	comment("Assigned staff couldn't be applied");
}
