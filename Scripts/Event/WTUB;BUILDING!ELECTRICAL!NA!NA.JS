
if (wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['GENERAL.Type of Work'] == 'Elec Permit B' && typeof(ELECTRICALEQUIPMENT) != 'object') {
	showMessage=true;
	comment('Cannot Issue Record, need to fill ASI Tables');
	cancel=true;
	}

