

//replaced branch(ES_LICENSES_FEES)
ES_LICENSES_FEES();
if (inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {

	//start replaced branch: COEP_UPDATE_LICENSE_ANIMAL_WFTASK
	{
		updateTask('Inspection', 'Passed', ' ', ' ');
		deactivateTask('Inspection');
		closeTask('Close', 'Closed', 'Closed by Script after passing 755 CHP Inspection', ' ');
		updateAppStatus('Closed', 'Status set by batch script');

	}
	//end replaced branch: COEP_UPDATE_LICENSE_ANIMAL_WFTASK;
}
