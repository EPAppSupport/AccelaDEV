
if (wfTask == 'Revisions' && wfStatus == 'Revisions Required') {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}

if (wfTask == 'Task Assignment' && (wfStatus == 'Assign Electronic Review' || wfStatus == 'Assign Paper Review')) {

	//replaced branch(ES_REZONING_ASSIGN_NOTIFICATIONS)
	ES_REZONING_ASSIGN_NOTIFICATIONS();
}
