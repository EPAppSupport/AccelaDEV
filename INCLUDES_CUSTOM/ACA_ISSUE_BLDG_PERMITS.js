function ACA_ISSUE_BLDG_PERMITS() {

	closeTask('Application Submittal', 'Completed', 'Closed by Script - ACA');
	activateTask('Issue');
	closeTask('Issue', 'Issued', 'Closed by Script - ACA');
	editAppSpecific('Expiration Date', dateAdd(null, 180));

}
