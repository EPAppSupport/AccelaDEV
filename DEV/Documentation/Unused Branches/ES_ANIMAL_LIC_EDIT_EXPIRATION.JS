
if (appMatch('Animal/License/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issue License' && AInfo['USDA Licensed Vaccine'] == '1 Year') {
	thisLic = new licenseObject(capId);
	thisLic.setExpiration(dateAddMonths(null,12));
	thisLic.setStatus('Active');
	showMessage=true;
	}

if (appMatch('Animal/License/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issue License' && AInfo['USDA Licensed Vaccine'] == '3 Year') {
	thisLic = new licenseObject(capId);
	thisLic.setExpiration(dateAddMonths(null,36));
	thisLic.setStatus('Active');
	}

