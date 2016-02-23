
if (wfTask == 'Inspection'  && wfStatus == 'Extension Issued' && wfGetHistCount(capId,'Inspection','Extension Issued') >= 4) {
	showMessage = true;
	comment('Cannot allow more than 4 Inspection Extensions');
	cancel = true;
	}

