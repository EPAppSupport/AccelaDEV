
assignedInsp = 'OLIVASMR';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1135 Property Clean Up';
if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Completeness Check' && wfStatus == 'Transferred') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

