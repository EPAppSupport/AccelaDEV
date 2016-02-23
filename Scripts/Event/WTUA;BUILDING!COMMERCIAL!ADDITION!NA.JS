
if (wfTask == 'Completeness Check' && (wfStatus == 'Revisions Required' || wfStatus == 'Ready to Issue')) {
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
