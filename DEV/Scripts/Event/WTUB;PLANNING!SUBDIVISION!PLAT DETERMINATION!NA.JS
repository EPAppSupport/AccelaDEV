
if (wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'Assigned') && (getAssignedToStaff() == '' || getAssignedToStaff() == null)) {
	showMessage=true;
	comment('Assign a Case Manager before proceding.');
	cancel=true;
	}

