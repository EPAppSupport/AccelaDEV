
if (wfTask == 'Task Assignment' && AInfo['Master Plan Review'] == 'Yes') {
	activateTask('Master Plan Review');
	}

if (wfTask == 'Task Assignment' && AInfo['Electrical Review'] == 'Yes') {
	activateTask('Electrical Review');
	}

if (wfTask == 'Master Plan Review' && (wfStatus == 'Approved' || wfStatus == 'Approved/Electrical Req' || wfStatus == 'Failed') && isTaskActive('Electrical Review')) {
	deactivateTask('Master Plan Review');
	closeTask('Master Plan Review',wfStatus, '');
	}

if (wfTask == 'Master Plan Review' && (wfStatus == 'Approved' || wfStatus == 'Approved/Electrical Req' || wfStatus == 'Failed') && isTaskActive('Electrical Review')== false) {
	deactivateTask('Master Plan Review');
	closeTask('Master Plan Review', wfStatus, '');
	activateTask('Completeness Check');
	deactivateTask('Electrical Review');
	}

if (wfTask == 'Completeness Check' && wfStatus == 'Approved') {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray= capContactResult.getOutput();
	// TODO: branch doesn't exist
	//for(y in conArray) branch('AA_WORKFLOW_EMAIL_APPLICANT');
	}

if (wfTask == 'Task Assignment' && wfStatus == 'Approved/Electrical Req') {
	activateTask('Electrical Review');
	email('SernaRJ@elpasotexas.gov;ChaviraD1@elpasotexas.gov;RiveraLD@elpasotexas.gov','accela@elpasotexas.gov','TEST - Electrical Review Required','Attention, <BR><BR> Record <b>' + capIDString + '</b> is now in <b>Electrical Review</b> and needs your attention. <BR><BR> Thank You.');
	}

