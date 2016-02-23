
if (wfTask == 'Fire Inspection' && wfStatus == 'Passed' && (AInfo['Valid Certificate of Occupancy on Site'] == null || AInfo['Change of Use'] == null)) {
	showMessage = true;
	comment("Task cannot be completed. Please set 'Valid Certificate of Occupancy on Site' and 'Change of Use' as needed before continuing and set 'Notify Building Department' to 'Yes' if needed");
	cancel = true;
	}

