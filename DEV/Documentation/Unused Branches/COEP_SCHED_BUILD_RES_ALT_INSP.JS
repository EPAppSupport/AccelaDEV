
assignedInsp = '';
var gisArea = getGISInfo('Accela_map','RES BLD INSP AREA','NAME');
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='980 Pre-Inspection';
if (appMatch('Building/Residential/Alteration/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && matches(gisArea,'NORTHWEST','NORTHEAST','CENTRAL','COUNTY WEST', '')) {
	assignedInsp = 'FANNINWB';
	}

if (appMatch('Building/Residential/Alteration/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && matches(gisArea,'LV','LOWER VALLEY','EAST','COUNTY EAST','COUNTY LV')) {
	assignedInsp = 'FIERROGUZMAN';
	}

if (appMatch('Building/Residential/Alteration/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && assignedInsp  == '') {
	assignedInsp = 'FIERROGUZMAN';
	}

if (appMatch('Building/Residential/Alteration/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && assignedInsp != '') {
	scheduleInspectDate(inspType,nextInspDate,assignedInsp);
	}

