

//replaced branch(ES_CHECK_LIC_PROF)
ES_CHECK_LIC_PROF();
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	pCapID = getParent();
}

if (wfTask == 'Issue' && wfStatus == 'Issued' && pCapID != false) {
	comment('pCapID is : ' + pCapID);
}

if (wfTask == 'Issue' && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('Task cannot be completed. There is a balance on the Record. All invoiced fees must be paid before permit issuance.');
	cancel = true;
}
