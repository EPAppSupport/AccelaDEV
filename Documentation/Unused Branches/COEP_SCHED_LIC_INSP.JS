
assignedInsp = 'SOTODY';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1600 Site Inspection';
if ((appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') || appMatch('Licenses/Swimming Pool and Spa/NA/NA') || appMatch('Licenses/Trailer Court/NA/NA') || appMatch('Licenses/Laundry/NA/NA'))) {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

