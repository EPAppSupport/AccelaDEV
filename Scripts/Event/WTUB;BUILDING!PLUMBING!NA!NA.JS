
if (wfTask == 'Issue' && wfStatus == 'Issued' && typeof(PLUMBINGFIXTURES) != 'object') {
	showMessage=true;
	comment('Cannot Issue Record, need to fill ASI Tables');
	cancel=true;
	}

