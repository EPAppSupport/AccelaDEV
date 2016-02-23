
if (wfTask == 'Inspection' && wfStatus == 'Extension Issued') {
	editAppSpecific('Expiration Date', dateAdd(wfDateMMDDYYYY.toString(), 180));
}

if (wfTask == 'Issue' && wfStatus == 'Issued') {

	//start replaced branch: ES_CREATE_CHILD_EPCDM
	{
		vApp = createChild('Environmental', 'Permits', 'CDM', 'NA', capIDString);

		cCapId = childGetByCapType('Environmental/Permits/CDM/NA', capId);
		comment('cCapId is: ' + cCapId);
		assignTaskToChildRecord('Application Submittal', 'SALCIDOFX', cCapId);

	}
	//end replaced branch: ES_CREATE_CHILD_EPCDM;
}
