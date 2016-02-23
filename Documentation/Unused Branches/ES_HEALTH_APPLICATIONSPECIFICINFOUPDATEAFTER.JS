
if (appMatch('Health/Food Inspections/Fixed Location/*')&& AInfo['Grease Trap']=='Yes' && (AInfo['EPWU Registration']==null)) {
	showMessage = true;
	comment('Cannot schedule inspection because the Grease Trap is required and no EPWU Registration # was inputted.');
	cancel = true;
	}

