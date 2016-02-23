
if (wfTask == 'Renewal Application' && wfStatus == 'Issue Renewal' && balanceDue > 0) {
	showMessage = true;
	comment('Task cannot be completed. There is a balance on the renewal. All invoiced fees must be paid before renewal issuance.');
	cancel = true;
	}

