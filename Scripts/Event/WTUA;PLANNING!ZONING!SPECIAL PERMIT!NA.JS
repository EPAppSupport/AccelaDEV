
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	editAppSpecific('Expiration Date', dateAdd(null, 375));
}

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

for (eachrow in GROUPHOUSING)
	//start replaced branch: ES_PZST_CLOSE_LOOP
{
	asiRow = GROUPHOUSING[eachrow];
	subject1 = ('A group home has been verified, registered or approved. The record number is ' + capIDString + '.');
	body1 = ('A group home has been verified, registered or approved. The record number is ' + capIDString + '.');
	subject2 = ('A group home requiring local licensing has been verified, registered or approved. The record number is ' + capIDString + '.');
	body2 = ('A group home requiring local licensing has been verified, registered or approved. The record number is ' + capIDString + '.');
	if (wfTask == 'Close' && wfStatus == 'Closed' && asiRow['Group Housing'] != 'null') {
		email('SotoMX@elpasotexas.gov', 'HoffmanAP@elpasotexas.gov', '[DEV] ' + 'accela@elpasotexas.gov', subject1, body1);
	}

	if (wfTask == 'Close' && wfStatus == 'Closed' && asiRow['Licenses'] != 'null') {
		email('CantuBR@elpasotexas.gov', 'accela@elpasotexas.gov', '[DEV] ' + subject2, body2);
	}

}
//end replaced branch: ES_PZST_CLOSE_LOOP;
if (wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['Special Permit Type'] == 'PWSF (Personal Wireless Service Facility)') {

	//replaced branch(ES_CASE_MANAGER_EMAIL_NOTIFICATION)
	ES_CASE_MANAGER_EMAIL_NOTIFICATION();
}

if (isTaskActive('Revisions') == true) {

	//replaced branch(ES_COMP_WORKFLOW_CASE_MGR_EMAIL_NOTIFICATION)
	ES_COMP_WORKFLOW_CASE_MGR_EMAIL_NOTIFICATION();
}
