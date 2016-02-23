
if (wfTask == 'Issue' && wfStatus == 'Issued' && typeof(IRRIGATIONFIXTURES) != 'object') {
	showMessage = true;
	comment('Record cannot be issued, need to fill ASI Tables');
	cancel = true;
	}

