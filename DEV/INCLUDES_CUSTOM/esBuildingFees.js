function esBuildingFees() {

	if (appMatch('Building/Commercial/Swimming Pool-Spa/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['No. of Pool'] > 0) {
		addFee('FB016', 'COMMPOOL', 'STANDARD', AInfo['No. of Pool'], 'Y');
	}

	if (appMatch('Building/Placement/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB163', 'BLDGGEN', 'STANDARD', 1, 'N');
	}

	if ((appMatch('Building/Residential/Swimming Pool-Spa/NA') || appMatch('Building/Retaining Walls/NA/NA')) && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB039', 'BLDGGEN', 'STANDARD', 1, 'N');
	}

	if (appMatch('Building/Irrigation/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of Use'] == 'Commercial') {

		//start replaced branch: ES_BLDGIRR_ADDFEES
		{
			if (AInfo['Type of Use'] == 'Commercial') {
				addFee('FB095', 'BLDGIRR', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Type of Use'] == 'Residential') {
				addFee('FB090', 'BLDGIRR', 'STANDARD', 1, 'Y');
			}

			if (typeof(IRRIGATIONFIXTURES) == 'object') {
				for (eachrow in IRRIGATIONFIXTURES)
					//start replaced branch: ES_BLDGIRR_ADDFEES_LOOP
				{
					asiRow = IRRIGATIONFIXTURES[eachrow];
					if (asiRow['Fixture Type'] == 'Backflow Devices' && asiRow['Quantity'] > 0) {
						addFee('FB131', 'BLDGIRR', 'STANDARD', asiRow['Quantity'], 'Y');
					}

					if (asiRow['Fixture Type'] == 'Bubblers' && asiRow['Quantity'] > 0) {
						addFee('FB134', 'BLDGIRR', 'STANDARD', asiRow['Quantity'], 'Y');
					}

					if (asiRow['Fixture Type'] == 'Control Valves' && asiRow['Quantity'] > 0) {
						addFee('FB130', 'BLDGIRR', 'STANDARD', asiRow['Quantity'], 'Y');
					}

					if (asiRow['Fixture Type'] == 'Drips' && asiRow['Quantity'] > 0) {
						addFee('FB133', 'BLDGIRR', 'STANDARD', asiRow['Quantity'], 'Y');
					}

					if (asiRow['Fixture Type'] == 'Sprinkler Heads' && asiRow['Quantity'] > 0) {
						addFee('FB132', 'BLDGIRR', 'STANDARD', asiRow['Quantity'], 'Y');
					}

					if (asiRow['Fixture Type'] == 'Sub Subsurface (Per Sq Yards)' && asiRow['Quantity'] > 0) {
						addFee('FB135', 'BLDGIRR', 'STANDARD', asiRow['Quantity'], 'Y');
					}

				}
				//end replaced branch: ES_BLDGIRR_ADDFEES_LOOP;
			}

		}
		//end replaced branch: ES_BLDGIRR_ADDFEES;
	}

	if (appMatch('Building/Siding/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FB038', 'BLDGGEN', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/Retaining Walls/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FB039', 'BLDGGEN', 'STANDARD', 2, 'N');
	}

	if (appMatch('Building/Plumbing/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FB106', 'BLDGPLUMB', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/Electrical/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of Work'] == 'Elec Permit A') {
		updateFee('FB050', 'BLDGELEC', 'STANDARD', estValue, 'N', 'N');
	}

	if (appMatch('Building/Electrical/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of Work'] == 'Elec Permit B') {

		//replaced branch(ES_BLDGELEC_ADDFEES)
		esBldgElecFees()
	}

	if (appMatch('Building/Windows/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB038', 'BLDGGEN', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/Tents/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB004', 'BLDGTENT', 'STANDARD', (AInfo['Number of Months'] * AInfo['Sq Ft of Structure']), 'Y');
	}

	if (appMatch('Building/Commercial/Swimming Pool-Spa/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['No. of Spas'] > 0) {
		addFee('FB018', 'COMMPOOL', 'STANDARD', AInfo['No. of Spas'], 'Y');
	}

	if (appMatch('Building/Right of Way/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['ROW'] == 'Sidewalk/Driveway') {
		addFee('FB045A', 'BLDGROW', 'STANDARD', 1, 'N');
	}

	if (appMatch('Building/Temporary Amusement/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FB166', 'BLDGTMPAMUS', 'STANDARD', AInfo['No. of Rides'] * AInfo['No. of Months Operating'], 'N');
	}

	if (appMatch('Building/3rd/Residential/*') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB167', 'RES3RD', 'STANDARD', 1, 'N');
		invoiceFee('FB167', 'STANDARD');
	}

	if (appMatch('Building/Commercial/Tenant Improvement/NA') && !feeExists('PRMT') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB012', 'COMMTI', 'STANDARD', 1, 'N');
	}

	if ((appMatch('Building/Residential/New/NA') || appMatch('Building/3rd/Residential/New')) && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {

		//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES
		{
			totalSqFt = 0;
			if (typeof(BUILDINGINFORMATION) == 'object') {
				for (eachrow in BUILDINGINFORMATION)
					//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP
				{
					sqftRow = BUILDINGINFORMATION[eachrow];
					totalSqFt = totalSqFt + parseFloat(sqftRow['Total Adjusted Sq Ft']);

				}
				//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP;
			}

			if (totalSqFt >= 1 && totalSqFt < 1300) {
				aa.finance.editBValuatnValue(capId, 'Permit', (totalSqFt * 61), 'CONT');
			}

			if (totalSqFt >= 1300 && totalSqFt < 2400) {
				aa.finance.editBValuatnValue(capId, 'Permit', (totalSqFt * 66), 'CONT');
			}

			if (totalSqFt >= 2400) {
				aa.finance.editBValuatnValue(capId, 'Permit', (totalSqFt * 78), 'CONT');
			}

			if (totalSqFt >= 1) {
				updateFee('FB028', 'RESNEW', 'STANDARD', 1, 'N');
			}

		}
		//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES;
	}

	if (appMatch('Building/3RD/Residentail/New') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {

		//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES
		{
			totalSqFt = 0;
			if (typeof(BUILDINGINFORMATION) == 'object') {
				for (eachrow in BUILDINGINFORMATION)
					//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP
				{
					sqftRow = BUILDINGINFORMATION[eachrow];
					totalSqFt = totalSqFt + parseFloat(sqftRow['Total Adjusted Sq Ft']);

				}
				//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP;
			}

			if (totalSqFt >= 1 && totalSqFt < 1300) {
				aa.finance.editBValuatnValue(capId, 'Permit', (totalSqFt * 61), 'CONT');
			}

			if (totalSqFt >= 1300 && totalSqFt < 2400) {
				aa.finance.editBValuatnValue(capId, 'Permit', (totalSqFt * 66), 'CONT');
			}

			if (totalSqFt >= 2400) {
				aa.finance.editBValuatnValue(capId, 'Permit', (totalSqFt * 78), 'CONT');
			}

			if (totalSqFt >= 1) {
				updateFee('FB028', 'RESNEW', 'STANDARD', 1, 'N');
			}

		}
		//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES;
	}

	if (appMatch('Building/Fences/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB038', 'RES3RD', 'STANDARD', 1, 'N');
		invoiceFee('FB038', 'STANDARD');
	}

	if (appMatch('Building/Right of Way/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['ROW'] == 'Sidewalk') {
		addFee('FB045', 'BLDGROW', 'STANDARD', 1, 'N');
	}

	if (appMatch('Building/Right of Way/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['ROW'] == 'Driveway') {
		addFee('FB047', 'BLDGROW', 'STANDARD', 1, 'N');
	}

	if (appMatch('Building/Electrical/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {

		//replaced branch(ES_BLDGELEC_ADDFEES)
		esBldgElecFees()
	}

	if (appMatch('Building/Mechanical/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['PROJECTDOX.CRC Directive'] != 'Yes') {

		//replaced branch(ES_BLDGMECH_ADDFEES)
		esBldMechAddFees()
	}

	if (appMatch('Building/Plumbing/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['PROJECTDOX.CRC Directive'] != 'Yes' && AInfo['GENERAL.Type of Work'] != 'New Residential') {
		addFee('FB106', 'BLDGPLUMB', 'STANDARD', 1, 'N');

		//replaced branch(ES_BLDGPLUMB_ADDFEES)
		esBldgPlumbAddFees()
	}

	if (appMatch('Building/Reroof/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FB160', 'BLDGGEN', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Building/Demolition/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FB161', 'BLDGGEN', 'STANDARD', 1, 'Y');
	}

}
