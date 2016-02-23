
valuation1 = 0;

//start replaced branch: ES_SIGN_VALUATION
{
	if (typeof(SIGN) == 'object') {
		for (eachrow in SIGN)
			//start replaced branch: ES_SIGN_VALUATION_LOOP
		{
			valuation = SIGN[eachrow];
			if (valuation['Valuation'] > 0) {
				valuation1 = parseFloat(valuation['Valuation']) + valuation1;
			}

		}
		//end replaced branch: ES_SIGN_VALUATION_LOOP;
	}

}
//end replaced branch: ES_SIGN_VALUATION;
editAppSpecific('GENERAL.Total Valuation', valuation1);
