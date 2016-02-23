
showMessage=true;
if (appMatch('Enforcement/Solid Waste/Residential/Recycling') && wfTask == 'Investigation' && wfStatus == 'Removed' && wfGetHistCount(capId,'Investigation','Tag 2') < 1) {
	showMessage = true;
	comment('Cannot Remove can before Tagging it 2 times.');
	cancel = true;
	}

