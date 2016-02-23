

//start replaced branch: COEP_PLAN_ADD_VALUATION_FEE
{
	var quantity = 0;
	if (appMatch('Planning/Zoning/Sign Permit/*') && typeof(SIGN) == 'object') {
		for (eachrow in SIGN)
			//start replaced branch: COEP_PLAN_ADD_VALUATION_FEE_LOOP
		{
			siteRow = SIGN[eachrow];
			quantity = 0;
			if (siteRow['Valuation'] != null) {
				quantity = siteRow['Valuation'];
				addFee('FP047', 'PLNSIGNP', 'STANDARD', quantity, 'N');
			}

		}
		//end replaced branch: COEP_PLAN_ADD_VALUATION_FEE_LOOP;
	}

}
//end replaced branch: COEP_PLAN_ADD_VALUATION_FEE;
