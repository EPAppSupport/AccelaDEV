

//start replaced branch: COEP_EXP_TCP_UPDATE
{
	var newExpDate = '';
	if (appMatch('Engineering/Traffic Control Plans/NA/NA') && typeof(EXPIRATIONDATE) == 'object') {
		for (eachrow in EXPIRATIONDATE)
			//start replaced branch: COEP_EXP_TCP_UPDATE_LOOP
		{
			asiRow = EXPIRATIONDATE[eachrow];
			if (asiRow['Extension Approved'] == 'Yes' && asiRow['Extended to'] != null) {
				editAppSpecific('Expiration Date', asiRow['Extended to']);
			}

		}
		//end replaced branch: COEP_EXP_TCP_UPDATE_LOOP;
	}

	if (appMatch('Engineering/Traffic Control Plans/NA/NA') && typeof(EXPIRATIONDATE) == 'object') {
		showMessage = true;
		comment('NewExpirationDate is ' + AInfo['Expiration Date']);
	}

}
//end replaced branch: COEP_EXP_TCP_UPDATE;
