

//start replaced branch: ES_FIRE_WFTASKUPDATEAFTER
{
	if (appMatch('Fire/Supression System/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		inspManualDate = null;

		//replaced branch(ES_FIRE_UPDATE_EXP_DATE)
		ES_FIRE_UPDATE_EXP_DATE();
	}

	if (appMatch('Fire/Supression System/*/*') && wfTask == 'Fire Review' && wfStatus == 'Passed' && parseInt(AInfo['Number of Heads']) > 0) {
		updateFee('FF001', 'FIRESUP', 'STANDARD', parseInt(AInfo['Number of Heads']), 'N');
	}

	if (appMatch('Fire/Supression System/*/*') && wfTask == 'Fire Review' && wfStatus == 'Passed' && parseInt(AInfo['Fire Suppression System Quantity']) > 0) {
		updateFee('FF002', 'FIRESUP', 'STANDARD', parseInt(AInfo['Fire Suppression System Quantity']), 'Y');
	}

	if (appMatch('Fire/Supression System/*/*') && wfTask == 'Fire Review' && wfStatus == 'Passed' && parseInt(AInfo['Number of Hydrants']) > 0) {
		updateFee('FF003', 'FIRESUP', 'STANDARD', parseInt(AInfo['Number of Hydrants']), 'Y');
	}

}
//end replaced branch: ES_FIRE_WFTASKUPDATEAFTER;

//replaced branch(ES_WORKFLOWTASKUPDATEAFTER_ALL)
ES_WORKFLOWTASKUPDATEAFTER_ALL();
