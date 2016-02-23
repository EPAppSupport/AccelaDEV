
if (wfTask == 'Completeness Check'  && wfStatus == 'Ready to Issue' && CompileFailedTasks(capId) != null) {
	showMessage = true;
	comment('This License has Failed Reviews. Requires Revisions');
	cancel = true;
	}

if (wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'Complete') && (getAssignedToStaff() == '' || getAssignedToStaff() == null)) {
	showMessage=true;
	comment('Assign a Case Manager before proceding ' + getAssignedToStaff());
	cancel=true;
	}

if (wfTask == 'Task Assignment' && AInfo['Updated.Master Plan Review'] == 'No' && AInfo['Updated.Electrical Review'] == 'No') {
	showMessage = true;
	comment('Please select one task from the options provided');
	cancel = true;
	}

