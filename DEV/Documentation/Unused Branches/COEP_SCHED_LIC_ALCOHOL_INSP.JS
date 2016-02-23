
assignedInsp = 'CAHALANSM';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1400 Site Inspection';
if (appMatch('Licenses/Alcohol/NA/NA') && wfTask == 'Zoning Review' && wfStatus == 'Passed') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

