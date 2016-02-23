
if (wfTask == 'Application Submittal' && wfStatus == 'Assigned') {

	//replaced branch(ES_WORKFLOW_CASE_EMAIL_NOTIFICATION)
	ES_WORKFLOW_CASE_EMAIL_NOTIFICATION();
}

if (wfTask == 'Application Submittal' && wfStatus == 'Incomplete') {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}

if ((wfStatus == 'Recommend Denial')) {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}
