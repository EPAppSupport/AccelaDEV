
if (inspType == '320 Electrical Final Insp' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {
	updateTask('Inspection','Closed',' ',' ');
	deactivateTask('Inspection');
	closeTask('Close','Closed','Closed by Script after passing 320 Electrical Final Inspection ',' ');
	updateAppStatus('Closed','Status set by batch script');
	}

