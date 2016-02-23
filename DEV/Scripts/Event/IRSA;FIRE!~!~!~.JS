

//start replaced branch: ES_FIRE_INSPRESULTSUBMITAFTER
{
	if (appMatch('Fire/Supression System/*/*')) {
		wfTask = null;
		wfStatus = null;

		//replaced branch(ES_FIRE_UPDATE_EXP_DATE)
		ES_FIRE_UPDATE_EXP_DATE();
	}

	if (matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant') && inspResult == 'Fail w/Refee') {
		addFee('FF004', 'FIRESUP', 'STANDARD', 1, 'Y');
	}

}
//end replaced branch: ES_FIRE_INSPRESULTSUBMITAFTER;
