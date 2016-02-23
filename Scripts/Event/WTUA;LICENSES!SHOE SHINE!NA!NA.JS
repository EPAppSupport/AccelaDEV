
if (wfTask == 'Issue' && wfStatus == 'Renewed') {

	//start replaced branch: COEP_LICENSES_ADDASIT_EXPDATE
	{
		addRowArray1 = new Array;
		addRowArray1['Year'] = '';
		addRowArray1['Expiration Date'] = dateAdd(wfDateMMDDYYYY, 365);
		editAppSpecific('Expiration Date', addRowArray1['Expiration Date']);
		addToASITable('EXPIRATION', addRowArray1);

	}
	//end replaced branch: COEP_LICENSES_ADDASIT_EXPDATE;
}
