
if (wfTask == 'Application Submittal' && wfStatus == 'Completed' && (AInfo['Term of License'] == '1 Year' || AInfo['Term of License'] == '2 Year')) {

	//start replaced branch: ES_LICENSES_CAR_DEALER_FEE
	{
		if (AInfo['Term of License'] == '1 Year') {
			addFee('FL090A', 'LICCARDEAL', 'STANDARD', 1, 'Y');
			//editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		}

		if (AInfo['Term of License'] == '2 Year') {
			addFee('FL090A', 'LICCARDEAL', 'STANDARD', 2, 'Y');
			// editAppSpecific('Expiration Date', dateAddMonths(null, 24));
		}

	}
	//end replaced branch: ES_LICENSES_CAR_DEALER_FEE;
}
