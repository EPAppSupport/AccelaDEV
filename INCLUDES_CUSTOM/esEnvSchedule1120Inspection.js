function esEnvSchedule1120Inspection() {

	var inspId = '1120 Site Inspection';
	var getUserID = getTaskAssignedUser3('Receive Complaint', 'EVPN0002', '1120 Site Inspection');
	comment('********USERID IS ' + getUserID);
	if (getUserID != '') {
		scheduleInspection(inspId, 1, getUserID);
		assignTask('Investigation', getUserID);
	}

	taskUserObj = aa.person.getUser(wfTaskObj.getTaskItem().getAssignedUser().getFirstName(), wfTaskObj.getTaskItem().getAssignedUser().getMiddleName(), wfTaskObj.getTaskItem().getAssignedUser().getLastName()).getOutput();
	var userId = taskUserObj.getUserID();
	if (userId != '') {
		scheduleInspection('1120 Site Inspection', 1, userId);
		assignTask('Investigation', userId);
	}

}
