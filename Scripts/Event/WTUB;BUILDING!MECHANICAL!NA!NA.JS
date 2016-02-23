
if (wfTask == 'Issue' && wfStatus == 'Issued' && typeof(MECHANICALEQUIPMENT) != 'object') {
	showMessage = true;
	comment('Record cannot be issued, need to fill ASI Tables');
	cancel = true;
	}

