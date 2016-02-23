
siteRow = SITEINFORMATION[eachrow];
if (siteRow['Type'] == 'In Construction') {
	numRows = (numRows + 1);
	}

if (siteRow['Type'] == 'In Construction' && siteRow['Status'] != 'Approved') {
	inConstruction = 'NO';
	}

