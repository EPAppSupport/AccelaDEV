
if (AInfo['GENERAL.Work Done By'] == 'Owner' && inspResult == 'Fail') {
	updateTask('Close','Closed','Inspection Failed',' ');
	updateAppStatus('Closed', 'Inspection Failed');
	addAppCondition('Parcel','Applied(Applied)','Denied w/o Appeal','Condition added because inspection Failed','Lock');
	}

if (inspType == '755 CHP Inspection' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {
	updateTask('Inspection','Passed',' ',' ');
	deactivateTask('Inspection');
	closeTask('Close','Closed','Closed by Script after passing 755 CHP Inspection',' ');
	updateAppStatus('Closed','Status set by batch script');
	}

