
if (wfTask == 'Issue Certificate' && wfStatus == 'Issued') {
	pCapID = getParent();
	comment('Parent ID is: ' + pCapID);
	}

if (wfTask == 'Issue Certificate' && wfStatus == 'Issued' && pCapID != false) {
	pCapObj = aa.cap.getCap(pCapID).getOutput();
	pCapStatus = pCapObj.getCapStatus();
	}

if (wfTask == 'Issue Certificate' && wfStatus == 'Issued' && pCapID != false && pCapStatus != 'Issue Certificate') {
	showMessage=true;
	comment('Cannot Issue because Parent Record Status is not Issue Certificate');
	cancel=true;
	}

if (wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && CONSTRUCTIONANDOCCUPANCY.length < 1) {
	showMessage = true;
	comment('A value in Construction and Occupancy ASI table is required to continue');
	cancel = true;
	}

if (wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && isTaskStatus('Land Development Review', 'Obtain Permit')) {
	cancel = true;
	showMessage = true;
	comment('Action not allowed. Status 'Obtain Permit' must be changed in Land Development Review');
	}

if (((wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') && (AInfo['EAB'] == null  && calcValue >= 50000 ))) {
	showMessage = true;
	comment('EAB is required for issuance');
	cancel = true;
	}

