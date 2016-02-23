
if (wfTask == 'Meeting Notes' && wfStatus == 'Completed') {
	deactivateTask('Closed');
	closeTask('Closed', 'Closed', 'Closed by Script');
	}

if (wfTask == 'Application Submittal' && wfStatus == 'Cancelled') {
	deactivateTask('Meeting Notes');
	closeTask('Meeting Notes', 'Completed', 'Closed by Script');
	deactivateTask('Closed');
	closeTask('Closed', 'Closed', 'Closed by Script');
	}

