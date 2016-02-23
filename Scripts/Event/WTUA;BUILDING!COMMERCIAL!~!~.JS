
if (wfTask == 'Inspection' && wfStatus == 'Extension Issued') {
	editAppSpecific('Expiration Date', dateAdd(wfDateMMDDYYYY.toString(), 90));
	}

