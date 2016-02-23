
if (wfTask == 'Issue' && wfStatus == 'Issued' && (AInfo['Type'] == 'Borrow' || AInfo['Type'] == 'Waste')) {
	editAppSpecific('Expiration Date', dateAddMonths(null, 6));
	}

if (wfTask == 'Issue' && wfStatus == 'Issued' && (AInfo['Type'] == 'Clear & Access' || AInfo['Type'] == 'Final' || AInfo['Type'] == 'Pre-Final')) {
	editAppSpecific('Expiration Date', dateAddMonths(null, 12));
	}

