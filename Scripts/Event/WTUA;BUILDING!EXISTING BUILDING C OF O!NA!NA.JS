
if ((wfTask == 'Application Submittal' && wfStatus == 'Cancelled')) {
	closeTask('Close', 'Closed', 'Closed by Script');
	}

if ((wfTask == 'Inspection' && wfStatus == 'Cancelled')) {
	closeTask('Close', 'Closed', 'Closed by Script');
	}

if ((wfTask == 'Issue Certificate' && (wfStatus == 'Cancelled' || wfStatus == 'Issued'))) {
	closeTask('Close', 'Closed', 'Closed by Script');
	}

