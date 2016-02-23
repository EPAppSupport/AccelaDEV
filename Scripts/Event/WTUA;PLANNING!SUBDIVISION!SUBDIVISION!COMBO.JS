
if (wfTask == 'City Planning Commission' && wfStatus == 'Approved' && AInfo['Expiration Date'] == null) {
	editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY,24));
	}

