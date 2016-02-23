

//start replaced branch: ES_FIRE_WFTASKUPDATEBEFORE
{
	if (appMatch('Fire/Supression System/*/*') && wfTask == 'Fire Review' && wfStatus == 'Revised' && !isTaskStatus('Issue', 'Issued')) {
		showMessage = true;
		comment("Task cannot have a status of ' Revised ' until the permit has been issued.");
		cancel = true;
	}

}
//end replaced branch: ES_FIRE_WFTASKUPDATEBEFORE;
