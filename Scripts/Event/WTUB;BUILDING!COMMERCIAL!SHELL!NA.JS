
if (wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && isTaskStatus('Land Development Review', 'Obtain Permit')) {
	cancel = true;
	showMessage = true;
	comment('Action not allowed. Status 'Obtain Permit' must be changed in Land Development Review');
	}

if (((wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') && (AInfo['EAB No.'] == null  && calcValue >= 50000 ))) {
	showMessage = true;
	comment('EAB is required for issuance');
	cancel = true;
	}

