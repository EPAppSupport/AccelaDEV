
assignedInsp = 'SOTODY';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1600 Site Inspection';
scheduleInspectDate(inspType,nextInspDate,assignedInsp);

