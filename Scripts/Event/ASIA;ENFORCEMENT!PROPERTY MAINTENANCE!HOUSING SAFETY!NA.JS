

//start replaced branch: COEP_SCHED_FUTURE_INSP
{
	assignedInsp = getLastInspector('215 Property Maint Inspection');
	comment('Assigned Inspector is: ' + assignedInsp);
	inspType = '215 Property Maint Inspection';
	if (AInfo['Follow-up Inspection (days)'] == '01') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 2), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '02') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 3), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '03') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 4), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '04') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 5), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '05') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 6), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '06') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 7), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '07') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 8), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '08') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 9), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '09') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 10), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '10') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 11), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '11') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 12), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '12') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 13), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '13') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 14), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '14') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 15), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '15') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 16), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '16') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 17), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '17') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 18), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '18') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 19), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '19') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 20), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '20') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 21), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '21') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 22), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '22') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 23), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '23') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 24), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '24') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 25), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '25') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 26), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '26') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 27), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '27') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 28), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '28') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 29), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '29') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 30), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '30') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 31), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '45') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 46), assignedInsp);
	}

	if (AInfo['Follow-up Inspection (days)'] == '60') {
		scheduleInspectDate(inspType, nextInspDate = dateAdd(null, 61), assignedInsp);
	}

}
//end replaced branch: COEP_SCHED_FUTURE_INSP;

//start replaced branch: ENF_PROPERTYMAIN_HOUSINGSAFETY_Add_Violation
{
	var violation = AInfo['Type of Violation'];
	editAppName(violation);

}
//end replaced branch: ENF_PROPERTYMAIN_HOUSINGSAFETY_Add_Violation;
