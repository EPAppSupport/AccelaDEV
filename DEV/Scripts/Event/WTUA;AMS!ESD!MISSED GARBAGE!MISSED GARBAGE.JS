
if ((wfTask == 'Finance Review' && (wfStatus == 'Bill EnQuesta' || wfStatus == 'Complete'))) {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
}

if ((wfTask == 'Field Work Order' && (wfStatus == 'Complete NO BILL'))) {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
}
