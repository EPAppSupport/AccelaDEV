
numRows = 0;
prelimFldPlnCert = 'NO';
finalFloodPlnCert ='NO';
InConstructionApproved = 'NO';
if ((inspType == '810 Foundation Inspection' || inspType == '830 Structural Inspection') && AInfo['Flood Plain'] == 'Yes' && typeof(SITEINFORMATION) != 'object') {
	showMessage = true;
	comment('Cannot be Issued. Preliminary Flood Plain Cert has not been approved.');
	cancel = true;
	}

if ((inspType == '810 Foundation Inspection' || inspType == '830 Structural Inspection') && AInfo['Flood Plain'] == 'Yes' && typeof(SITEINFORMATION) == 'object') {
	for (eachrow in SITEINFORMATION) 
//start replaced branch: COEP_BLDG_CHECK_FLDPLNCERT_LOOP
 {
siteRow = SITEINFORMATION[eachrow];
if (siteRow['Type'] == 'Preliminary Flood Plain Cert') {
	numRows = (numRows + 1);
	}

if (siteRow['Type'] == 'In Construction' && siteRow['Status'] == 'Approved') {
	InConstructionApproved = 'YES';
	}

if (siteRow['Type'] == 'Final Flood Plain Cert' && siteRow['Status'] == 'Approved') {
	finalFloodPlnCert  = 'YES';
	}

}
//end replaced branch: COEP_BLDG_CHECK_FLDPLNCERT_LOOP;
	}

if (inspType == '810 Foundation Inspection' && AInfo['Flood Plain'] == 'Yes' && (numRows == 0 || InConstructionApproved == 'NO')) {
	showMessage = true;
	comment('Cannot be Scheduled. In Construction Certificate has not been approved.');
	cancel = true;
	}

if (inspType == '830 Structural Inspection' && AInfo['Flood Plain'] == 'Yes' && (numRows == 0 || finalFloodPlnCert  == 'NO')) {
	showMessage = true;
	comment('Cannot be Issued. Final Flood Plane Certificate has not been approved.');
	cancel = true;
	}

