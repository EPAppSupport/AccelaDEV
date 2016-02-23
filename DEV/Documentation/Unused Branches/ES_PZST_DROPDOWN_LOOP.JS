
asiRow =GROUPHOUSING[eachrow];
if (asiRow['Group Housing'] == 'Homeless Shelter' || asiRow['Group Housing'] == 'Halfway House' || asiRow['Group Housing'] == 'Group Residentail Facility' || asiRow['Group Housing'] == 'Disabled Group Dwelling') {
	activateTask('Site Verification');
	closeTask('Application Submittal','Submitted', 'Closed by script', 'Closed by script');
	closeTask('Task Assignment','Assign Paper Review', 'Closed by script', 'Closed by script');
	assignTask('Site Verification','CAHALANSM');
	activateTask('Close');
	}

if (asiRow['Licenses'] == 'Boarding Home' || asiRow['Licenses'] == 'Adult Foster Care Facility' || asiRow['Licenses'] == 'Lodging Home') {
	activateTask('Close');
	closeTask ('Application Submittal', 'Submitted', 'Closed by script', 'Closed by script');
	closeTask ('Task Assignment', 'Assign Paper Review', 'Closed by script', 'Closed by script');
	}

