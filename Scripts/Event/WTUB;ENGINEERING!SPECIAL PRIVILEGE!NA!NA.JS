
if (wfTask == 'Issue' && wfStatus == 'Renewed' && wfGetHistCount(capId,'Issue','Renewed') >= 2) {
	showMessage = true;
	comment('This permit has been renewed 2 times already, it may not be renewed again.');
	cancel = true;
	}

