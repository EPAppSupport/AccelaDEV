
if (wfTask == 'Completeness Check'  && wfStatus == 'Ready to Issue' && CompileFailedTasks(capId) != null) {
	showMessage = true;
	comment('This License has Failed Reviews. Requires Revisions');
	cancel = true;
	}

