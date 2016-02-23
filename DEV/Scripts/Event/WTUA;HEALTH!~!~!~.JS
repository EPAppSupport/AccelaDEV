
inspResult = null;

//start replaced branch: ES_HEALTH_FEES
{
	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '9.12.070K0', '9.12.070K1', '9.12.070K2', '9.12.070K3', '9.12.070K4') && matches(AInfo['Permit Type'], 'Food Product Establishment', 'Food Service Establishment') && AInfo['Square Footage'] > 0 && !(AInfo['Permit Type'] == 'Food Product Establishment' && AInfo['Section'] == '9.12.070K0')) {
		addFee('FH001', 'HLTHFIXED', 'STANDARD', 1, 'N');
		addFee('FH014', 'HLTHFIXED', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '9.12.070B', '9.12.070E', '9.12.070F', '9.12.070K0', '9.12.070N', '9.12.070O', '9.12.070P') && matches(AInfo['Permit Type'], '(5-8) Personal Care Home', '(9-18) Personal Care Home', 'Adult Foster Care Home or Private Care Home', 'Day Care Center', 'Federal or State Inspected', 'Home Child Care Facility', 'Food Product Establishment')) {
		addFee('FH001', 'HLTHFIXED', 'STANDARD', 1, 'N');
		addFee('FH014B', 'HLTHFIXED', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Food Handler/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'External Class Taken', 'Received') && AInfo['City Employee'] != 'Yes' && AInfo['Type'] == 'Food Handler' && matches(AInfo['Subtype'], 'Challenge Exam', 'Course')) {
		addFee('FH020', 'HLTHFH', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Food Handler/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'External Class Taken', 'Received') && AInfo['City Employee'] != 'Yes' && AInfo['Type'] == 'Food Handler' && AInfo['Subtype'] == 'Recognized') {
		addFee('FH023', 'HLTHFH', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Food Handler/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'External Class Taken', 'Received') && AInfo['City Employee'] != 'Yes' && AInfo['Type'] == 'Food Handler' && AInfo['Subtype'] == 'Permanent') {
		addFee('FH200', 'HLTHFH', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Food Handler/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'External Class Taken', 'Received') && AInfo['City Employee'] != 'Yes' && AInfo['Type'] == 'Management' && AInfo['Subtype'] == 'Recognized') {
		addFee('FH021', 'HLTHFH', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Food Handler/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'External Class Taken', 'Received') && AInfo['City Employee'] != 'Yes' && AInfo['Type'] == 'Management' && matches(AInfo['Subtype'], 'Challenge Exam', 'Course')) {
		addFee('FH017', 'HLTHFH', 'STANDARD', 1, 'N');
		addFee('FH022', 'HLTHFH', 'STANDARD', 1, 'N');
		addFee('FH018', 'HLTHFH', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Mobile/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '9.12.070H', '9.12.070I')) {
		addFee('FH024', 'HLTHMOBILE', 'STANDARD', 1, 'N');
		addFee('FH037', 'HLTHMOBILE', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Recurrent/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '9.12.070C2', '9.12.070D2')) {
		addFee('FH041', 'HLTHREC', 'STANDARD', 1, 'N');
		addFee('FH054', 'HLTHREC', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Health and Sanitary Insp/NA') && (AInfo['Non Profit'] == 'No' && AInfo['County'] == 'No') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required')) {
		addFee('FH001', 'HLTHSAN', 'STANDARD', 1, 'N');
		addFee('FH002', 'HLTHSAN', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '4(a)') && AInfo['Square Footage'] < 3000 && AInfo['Permit Type'] == 'Food Service Establishment') {
		addFee('FHC0014', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '4(b)') && AInfo['Square Footage'] >= 3000 && AInfo['Permit Type'] == 'Retail Food Store') {
		addFee('FHC0003', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && AInfo['Section'] == '4(h)') {
		addFee('FHC0009', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && AInfo['Section'] == '4(i)') {
		addFee('FHC0010', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && AInfo['Section'] == '4(j)') {
		addFee('FHC0011', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && AInfo['Section'] == '4(k)') {
		addFee('FHC0012', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && AInfo['Section'] == '4(l)') {
		addFee('FHC0013', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Roadside-Outdoor Market/NA') && matches(AInfo['PERMIT INFO.Section'], '9.12.070L')) {
		addFee('FH054', 'HLTHOS', 'STANDARD', 1, 'N');
		addFee('FH057', 'HLTHOS', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '9.12.070F') && matches(AInfo['Permit Type'], 'Day Care Center')) {
		removeFee('FH014B', 'STANDARD');
		addFee('FH014A', 'HLTHFIXED', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '4(a)') && AInfo['Square Footage'] < 3000 && AInfo['Permit Type'] == 'Retail Food Store') {
		addFee('FHC0002', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && wfTask == 'Application Submittal' && matches(wfStatus, 'Submitted', 'Review Required', 'No Review Required') && matches(AInfo['Section'], '4(b)') && AInfo['Square Footage'] > 2999 && AInfo['Permit Type'] == 'Food Service Establishment') {
		addFee('FHC0015', 'HLTHCOUNTY', 'STANDARD', 1, 'N');
	}

}
//end replaced branch: ES_HEALTH_FEES;

//start replaced branch: ES_HEALTH_WFTASKUPDATEAFTER
{
	var CapAddress = getCapAddress(capId);
	if (appMatch('Health/Food Inspections/Food Handler/*') && wfTask == 'Issue' && wfStatus == 'Issued' && (AInfo['Subtype'] == 'Course' || AInfo['Subtype'] == 'Challenge Exam')) {

		//start replaced branch: ES_HLTH_SET_CRSE_EXP_DATE
		{
			numRows = 0;
			lastDate = ('01/01/2000');
			if (SCHEDULEINFORMATION.length < 1) {
				showMessage = true;
				comment('Cannot be Issued. No Course has been entered');
				cancel = true;
			}

			if (typeof(SCHEDULEINFORMATION) == 'object') {
				for (eachrow in SCHEDULEINFORMATION)
					//start replaced branch: ES_HLTH_SET_CRSE_EXP_DATE_LOOP
				{
					siteRow = SCHEDULEINFORMATION[eachrow];
					numRows = numRows + 1;
					if (lastDate < siteRow['Course Date']) {
						lastDate = siteRow['Course Date'];
						showMessage = true;
					}

					if (lastDate < siteRow['Rescheduled Date']) {
						lastDate = siteRow['Rescheduled Date'];
						showMessage = true;
					}

				}
				//end replaced branch: ES_HLTH_SET_CRSE_EXP_DATE_LOOP;
			}

			if ((numRows == 0 || lastDate == 07 / 09 / 2000)) {
				showMessage = true;
				comment('Cannot be Issued. No date has been sent has not been approved.');
				cancel = true;
			}

			if (lastDate != 01 / 01 / 2000) {
				editAppSpecific('Expiration Date', dateAddMonths(lastDate, 24));
			}

		}
		//end replaced branch: ES_HLTH_SET_CRSE_EXP_DATE;
	}

	if (appMatch('Health/Food Inspections/Fixed Location/*') && wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['Grease Trap'] == 'Yes') {
		email('sgalindo@epwu.org;
				Nenye@epwu.org', 'accela@elpasotexas.gov', ('Record ' + capIDString + ' has been updated.'), ('Grease Traps are required for Business/Project: ' + capName + '.  The business address is ' + CapAddress + '.  If an EPWU Registration number was provided, the number is ' + AInfo['EPWU Registration']));
	}

}
//end replaced branch: ES_HEALTH_WFTASKUPDATEAFTER;

//replaced branch(ES_WORKFLOWTASKUPDATEAFTER_ALL)
ES_WORKFLOWTASKUPDATEAFTER_ALL();
