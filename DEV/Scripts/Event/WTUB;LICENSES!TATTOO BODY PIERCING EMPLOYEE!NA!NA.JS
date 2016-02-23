
if (wfTask == 'Issue' && (wfStatus == 'Issue'|| wfStatus == 'Issued') && balanceDue > 0) {
	showComment=true;
	comment('Cannot Invoice Fee when a balance exist');
	cancel=true;
	}

