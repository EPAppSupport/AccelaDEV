
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	editAppSpecific('Expiration Date', dateAddMonths(null, 12));
}

if (wfTask == 'Application Submittal' && wfStatus == 'No Review Required') {
	closeTask('Completeness Check', 'Ready to Issue', 'Closed by Script');
	activateTask('Issue');
	deactivateTask('Application Submittal');
}
