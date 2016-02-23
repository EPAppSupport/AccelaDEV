
if (wfTask == 'Receive Complaint' && wfStatus == 'Assigned') {

	//replaced branch(ES_ENV_SCHEDULE_1120_INSPECTION)
	ES_ENV_SCHEDULE_1120_INSPECTION();
}

if (wfTask == 'Completeness Check' && wfStatus == 'Transferred') {
	activateTask('SWM Completeness Check');
	deactivateTask('Completeness Check');
	assignTask('SWM Completeness Check', 'LUISA.E.BUSTAMANTE');
}

//replaced branch(ES_AMO_ASSIGN_SUPERVISOR)
ES_AMO_ASSIGN_SUPERVISOR();
