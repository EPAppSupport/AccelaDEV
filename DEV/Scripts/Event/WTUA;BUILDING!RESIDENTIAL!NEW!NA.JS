
if (wfTask == 'Inspection' && wfStatus == 'Issued TCO' && AInfo['Expiration Date'] > dateAdd(null, 30)) {
	editAppSpecific('Expiration Date', dateAdd(null, 30));
}
//comment

if (wfTask == 'Issue' && wfStatus == 'Issued') {
	editAppSpecific('Expiration Date', dateAdd(null, 180));
	showMessage = true;
	comment('Expiration Date : ' + AInfo['Expiration Date']);
}

if ((wfStatus == 'Failed' || wfStatus == 'Fail')) {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}

if ((wfStatus == 'Failed' || wfStatus == 'Fail')) {

	//replaced branch(ES_WORKFLOW_CASE_EMAIL_NOTIFICATION)
	ES_WORKFLOW_CASE_EMAIL_NOTIFICATION();
}

if (wfTask == 'Completeness Check' && (wfStatus == 'Revisions Required' || wfStatus == 'Ready to Issue' || wfStatus == 'Hold for Corrections')) {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}

if (wfTask == 'Application Submittal' && wfStatus == 'Completed') {

	//replaced branch(ES_WORKFLOW_CASE_EMAIL_NOTIFICATION)
	ES_WORKFLOW_CASE_EMAIL_NOTIFICATION();
}

if (isTaskActive('Completeness Check') == true) {

	//replaced branch(ES_COMP_WORKFLOW_CASE_MGR_EMAIL_NOTIFICATION)
	ES_COMP_WORKFLOW_CASE_MGR_EMAIL_NOTIFICATION();
}

if (wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {

	//start replaced branch: ES_CREATE_TRADE_CHILD_RECORDS
	{
		permitFeeAmount = 0;
		tradeFeeAmount = 0;
		techAmount = 0;
		childCapId = null;
		permitFeeAmount = feeAmount('FB028', 'INVOICED');
		tradeFeeAmount = feeAmount('FB028A', 'INVOICED');
		techAmount = (permitFeeAmount + tradeFeeAmount);
		logDebug(techAmount = (permitFeeAmount + tradeFeeAmount));
		updateFee('TF001A', 'RESNEW', 'STANDARD', techAmount, 'Y');
		if (appTypeString == 'Building/Residential/New/NA' && childElectrical == null) {
			createChild('Building', 'Electrical', 'NA', 'NA', cap.getSpecialText());
			childCapId = childGetByCapType('Building/Electrical/NA/NA');
			copyOwner(capId, childCapId);

			//start replaced branch: ES_ADD_TRADE_ELECTRICAL_FEES
			{
				cCapId = childGetByCapType('Building/Electrical/NA/NA');
				tempId = capId;
				elecFeeAmount = 0;
				if ((cCapId)) {
					elecFeeAmount = feeAmount('FB028', 'INVOICED');
					capId = cCapId;
					updateFee('FRN001', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
					capId = tempId;
				}

			}
			//end replaced branch: ES_ADD_TRADE_ELECTRICAL_FEES;
		}

		if (appTypeString == 'Building/Residential/New/NA' && childMech == null) {
			createChild('Building', 'Mechanical', 'NA', 'NA', cap.getSpecialText());
			childCapId = childGetByCapType('Building/Mechanical/NA/NA');
			copyOwner(capId, childCapId);

			//start replaced branch: ES_ADD_TRADE_MECHANICAL_FEES
			{
				cCapId = childGetByCapType('Building/Mechanical/NA/NA');
				tempId = capId;
				mechFeeAmount = 0;
				if ((cCapId)) {
					mechFeeAmount = feeAmount('FB028', 'INVOICED');
					capId = cCapId;
					updateFee('FRN001', 'BLDGMECH', 'STANDARD', mechFeeAmount, 'Y', 'N');
					capId = tempId;
				}

			}
			//end replaced branch: ES_ADD_TRADE_MECHANICAL_FEES;
		}

		if (appTypeString == 'Building/Residential/New/NA' && childPlum == null) {
			createChild('Building', 'Plumbing', 'NA', 'NA', cap.getSpecialText());
			childCapId = childGetByCapType('Building/Plumbing/NA/NA');
			copyOwner(capId, childCapId);

			//start replaced branch: ES_ADD_TRADE_PLUMBING_FEES
			{
				cCapId = childGetByCapType('Building/Plumbing/NA/NA');
				tempId = capId;
				plumbFeeAmount = 0;
				tradeFeeAmount = 0;
				techAmount = 0;
				if ((cCapId)) {
					plumbFeeAmount = feeAmount('FB028', 'INVOICED');
					capId = cCapId;
					updateFee('FRN001', 'BLDGPLUMB', 'STANDARD', plumbFeeAmount, 'Y', 'N');
					capId = tempId;
				}

			}
			//end replaced branch: ES_ADD_TRADE_PLUMBING_FEES;
		}

		if (appTypeString == 'Building/3rd/Residential/New' && child3Elec == null) {
			createChild('Building', '3rd', 'Electrical', 'NA', cap.getSpecialText());
			childCapId = childGetByCapType('Building/3rd/Electrical/NA');
			copyOwner(capId, childCapId);

			//start replaced branch: ES_ADD_3RD_TRADE_ELECTRICAL_FEES
			{
				cCapId = childGetByCapType('Building/3rd/Electrical/NA');
				tempId = capId;
				elecFeeAmount = 0;
				if ((cCapId)) {
					elecFeeAmount = feeAmount('FB028', 'INVOICED');
					capId = cCapId;
					updateFee('FRN001', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
					capId = tempId;
				}

			}
			//end replaced branch: ES_ADD_3RD_TRADE_ELECTRICAL_FEES;
		}

		if (appTypeString == 'Building/3rd/Residential/New' && child3Mech == null) {
			createChild('Building', '3rd', 'Mechanical', 'NA', cap.getSpecialText());
			childCapId = childGetByCapType('Building/3rd/Mechanical/NA');
			copyOwner(capId, childCapId);

			//start replaced branch: ES_ADD_3RD_TRADE_MECHANICAL_FEES
			{
				cCapId = childGetByCapType('Building/3rd/Mechanical/NA');
				tempId = capId;
				mechFeeAmount = 0;
				if ((cCapId)) {
					mechFeeAmount = feeAmount('FB028', 'INVOICED');
					capId = cCapId;
					updateFee('FRN001', 'BLDGMECH', 'STANDARD', mechFeeAmount, 'Y', 'N');
					capId = tempId;
				}

			}
			//end replaced branch: ES_ADD_3RD_TRADE_MECHANICAL_FEES;
		}

		if (appTypeString == 'Building/3rd/Residential/New' && child3Plum == null) {
			createChild('Building', '3rd', 'Plumbing', 'NA', cap.getSpecialText());
			childCapId = childGetByCapType('Building/Plumbing/NA/NA');
			copyOwner(capId, childCapId);

			//start replaced branch: ES_ADD_3RD_TRADE_PLUMBING_FEES
			{
				cCapId = childGetByCapType('Building/3rd/Plumbing/NA');
				tempId = capId;
				plumbFeeAmount = 0;
				if ((cCapId)) {
					plumbFeeAmount = feeAmount('FB028', 'INVOICED');
					capId = cCapId;
					updateFee('FRN001', 'BLDGPLUMB', 'STANDARD', plumbFeeAmount, 'Y', 'N');
					capId = tempId;
				}

			}
			//end replaced branch: ES_ADD_3RD_TRADE_PLUMBING_FEES;
		}

		childElectrical = getChildren('Building/Electrical/NA/NA');
		childMech = getChildren('Building/Mechanical/NA/NA');
		childPlum = getChildren('Building/Plumbing/NA/NA');
		child3Elec = getChildren('Building/3rd/Electrical/NA');
		child3Mech = getChildren('Building/3rd/Mechanical/NA');
		child3Plum = getChildren('Building/3rd/Plumbing/NA');

	}
	//end replaced branch: ES_CREATE_TRADE_CHILD_RECORDS;
}

// TODO: branch doesn't exist
if (wfTask == 'Completeness Check' && wfStatus == 'Completed') {
	//branch('ES_ADD_TRADE_FEES');
}
