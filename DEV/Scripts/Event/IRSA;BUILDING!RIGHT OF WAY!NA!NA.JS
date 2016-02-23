
editAppSpecific('Expiration Date',dateAdd(inspManualDate,180));
if (inspType == '915 Sidewalk/Driveway Final' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {
	updateTask('Inspection','Passed',' ',' ');
	deactivateTask('Inspection');
	closeTask('Close','Closed','Closed by Script after passing 915 Sidewalk/Driveway Final',' ');
	updateAppStatus('Closed','Status set by batch script');
	}

