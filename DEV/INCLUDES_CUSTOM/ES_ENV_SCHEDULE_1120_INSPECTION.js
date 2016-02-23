function ES_ENV_SCHEDULE_1120_INSPECTION() {

	taskUserObj = aa.person.getUser(wfTaskObj.getTaskItem().getAssignedUser().getFirstName(), wfTaskObj.getTaskItem().getAssignedUser().getMiddleName(), wfTaskObj.getTaskItem().getAssignedUser().getLastName()).getOutput();
	var userId = taskUserObj.getUserID();
	if (userId != '') {
		scheduleInspection('1120 Site Inspection', 1, userId);
		assignTask('Investigation', userId);
	}

}
