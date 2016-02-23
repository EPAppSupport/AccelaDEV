
if (wfTask == 'Application Submittal' && (wfStatus == 'Accepted' || wfStatus == 'Assigned') && (getAssignedToStaff() == '' || getAssignedToStaff() == null)) {
	showMessage=true;
	comment('Assign a Case Manager before proceding.');
	cancel=true;
	}

