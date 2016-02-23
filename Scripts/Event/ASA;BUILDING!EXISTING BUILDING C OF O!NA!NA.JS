

//start replaced branch: COEP_SCHED_BECO_INSP
{
	assignedInsp = 'GARCIAAA';
	comment('Assigned Inspector is: ' + assignedInsp);
	nextInspDate = dateAdd(null, 1);
	comment('nextInspDate is: ' + nextInspDate);
	inspType = '250 Building Investigation';
	if (appMatch('Building/Existing Building C of O/NA/NA')) {
		scheduleInspectDate(inspType, nextInspDate, assignedInsp);
	}

}
//end replaced branch: COEP_SCHED_BECO_INSP;
