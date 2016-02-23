
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	sibCapId = getChildren('Environmental/Permits/CDM/NA', capId);
	sibCapId != null && typeof(sibCapId) == 'object';
} else {
	for (eachchild in sibCapId)
		//start replaced branch: ES_CHECK_SIB_APP_SUB_LOOP
	{
		eachsibCapId = sibCapId[eachchild];
		var tempCapId = capId;
		capId = eachsibCapId;
		if (!isTaskStatus('Application Submittal', 'Completed')) {
			showMessage = true;
			comment('Cannot complete task until child application submittal has been completed.');
			cancel = true;
		}

		capId = tempCapId;

	}
	//end replaced branch: ES_CHECK_SIB_APP_SUB_LOOP;
}
