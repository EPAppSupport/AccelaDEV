
if (inspType == '630 Mechanical Final Insp' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {
	updateTask('Inspection','Closed',' ',' ');
	deactivateTask('Inspection');
	closeTask('Close','Closed','Closed by Script after passing 630 Mechanical Final Inspection ',' ');
	updateAppStatus('Closed','Status set by batch script');
	}

