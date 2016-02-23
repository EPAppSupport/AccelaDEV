function esFireUpdateExpDate() {

	pCapID = getParent();
	comment('Parent CAP ID is: ' + pCapID);
	if (pCapID == false && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 6), capId);
	}

	if (pCapID == false && inspManualDate != null) {
		editAppSpecific('Expiration Date', dateAddMonths(inspManualDate, 6), capId);
	}

	if (pCapID != false && wfTask == 'Issue' && wfStatus == 'Issued') {
		pExpDate = getAppSpecific('Expiration Date', pCapID);
		editAppSpecific('Expiration Date', pExpDate, capId);
	}

}
