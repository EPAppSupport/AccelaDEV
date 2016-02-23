
if (wfTask == 'Issue' && wfStatus == 'Issued') {

	//start replaced branch: COEP_HEALTH_RECURRENT
	{
		if (wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Expiration Date'] == null) {
			editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY, 12));
		}

	}
	//end replaced branch: COEP_HEALTH_RECURRENT;
}
