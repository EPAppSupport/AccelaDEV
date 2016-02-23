
if (wfTask == 'Application Submittal' && wfStatus == 'Completed') {

	//start replaced branch: COEP_SCHED_LICENSE_ANIMAL_INSP
	{
		assignedInsp = '';
		comment('Assigned Inspector is: ' + assignedInsp);
		nextInspDate = dateAdd(null, 1);
		comment('nextInspDate is: ' + nextInspDate);
		inspType = '1200 Site Inspection';
		if (appMatch('Licenses/Animal/*/*') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
			scheduleInspectDate(inspType, nextInspDate, assignedInsp);
		}

	}
	//end replaced branch: COEP_SCHED_LICENSE_ANIMAL_INSP;
}
