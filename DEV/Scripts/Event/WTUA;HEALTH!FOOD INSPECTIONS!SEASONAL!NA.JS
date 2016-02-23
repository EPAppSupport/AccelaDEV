

//start replaced branch: COEP_HEALTH_SEASONAL
{
	if (wfTask == 'Inspection' && wfStatus == 'Renewed' && AInfo['Expiration Date'] != null && dateAddMonths(AInfo['Expiration Date'], 6) < sysDate) {
		showMessage = true;
		comment('Cannot allow renewal prior to 6 months past expiration Date');
		cancel = true;
	}

}
//end replaced branch: COEP_HEALTH_SEASONAL;
