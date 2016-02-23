
if (isTaskComplete('Close')) {
	showMessage = true;
	comment('Cannot schedule inspection because the application is closed.');
	cancel = true;
	}

