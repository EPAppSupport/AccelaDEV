
if ((wfTask == 'Finance Review' && wfStatus == 'Billed Enquesta')) {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
	updateAppStatus('Closed','Closed by Script');

	}

	if ((wfTask == 'Supervisor Review' && wfStatus == 'Close')) {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
	updateAppStatus('Closed','Closed by Script');
	}

if ((wfTask == 'Work Order' && wfStatus == 'Cancelled' && (feeExists('EC100') == false && feeExists('EC110') == false ))) {
	editTaskComment('Work Order', 'No Fee Entered - Added by Script');
	}

