
if (wfTask == 'Issue' && wfStatus == 'Issued' &&  balanceDue > 0) {
	cancel = true;
	showMessage=true;
	comment('Cannot proceed if fees are pending to be paid. Operation has been cancelled. <BR>' + 'Balance Due: ' + balanceDue);
	}

