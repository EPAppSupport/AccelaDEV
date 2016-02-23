
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	pCapID = getParent();
	}

if (wfTask == 'Issue' && wfStatus == 'Issued' && pCapID != false) {
	comment('pCapID is : ' + pCapID);
	}

