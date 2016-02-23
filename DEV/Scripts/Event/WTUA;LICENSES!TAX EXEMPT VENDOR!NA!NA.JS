
if (wfTask == 'Issue' && wfStatus == 'Issued') {

	//start replaced branch: ES_TAXDATE_CHECK
	{
		lastDate = AInfo['Date 1'];
		if (AInfo['Date 2'] != null) {
			lastDate = AInfo['Date 2'];
		}

		if (AInfo['Date 3'] != null) {
			lastDate = AInfo['Date 3'];
		}

		if (AInfo['Date 4'] != null) {
			lastDate = AInfo['Date 4'];
		}

		if (AInfo['Date 5'] != null) {
			lastDate = AInfo['Date 5'];
		}

		editAppSpecific('Expiration Date', dateAdd(lastDate, 1));

	}
	//end replaced branch: ES_TAXDATE_CHECK;
}
