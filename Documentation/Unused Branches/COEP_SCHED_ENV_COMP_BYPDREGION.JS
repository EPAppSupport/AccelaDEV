
assignedInsp = '';
pdRegion = getGISInfo('Accela_map', 'PoliceRegion', 'DISTRICT');
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1120 Site Inspection';
if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'MVRC') {
	assignedInsp = 'SOTODY';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'PHRC' && AInfo['INFORMATION.Primary Category'] != 'Vector') {
	assignedInsp = 'CASTANEDACV1';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Environmental Complaints/*/*')  && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'NERC' && AInfo['INFORMATION.Primary Category'] != 'Vector') {
	assignedInsp = 'MANUEL.A.MORALES';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'WSRC' && AInfo['INFORMATION.Primary Category'] != 'Vector') {
	assignedInsp = 'RAMIREZVM';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'CTCC' && AInfo['INFORMATION.Primary Category'] != 'Vector') {
	assignedInsp = 'CAHALANSM';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Environmental Complaints/*/*') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && AInfo['INFORMATION.Primary Category'] == 'Vector') {
	assignedInsp = 'SOTODY';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Property Maintenance/Housing Safety/NA') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'PHRC') {
	assignedInsp = 'CASTANEDACV1';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Property Maintenance/Housing Safety/NA') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'NERC') {
	assignedInsp = 'MANUEL.A.MORALES';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Property Maintenance/Housing Safety/NA') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'WSRC') {
	assignedInsp = 'RAMIREZVM';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Property Maintenance/Housing Safety/NA') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'CTCC') {
	assignedInsp = 'CAHALANSM';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

if (appMatch('Enforcement/Property Maintenance/Housing Safety/NA') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned' && pdRegion == 'MVRC') {
	assignedInsp = 'SOTODY';
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

