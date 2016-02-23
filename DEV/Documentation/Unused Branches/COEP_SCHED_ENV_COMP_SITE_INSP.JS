
DistrictNum = getGISInfo('Accela_map', 'ESD Inspection Region', 'REGION_NUM');
if (appMatch('Enforcement/Environmental Complaints/NA/NA') && (DistrictNum == 2 || DistrictNum == 4 || DistrictNum == 6)) {
	
//start replaced branch: COEP_SCHED_ENV_COMP_DISTRIC246
 {
assignedInsp = 'MANUEL.A.MORALES';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1120 Site Inspection';
if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

}
//end replaced branch: COEP_SCHED_ENV_COMP_DISTRIC246;
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && (DistrictNum == 1 || DistrictNum == 8)) {
	
//start replaced branch: COEP_SCHED_ENV_COMP_DISTRIC18
 {
assignedInsp = 'GCASTANEDA';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1120 Site Inspection';
if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

}
//end replaced branch: COEP_SCHED_ENV_COMP_DISTRIC18;
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && (DistrictNum == 3 || DistrictNum == 5 || DistrictNum == 7)) {
	
//start replaced branch: COEP_SCHED_ENV_COMP_DISTRIC357
 {
assignedInsp = 'RAMIREZVM';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1120 Site Inspection';
if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

}
//end replaced branch: COEP_SCHED_ENV_COMP_DISTRIC357;
	}

