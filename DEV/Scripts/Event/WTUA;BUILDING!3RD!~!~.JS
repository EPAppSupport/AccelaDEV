

//start replaced branch: COEP_THIRD_PARTY_FEES
{
	if (appMatch('Building/3rd/Residential/*') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Company'] == 'Bureau Veritas') {
		addFee('FB500', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB505', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB511', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/Residential/*') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Company'] == 'CCI') {
		addFee('FB502', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB507', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB510', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/Residential/*') && !appMatch('Building/3rd/Residential/Swimming Pool') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Company'] == 'Vision') {
		addFee('FB501', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB504', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB509', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/Residential/*') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Company'] == 'ECM') {
		addFee('FB503', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB506', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB514', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/Residential/*') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Company'] == 'Institute for Bldg & Technology & Safety') {
		addFee('FB512', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB513', 'BLDTHIRD', 'STANDARD', 1, 'Y');
		addFee('FB508', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/Residential/Swimming Pool') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Company'] == 'Vision') {
		addFee('FTP003', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Zoning Review' && wfStatus == 'Passed' && AInfo['Company'] == 'Bureau Veritas' && getDepartmentName(currentUserID) == '3rd Part BV') {
		addFee('FB515', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Land Development Review' && wfStatus == 'Passed' && AInfo['Company'] == 'ECM' && getDepartmentName(currentUserID) == '3rd Party ECM') {
		addFee('FB520', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Zoning Review' && wfStatus == 'Passed' && AInfo['Company'] == 'ECM' && getDepartmentName(currentUserID) == '3rd Party ECM') {
		addFee('FB516', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Land Development Review' && wfStatus == 'Passed' && AInfo['Company'] == 'Institute for Bldg & Technology & Safety') {
		addFee('FB521', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Zoning Review' && wfStatus == 'Passed' && AInfo['Company'] == 'Institute for Bldg & Technology & Safety') {
		addFee('FB517', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Land Development Review' && wfStatus == 'Passed' && AInfo['Company'] == 'Vision' && getDepartmentName(currentUserID) == '3rd Party VCI') {
		addFee('FB522', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Zoning Review' && wfStatus == 'Passed' && AInfo['Company'] == 'Vision' && getDepartmentName(currentUserID) == '3rd Party VCI') {
		addFee('FB518', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/3rd/*/*') && wfTask == 'Land Development Review' && wfStatus == 'Passed' && AInfo['Company'] == 'Bureau Veritas' && getDepartmentName(currentUserID) == '3rd Party BV') {
		addFee('FB519', 'BLDTHIRD', 'STANDARD', 1, 'Y');
	}

}
//end replaced branch: COEP_THIRD_PARTY_FEES;
