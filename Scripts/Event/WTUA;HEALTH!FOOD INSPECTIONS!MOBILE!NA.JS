
if (wfTask == 'Issue' && wfStatus == 'Issued') {

	//start replaced branch: COEP_HEALTH_MOBILE
	{
		if (appMatch('Health/Food Inspections/Mobile/*') && matches(AInfo['Section'], '2(b)', '4(c)', '4(d)', '9.12.070G', '9.12.070H', '9.12.070I')) {
			editAppSpecific('Expiration Date', dateAdd(wfDateMMDDYYYY, 365));
		}

	}
	//end replaced branch: COEP_HEALTH_MOBILE;
}
