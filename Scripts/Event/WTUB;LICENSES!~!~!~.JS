/* Standard Choice disabled WTUB:Licenses!~!~!~

if (( wfTask == 'Issue' || wfTask == 'Issued')  && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('Task cannot be completed. There is a balance on the application. All invoiced fees must be paid before permit issuance. ');
	cancel = true;
	}

*/