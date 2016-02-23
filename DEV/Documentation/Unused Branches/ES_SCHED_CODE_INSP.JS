
assignedInsp = getLastInspector(inspType);
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,8);
comment('nextInspDate is: ' + nextInspDate);
if (AInfo['Code Violations'] == 'Weeds, Trash & Debris') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (AInfo['Facility Inspections'] == 'Swimming Pool/Spa') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

