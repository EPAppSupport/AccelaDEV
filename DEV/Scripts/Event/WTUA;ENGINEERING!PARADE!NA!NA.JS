
if (wfTask == 'Application Submittal' && wfStatus == 'Submitted') {

	//start replaced branch: ES_ADD_ENGPARADE_FEES
	{
		addFee('FL079', 'LICPARADE', 'STANDARD', 1, 'N');
		if (AInfo['Days Between Event and Application'] < 7) {
			addFee('FL080', 'LICPARADE', 'STANDARD', 1, 'N');
		}

	}
	//end replaced branch: ES_ADD_ENGPARADE_FEES;
}
