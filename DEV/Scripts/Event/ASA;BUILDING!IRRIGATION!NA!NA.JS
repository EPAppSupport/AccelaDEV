
if (AInfo['Type of Use'] == 'Commercial') {

	//start replaced branch: COEP_IRR_ADDASIT
	{
		addRowArray1 = new Array;
		addRowArray1['Fixture Type'] = '';
		addRowArray1['Quantity'] = '';
		addRowArray1['Notes'] = '';
		if (typeof(IRRIGATIONFIXTURES) != 'object') {
			addToASITable('IRRIGATION FIXTURES', addRowArray1);
		}

	}
	//end replaced branch: COEP_IRR_ADDASIT;
}
