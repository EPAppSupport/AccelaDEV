
if ((wfStatus == 'Recommend Denial')) {

	//replaced branch(ES_WORKFLOW_CASE_EMAIL_NOTIFICATION)
	ES_WORKFLOW_CASE_EMAIL_NOTIFICATION();
}

if ((wfStatus == 'Recommend Denial')) {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}
