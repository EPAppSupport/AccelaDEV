
if ((AInfo['Term of License'] == '1 Year' || AInfo['Term of License'] == '2 Year')) {

	//replaced branch(COEP_LICENSES_RENEWAL_YEARS)
	COEP_LICENSES_RENEWAL_YEARS();
}

if (wfTask == 'Application Submittal' && wfStatus == 'Appeal Granted') {
	activateTask('Inspection');
	setTask('Application Submittal', 'N', 'Y', getWorkflowProcess(wfTask));
}

if (wfTask == 'Application Submittal' && wfStatus == 'Appeal Denied') {
	activateTask('Close');
	setTask('Application Submittal', 'N', 'Y', getWorkflowProcess(wfTask));
}

if (wfTask == 'Inspection' && wfStatus == 'Failed') {
	activateTask('Appeal');
	setTask('Inspection', 'N', 'Y', getWorkflowProcess(wfTask));
}

if (wfTask == 'Inspection' && wfStatus == 'Failed') {
	email('RubioAX@elpasotexas.gov;McElroyMS@elpasotexas.gov', 'accela@elpasotexas.gov', '[DEV] ' + '[TEST] ' + ('* TEST * - ' + capIDString + ' Failed Inspection'), ('Record ' + capIDString + ' has failed inspection.'));
}
