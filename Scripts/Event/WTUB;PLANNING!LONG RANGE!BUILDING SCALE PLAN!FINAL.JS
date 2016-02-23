
if (wfTask == 'Application Submittal' && wfStatus == 'Completed' && (getAssignedToStaff() == '' || getAssignedToStaff() == null)) {
	showMessage=true;
	comment('Assign a Case Manager before proceding ' + getAssignedToStaff());
	cancel=true;
	}

