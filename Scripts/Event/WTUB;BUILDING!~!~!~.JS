

if (wfTask == 'Task Assignment' && matches(wfStatus, 'Assign Electronic Review')) {
	docsList = new Array;
	docsList = getDocumentList();
}

//replaced branch(ES_CHECK_LIC_PROF)
ES_CHECK_LIC_PROF();

//start replaced branch: ES_CHECK_SUB_STATUS
{
	parentSubStatus = null;
	totalPulledPermits = 0;
	pCapStatus = null;
	maxSubLots = 0;
	subLots = 0;
	numPulledPermits = 0;
	pCapID = getParent();
	comment('Parent CAP is: ' + pCapID);
	if (pCapID != false) {
		pCapObj = aa.cap.getCap(pCapID).getOutput();
		pCapStatus = pCapObj.getCapStatus();
		pAppTypeResult = pCapObj.getCapType();
		pAppTypeString = pAppTypeResult.toString();
		comment('parent app type is: ' + pAppTypeString);
		comment('parent cap status is: ' + pCapStatus);
	}

	if (pCapID != false && pCapStatus != 'Recorded' && pAppTypeString == 'Planning/Subdivision/Subdivision/*') {
		parentSubStatus = getAppSpecific('Status', pCapID);
		subLots = getAppSpecific('Total No. of Lots', pCapID);
	}

	if (pCapID != false && pCapStatus != 'Recorded' && pAppTypeString == 'Planning/Subdivision/Subdivision/*' && parentSubStatus == 'Condition A') {
		maxSubLots = parseInt(.50 * subLots);
		comment('Max Num of Lots is: ' + maxSubLots);
	}

	if (pCapID != false && pCapStatus != 'Recorded' && pAppTypeString == 'Planning/Subdivision/Subdivision/*' && parentSubStatus == 'Condition B') {
		maxSubLots = parseInt(subLots);
		comment('Max Num of Lots is: ' + maxSubLots);
	}

	if (pCapID != false && pCapStatus != 'Recorded' && pAppTypeString == 'Planning/Subdivision/Subdivision/*' && parentSubStatus == 'Unconditional') {
		maxSubLots = parseInt(.25 * subLots);
		comment('Max Num of Lots is: ' + maxSubLots);
	}

	if (pCapID != false && pCapStatus != 'Recorded' && pAppTypeString == 'Planning/Subdivision/Subdivision/*' && parentSubStatus != null) {
		sibCapID = getChildren('Building/*/*/*', pCapID, capId);
	}

	if (pCapID != false && pCapStatus != 'Recorded' && pAppTypeString == 'Planning/Subdivision/Subdivision/*' && sibCapID != null && typeof(sibCapID) == 'object') {
		for (eachchild in sibCapID)
			//start replaced branch: ES_CHECK_SUB_STATUS_LOOP
		{
			eachsibCapID = sibCapID[eachchild];
			numPulledPermits = 0;
			if (eachsibCapID != false) {
				eachsibCapObj = aa.cap.getCap(eachsibCapID).getOutput();
				sibCapStatus = eachsibCapObj.getCapStatus();
				sibAppTypeResult = eachsibCapObj.getCapType();
				sibAppTypeString = sibAppTypeResult.toString();
				comment('Sib CAP status is: ' + sibCapStatus);
			}

			if (sibCapStatus != 'Open' && sibCapStatus != null) {
				numPulledPermits = 1;
				comment('numPulledPermits is: ' + numPulledPermits);
			}

			totalPulledPermits = totalPulledPermits + parseFloat(numPulledPermits);
			comment('totalPulledPermits is: ' + totalPulledPermits);

		}
		//end replaced branch: ES_CHECK_SUB_STATUS_LOOP;
	}

	if (pCapID != false && pCapStatus != 'Recorded' && pAppTypeString == 'Planning/Subdivision/Subdivision/*' && totalPulledPermits >= maxSubLots) {
		showMessage = true;
		comment('There are already the max allowed number of building permits active on this subdivision. Cannot advance workflow until parent subdivision status is updated or mylar is recorded.');
		cancel = true;
	}

}
//end replaced branch: ES_CHECK_SUB_STATUS;
if (fileDate >= '02/28/2011') {

	//start replaced branch: ES_BLDG_CHCK_PREFLDPLNCERT
	{
		numRows = 0;
		prelimFldPlnCert = 'NO';
		finalFloodPlnCert = 'NO';
		if (wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Flood Plain'] == 'Yes' && typeof(SITEINFORMATION) != 'object') {
			showMessage = true;
			comment('Cannot be Issued. Preliminary Flood Plain Cert has not been approved.');
			cancel = true;
		}

		if (wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Flood Plain'] == 'Yes' && typeof(SITEINFORMATION) == 'object') {
			for (eachrow in SITEINFORMATION)
				//start replaced branch: ES_BLDG_CHCK_PREFLDPLNCERT_LOOP
			{
				siteRow = SITEINFORMATION[eachrow];
				if (siteRow['Type'] == 'Preliminary Flood Plain Cert') {
					numRows = (numRows + 1);
				}

				if (siteRow['Type'] == 'Preliminary Flood Plain Cert' && siteRow['Status'] == 'Approved') {
					prelimFldPlnCert = 'YES';
				}

			}
			//end replaced branch: ES_BLDG_CHCK_PREFLDPLNCERT_LOOP;
		}

		if (wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Flood Plain'] == 'Yes' && (numRows == 0 || prelimFldPlnCert == 'NO')) {
			showMessage = true;
			comment('Cannot be Issued. Preliminary Flood Plain Cert has not been approved.');
			cancel = true;
		}

	}
	//end replaced branch: ES_BLDG_CHCK_PREFLDPLNCERT;
}

//start replaced branch: ES_BLDG_WFTASKUPDATEBEFORE
{
	if (appMatch('Building/*/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && balanceDue > 0 && AInfo['EPISD'] != 'Yes') {
		showMessage = true;
		comment('There is a balance due on this record. Balance must be paid before permit can be issued.');
		cancel = true;
	}

	if (appMatch('Building/Plumbing/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && typeof(PLUMBINGFIXTURES) != 'object') {
		showMessage = true;
		comment('Cannot Issue, need to fill ASI Table');
		cancel = true;
	}

}
//end replaced branch: ES_BLDG_WFTASKUPDATEBEFORE;
if (!appMatch('Building/Right of Way/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Work Done By'] == 'Owner') {

	//start replaced branch: COEP_CHECK_NO_LIC_PROF
	{
		var profArr = aa.licenseScript.getLicenseProf(capId);
		if (profArr.getSuccess()) {
			profArrList = profArr.getOutput();
		}

		if (profArrList == null) {
			showMessage = true;
			comment('No licensed professionals found on CAP');
			cancel = true;
		}

	}
	//end replaced branch: COEP_CHECK_NO_LIC_PROF;
}

if ((wfTask == 'Issue Certificate' || wfTask == 'Issue') && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('Task cannot be completed. There is a balance on the application. All invoiced fees must be paid before permit issuance. ');
	cancel = true;
}
