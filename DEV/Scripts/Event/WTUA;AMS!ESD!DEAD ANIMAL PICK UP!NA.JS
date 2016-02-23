
if ((wfTask == 'Work Order Submittal' && wfStatus == 'Cancelled')) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}

if ((wfTask == 'Supervisor Review' && wfStatus == 'Close')) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}

if ((wfTask == 'Finance Review' && wfStatus == 'Billed Enquesta')) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}

if ((wfTask == 'Finance Review' && wfStatus == 'Cancel')) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}
