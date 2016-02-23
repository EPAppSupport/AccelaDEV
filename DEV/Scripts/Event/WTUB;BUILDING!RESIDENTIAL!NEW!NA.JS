
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	pCapID = getParent();
	}

if (wfTask == 'Issue' && wfStatus == 'Issued' && pCapID != false) {
	comment('pCapID is : ' + pCapID);
	}

if (wfTask == 'Application Submittal' && wfStatus == 'Completed' && (getAssignedToStaff() == '' || getAssignedToStaff() == null)) {
	showMessage=true;
	comment('Assign a Case Manager before proceding ' + getAssignedToStaff());
	cancel=true;
	}

if (wfTask == 'Completeness Check'  && wfStatus == 'Ready to Issue' && CompileFailedTasks(capId) != null) {
	showMessage = true;
	comment('This License has Failed Reviews. Requires Revisions');
	cancel = true;
	}

if (wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && isTaskStatus('Land Development Review', 'Obtain Permit')) {
	cancel = true;
	showMessage = true;
	comment('Action not allowed. Status 'Obtain Permit' must be changed in Land Development Review');
	}

