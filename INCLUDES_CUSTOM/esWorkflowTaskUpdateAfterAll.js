function esWorkflowTaskUpdateAfterAll() {

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

	if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pAppTypeString == 'ServiceRequest/Service Request/NA/NA') {

		//start replaced branch: COEP_SERVICE_REQUEST_GETDISTRICT
		{
			if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false) {
				pASIField = getAppSpecific('District', pCapID);
			}

			if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField != null) {

				//start replaced branch: COEP_SERVICE_REQUEST_EMAIL_DISTR
				{
					var pCapIDString = pCapID.getCustomID();
					var subject = ('Service Request Child record ' + capIDString + ' is now closed.');
					var emBody = ('Child Record ID ' + capIDString + ' is now Closed. This record is related to parent record ID ' + pCapIDString + '.');
					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '1') {
						email('District#1@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '2') {
						email('District#2@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '3') {
						email('District#3@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '4') {
						email('District#4@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '5') {
						email('District#5@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '6') {
						email('District#6@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '7') {
						email('District#7@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

					if (wfTask == 'Close' && (wfStatus == 'Closed' || wfStatus == 'Completed') && pCapID != false && pASIField == '8') {
						email('District#8@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);
					}

				}
				//end replaced branch: COEP_SERVICE_REQUEST_EMAIL_DISTR;
			}

		}
		//end replaced branch: COEP_SERVICE_REQUEST_GETDISTRICT;
	}

}
