function ES_WORKFLOWTASKUPDATEAFTER_ALL() {

	if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed')) {
		pCapID = getParent();
		comment('Parent ID is: ' + pCapID);
	}

	if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false) {
		pCapObj = aa.cap.getCap(pCapID).getOutput();
		pCapStatus = pCapObj.getCapStatus();
		pAppTypeResult = pCapObj.getCapType();
		pAppTypeString = pAppTypeResult.toString();
	}

	// TODO: branch doesn't exist, all lines disabled
	/*
	if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed')  && pCapID != false && pAppTypeString == 'ServiceRequest/Service Request/NA/NA') {
	branch('COEP_SERVICE_REQUEST_GETDISTRICT');
	}
	 */
}
