
if (((wfTask == 'Submittal' || wfTask == 'Finance') && wfStatus == 'Cancel')) {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
}

if ((wfTask == 'Finance' && wfStatus == 'Adjusted')) {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
}
