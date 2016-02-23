
if (wfTask == 'Inspection' && wfStatus == 'Issued TCO' && AInfo['Expiration Date'] > dateAdd(null, 30)) {
	editAppSpecific('Expiration Date', dateAdd(null, 30));
}

if (wfTask == 'Issue Certificate' && wfStatus == 'Issued' && (AInfo['GENERAL.Census Category'] == '213 - New Hotels' || AInfo['GENERAL.Census Category'] == '213a - New Motels & Cabins')) {
	email('perezbx@elpasotexas.gov;gardeajx@elpasotexas.gov;brionesev@elpasotexas.gov', 'accela@elpasotexas.gov', 'New Hotel/Motel Have been Issued', 'Record ' + capIDString + ' is a new Hotel/Motel/Cabin and has been final and it is ready to occupied');
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
