
if (inspType == '740 Plumbing Final Inspection' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {
	updateTask('Inspection','Closed',' ',' ');
	deactivateTask('Inspection');
	closeTask('Close','Closed','Closed by Script after passing 740 Plumbing Final Inspection ',' ');
	updateAppStatus('Closed','Status set by batch script');
	}

