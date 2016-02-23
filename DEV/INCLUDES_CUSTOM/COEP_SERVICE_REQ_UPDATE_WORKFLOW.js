function COEP_SERVICE_REQ_UPDATE_WORKFLOW() {

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Complaint Type'] == 'Information Only' || AInfo['Information Request Only'] == 'Call Only') {
		updateTask('Request', 'Closed', ' ', ' ');
		deactivateTask('Request');
		updateAppStatus('Closed', 'Status closed by script');
	}

}
