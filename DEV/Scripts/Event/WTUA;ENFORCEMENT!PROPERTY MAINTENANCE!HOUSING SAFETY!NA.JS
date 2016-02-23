
if (wfTask == 'Complaint Received' && wfStatus == 'Assigned') {

	//start replaced branch: COEP_SCHED_HOUSESAFETY_INSP
	{
		taskUserObj = aa.person.getUser(wfTaskObj.getTaskItem().getAssignedUser().getFirstName(), wfTaskObj.getTaskItem().getAssignedUser().getMiddleName(), wfTaskObj.getTaskItem().getAssignedUser().getLastName()).getOutput();
		comment('taskUserObj is ' + taskUserObj.getUserID());
		var userId = taskUserObj.getUserID();
		comment('userId is' + userId);
		var cap = aa.cap.getCap(capId).getOutput();
		var rec_hour = cap.getAuditDate().getHourOfDay();
		if (rec_hour >= 15 || rec_hour <= 6) {
			scheduleInspection('215 Property Maint Inspection', '1', userId);
			assignTask('Investigation', userId);
			comment('hour is' + rec_hour);
		}

		if (userId != '' && rec_hour >= 7 && rec_hour < 15) {
			scheduleInspection('215 Property Maint Inspection', 0, userId);
			assignTask('Investigation', userId);
			comment('Hour is' + rec_hour);
		}

	}
	//end replaced branch: COEP_SCHED_HOUSESAFETY_INSP;
}

if (wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {

	//start replaced branch: COEP_SCHED_ENV_PRPRTY_MAINT_INSP
	{
		assignedInsp = 'CAHALANSM';
		assignedInsp2 = 'GUILLENFX';
		comment('Assigned Inspector is: ' + assignedInsp);
		nextInspDate = dateAdd(null, 1);
		comment('nextInspDate is: ' + nextInspDate);
		inspType = '215 PropertyMain Inspection';
		inspType2 = '410 Fire Inspection';
		if (appMatch('Enforcement/Property Maintenance/Housing Safety/NA') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {
			scheduleInspectDate(inspType, nextInspDate, assignedInsp);
		}

		if (appMatch('Enforcement/Property Maintenance/Housing Safety/NA') && wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {
			scheduleInspectDate(inspType2, nextInspDate, assignedInsp2);
		}

	}
	//end replaced branch: COEP_SCHED_ENV_PRPRTY_MAINT_INSP;
}

if (wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {

	//replaced branch(ES_ENV_SCHEDULE_1120_INSPECTION)
	ES_ENV_SCHEDULE_1120_INSPECTION();
}
