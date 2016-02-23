
if (wfTask == 'Inspection'  && wfStatus == 'Extension Issued' && wfGetHistCount(capId,'Inspection','Extension Issued') >= 4) {
	showMessage = true;
	comment('Cannot allow more than 4 Inspection Extensions');
	cancel = true;
	}

if (wfTask == 'Completeness Check'  && wfStatus == 'Ready to Issue' && CompileFailedTasks(capId) != null) {
	showMessage = true;
	comment('This Permit has Failed Reviews. Requires Revisions');
	cancel = true;
	}

