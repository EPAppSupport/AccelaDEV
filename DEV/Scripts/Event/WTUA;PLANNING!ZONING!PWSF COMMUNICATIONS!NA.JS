
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	editAppSpecific('Expiration Date', dateAddMonths(null, 12));
}

if (wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['Fast Track'] == 'Yes') {

	//replaced branch(ES_CASE_MANAGER_EMAIL_NOTIFICATION)
	ES_CASE_MANAGER_EMAIL_NOTIFICATION();
}

if (wfTask == 'Task Assignment' && (wfStatus == 'Assign Electronic Review' || wfStatus == 'Assign Paper Review')) {

	//replaced branch(ES_REZONING_ASSIGN_NOTIFICATIONS)
	ES_REZONING_ASSIGN_NOTIFICATIONS();
}

if (wfTask == 'Inspection' && wfStatus == 'Fail w ReFee') {
	addFee('FB082', 'BLDGPWSF ', 'STANDARD', 1, 'N');
}
