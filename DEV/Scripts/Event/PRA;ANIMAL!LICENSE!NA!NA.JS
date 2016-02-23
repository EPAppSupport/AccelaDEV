

//start replaced branch: ES_Animal_Master_On_Payment
 {
if (AInfo['USDA Licensed Vaccine'] == '1 Year') {
	thisLic = new licenseObject(capId);
	thisLic.setExpiration(dateAddMonths(null,12));
	thisLic.setStatus('Active');
	showMessage=true;
	}

if (AInfo['USDA Licensed Vaccine'] == '3 Year') {
	thisLic = new licenseObject(capId);
	thisLic.setExpiration(dateAddMonths(null,36));
	thisLic.setStatus('Active');
	showMessage=true;
	}

updateTask('Issue','Issue License','Updated via EMSE Script','Updated via EMSE Script');

}
//end replaced branch: ES_Animal_Master_On_Payment;

