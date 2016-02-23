	
if (wfTask=='Flood Determination' && (wfStatus == 'In Flood Zone' || wfStatus == 'LOMR/CLOMR' || wfStatus == 'No Flood Zone')) {
	activateTask('Task Assignment');
	}

if (isTaskComplete('Task Assignment') == true && isTaskComplete('Completeness Check') == false) {
	activateTask('Historical Review');
	activateTask('Zoning Review');
	}

if (isTaskComplete('Task Assignment') == true && isTaskComplete('Completeness Check') == true) {
	deactivateTask('Historical Review');
	deactivateTask('Zoning Review');
	}

