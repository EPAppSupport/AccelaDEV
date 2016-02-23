
if ((wfTask == 'Application Submittal' && wfStatus == 'Temp License Issued' || wfTask == 'Issue' && wfStatus == 'Issued')  && balanceDue > 0) {
	showMessage = true;
	comment('Task cannot be completed. There is a balance on the record. All invoiced fees must be paid before issuance.');
	cancel = true;
	}

