
if (inspType == '220 Irrigation Final Insp' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {
	updateTask('Inspection','Passed',' ',' ');
	deactivateTask('Inspection');
	closeTask('Close','Closed','Closed by Script after passing 220 Final Irrigation Inspection ',' ');
	updateAppStatus('Closed','Status set by batch script');
	}

