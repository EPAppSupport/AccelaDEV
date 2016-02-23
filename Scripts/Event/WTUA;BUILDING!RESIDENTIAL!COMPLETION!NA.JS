
if (wfTask == 'Inspection' && wfStatus == 'Extension Issued') {
	editAppSpecific('Expiration Date', dateAdd(null,180));
	showMessage=true;
	comment('Expiration Date : ' + AInfo['Expiration Date']);
	}

