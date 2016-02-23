function coepServiceReqUpdateWorkflow() {

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Complaint Type'] == 'Information Only' || AInfo['Information Request Only'] == 'Call Only') {
		updateTask('Request', 'Closed', ' ', ' ');
		deactivateTask('Request');
		updateAppStatus('Closed', 'Status closed by script');
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && wfTask == 'Request' && (wfStatus == 'Closed' || wfStatus == 'Call Only' || wfStatus == 'Cancelled - Created in Error' || wfStatus == 'Closed w Violations' || wfStatus == 'Closed Duplicate')) {
		updateTask('Close', 'Closed', ' ', ' ');
		deactivateTask('Close');
		updateAppStatus('Closed', 'Status closed by script');
	}

}
