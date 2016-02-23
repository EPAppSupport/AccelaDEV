
if (((wfTask == 'Work Order Submittal' || wfTask == 'Work Order') && wfStatus == 'Cancelled')) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}

if ((wfTask == 'Supervisor Review' && wfStatus == 'Close WO')) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}

if ((wfTask == 'Finance Review' && (wfStatus == 'Close' || wfStatus == 'Completed'))) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}

if ((wfTask == 'Work Order' && wfStatus == 'Closed No Charge')) {
	deactivateTask('Close');
	closeTask('Close', 'Closed', 'Closed by Script');
}
