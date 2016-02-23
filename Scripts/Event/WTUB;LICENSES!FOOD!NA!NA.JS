
if (wfTask == 'Issue' && wfStatus == 'Issued' && (pCapID != false && pCapID != null)) {

	//start replaced branch: COEP_LICENSES_FOOD_EXPDATE
	{
		if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issued') {
			pCapID = getParent();
			var vExpDate = dateAddMonths(wfGetHistStatusDate(pCapID, 'Issue', 'Issued'), 12);
		}

		if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && pCapID != false) {
			pCapObj = aa.cap.getCap(pCapID).getOutput();
			pCapStatus = pCapObj.getCapStatus();
			pAppTypeResult = pCapObj.getCapType();
			pAppTypeString = pAppTypeResult.toString();
			pAppTypeArray = pAppTypeString.split('/');
			PerGroup = pAppTypeArray[0];
			PerType = pAppTypeArray[1];
		}

		if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && pCapID != false && PerGroup == 'Health' && PerType == 'Food Inspections') {
			editAppSpecific('Expiration Date', vExpDate);
		}

	}
	//end replaced branch: COEP_LICENSES_FOOD_EXPDATE;
}
