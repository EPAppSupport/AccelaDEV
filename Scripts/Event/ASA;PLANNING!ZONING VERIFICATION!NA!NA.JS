
for (eachrow in GROUPHOUSING)
	//start replaced branch: ES_PZVE_CHECKMARK_LOOP
{
	asiRow = GROUPHOUSING[eachrow];
	if (asiRow['Group Housing'] == 'Homeless Shelter' || asiRow['Group Housing'] == 'Halfway House' || asiRow['Group Housing'] == 'Group Residential Facility' || asiRow['Group Housing'] == 'Disabled Group Dwelling' || asiRow['Less than 5 People'] == 'CHECKED') {
		activateTask('Site Verification Review');
		closeTask('Application Submittal', 'Submitted', 'Closed by script', 'Closed by script');
		closeTask('Task Assignment', 'Assign Paper Review', 'Closed by script', 'Closed by script');
		assignTask('Site Verification Review', 'CAHALANSM');
	}

	if (asiRow['Permitted by Right'] == 'CHECKED') {
		activateTask('Close');
		closeTask('Application Submittal', 'Submitted', 'Closed by script', 'Closed by script');
		closeTask('Task Assignment', 'Assign Paper Review', 'Closed by script', 'Closed by script');
	}

}
//end replaced branch: ES_PZVE_CHECKMARK_LOOP;
