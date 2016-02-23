

//start replaced branch: ES_BUILDING_APPLICATIONSUBMITAFTER
{
	showMessage = false;
	if (appMatch('Building/Commercial/Tenant Improvement/NA')) {

		//start replaced branch: ES_BUILDING_ADD_TENANTIMPROVEMENT_INSP
		{
			assignedInsp = 'GARCIAAA';
			comment('Assigned Inspector is: ' + assignedInsp);
			nextInspDate = dateAdd(null, 1, 'Y');
			comment('nextInspDate is: ' + nextInspDate);
			inspType = '290 Site Inspection';
			if (appMatch('Building/Commercial/Tenant Improvement/NA')) {
				scheduleInspectDate(inspType, nextInspDate, assignedInsp);
			}

		}
		//end replaced branch: ES_BUILDING_ADD_TENANTIMPROVEMENT_INSP;
	}

}
//end replaced branch: ES_BUILDING_APPLICATIONSUBMITAFTER;
if (publicUser) {
	updateFee('FB015', 'COMMTI', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003-A', 'COMMTI', 'STANDARD', 1, 'Y', 'N');
	updateFee('TF001', 'COMMTI', 'STANDARD', 1, 'Y', 'N');
}
