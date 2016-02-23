

//start replaced branch: ES_ENFORCEMENT_INSPRESULTSUBMITAFTER
 {
if (appMatch('Enforcement/Food Inspections Complaints/NA/NA') && inspType == 'Investigation' && inspResult == 'No Violations' && isTaskActive('Investigation')) {
	branchTask('Investigation','No Violations','Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	}

if (appMatch('Enforcement/Food Inspections Complaints/NA/NA') && inspType == 'Investigation' && inspResult == 'Violations' && isTaskActive('Investigation')) {
	updateTask('Investigation','Violation','Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Violation' && isTaskActive('Investigation')) {
	updateTask('Investigation','Violations','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	updateAppStatus('Enforcement','Status set by batch script');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Non-Violation' && isTaskActive('Investigation')) {
	updateTask('Investigation','No Violations','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	closeTask('Close','Closed','Closed by Script after passing 1120 Site Inspection',' ');
	deactivateTask('Investigation');
	updateAppStatus('No Violation','Status set by batch script');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Complied' && isTaskActive('Investigation')) {
	updateTask('Investigation','Complied','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	closeTask('Close','Closed','Closed by Script after passing 1120 Site Inspection',' ');
	deactivateTask('Investigation');
	updateAppStatus('Complied','Status set by batch script');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Court' && isTaskActive('Investigation')) {
	closeTask('Investigation','Court','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	updateAppStatus('Pending Court','Status set by batch script');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Referred' && isTaskActive('Investigation')) {
	closeTask('Investigation','Referred','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	updateAppStatus('Referred','Status set by batch script');
	}

if (appMatch('Enforcement/Fire Code Compliance/NA/NA') && inspType == '1115 Investigation' && inspResult == 'No Violation' && isTaskActive('Investigate') == true && isTaskComplete('Investigate') == false) {
	updateTask('Investigate','No Violation',' ',' ');
	deactivateTask('Investigate');
	closeTask('Close','Closed','Closed by Script after 1115 Investigation Inspection resulted in No Violation',' ');
	updateAppStatus('Closed','Status set by batch script');
	}

if (appMatch('Enforcement/Fire Code Compliance/NA/NA') && inspType == '1115 Investigation' && inspResult == 'Violation' && isTaskActive('Investigate') == true && isTaskComplete('Investigate') == false) {
	updateTask('Investigate','Must Register',' ',' ');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Pending' && isTaskActive('Investigation')) {
	updateTask('Investigation','Pending','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	activateTask('Investigation');
	updateAppStatus('Pending','Status set by batch script');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Pending Writ' && isTaskActive('Investigation')) {
	updateTask('Investigation','Pending Writ','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	activateTask('Investigation');
	updateAppStatus('Pending Writ','Status set by batch script');
	comment('im at pending writ');
	}

if (appMatch('Enforcement/Environmental Complaints/NA/NA') && inspType == '1120 Site Inspection' && inspResult == 'Alley Inspection' && isTaskActive('Investigation')) {
	updateTask('Investigation','Alley Inspection','Updated via ES_ENFORCEMENT_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of '' + inspResult + '.'');
	closeTask('Close','Closed','Closed by Script after passing 1120 Site Inspection',' ');
	deactivateTask('Investigation');
	updateAppStatus('Cleaned','Status set by batch script');
	}

}
//end replaced branch: ES_ENFORCEMENT_INSPRESULTSUBMITAFTER;

