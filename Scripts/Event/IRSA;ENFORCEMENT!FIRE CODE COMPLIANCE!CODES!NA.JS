
if (inspType == '460 Inspection' && (inspResult == 'Pass' || inspResult == 'No Violation')) {
	updateTask('Investigate','Closed',' ',' ');
	deactivateTask('Investigate');
	closeTask('Close','Closed','Closed by Script after passing 460 Inspection',' ');
	updateAppStatus('Closed','Status set by Script');
	}

if (inspType == '460 Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/Refee')) {
	updateTask('Investigate','Non-Complaint',' ',' ');
	updateAppStatus('Non-Complaint','Status set by Script');
	}

if ((inspResult == 'Fail w/Refee')) {
	addFee('FC001','FIRECOMP','STANDARD',1,'N');
	}

