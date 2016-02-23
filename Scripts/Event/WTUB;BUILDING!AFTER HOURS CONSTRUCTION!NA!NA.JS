
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	pCapID = getParent();
	}

if (wfTask == 'Issue' && wfStatus == 'Issued' && pCapID == false) {
	showMessage=true;
	comment('Need to have a Parent Planning Subdivision Grading Permit or a Parent record Building');
	cancel = true;
	}

