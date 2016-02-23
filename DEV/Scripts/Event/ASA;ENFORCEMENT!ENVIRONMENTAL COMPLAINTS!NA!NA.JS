

//replaced branch(ES_PROJECT_NAME)
ES_PROJECT_NAME();

//start replaced branch: ES_AMO_SCHEDULE_FOLLOWUP
{
	var daysAhead;
	var todayDate = dateFormatted(fileDateObj.getMonth(), fileDateObj.getDayOfMonth(), fileDateObj.getYear(), 'YYYY-MM-DD');
	comment('Todays date:' + todayDate);
	if (AInfo['Program Nuisance'] == 'BR') {
		daysAhead = 8;
	}

	if (AInfo['Program Nuisance'] == 'BAS') {
		daysAhead = 11;
	}

	if (AInfo['Program Nuisance'] == 'BR-DF') {
		daysAhead = 8;
	}

	if (AInfo['Program Nuisance'] == 'BR-SC') {
		daysAhead = 1;
	}

	if (AInfo['Program Nuisance'] == 'HCR') {
		daysAhead = 1;
	}

	if (AInfo['Program Nuisance'] == 'HS-MT') {
		daysAhead = 11;
	}

	if (AInfo['Program Nuisance'] == 'HSL') {
		daysAhead = 1;
	}

	if (AInfo['Program Nuisance'] == 'HSMK') {
		daysAhead = 1;
	}

	if (AInfo['Program Nuisance'] == 'HSN') {
		daysAhead = 1;
	}

	if (AInfo['Program Nuisance'] == 'HSO') {
		daysAhead = 1;
	}

	if (AInfo['Program Nuisance'] == 'HSPD') {
		daysAhead = 8;
	}

	if (AInfo['Program Nuisance'] == 'JV') {
		daysAhead = 11;
	}

	if (AInfo['Program Nuisance'] == 'MSU') {
		daysAhead = 4;
	}

	if (AInfo['Program Nuisance'] == 'ZN-GS') {
		daysAhead = 7;
	}

	if (AInfo['Program Nuisance'] == 'ZN-SO') {
		daysAhead = 4;
	}

	if (AInfo['Source'] == 'Patrol' && AInfo['Submitted via'] == 'In-Person' && (AInfo['Program Nuisance'] == 'PRKG' || AInfo['Program Nuisance'] == 'PRKP' || AInfo['Program Nuisance'] == 'PS')) {
		scheduleInspection('1120 Site Inspection', 0, currentUserID);
		resultInspection('1120 Site Inspection', 'Court', todayDate, AInfo['Inspection Comments']);
		closeTask('Receive Complaint', 'Assigned', 'via ES_AMO_SCHEDULE_FOLLOWUP', 'via script');
		closeTask('Investigation', 'Court', 'via ES_AMO_SCHEDULE_FOLLOWUP', 'via script');
	}

}
//end replaced branch: ES_AMO_SCHEDULE_FOLLOWUP;

//replaced branch(ES_AMO_ASSIGN_SUPERVISOR)
ES_AMO_ASSIGN_SUPERVISOR();