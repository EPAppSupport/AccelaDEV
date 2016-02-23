
if (wfTask == 'Fire Review' && (wfStatus == 'Hold for Correction' || wfStatus == 'Failed' || wfStatus == 'Passed')) {

	//start replaced branch: COEP_EMAIL_LIC_PRO
	{
		var profArr = aa.licenseScript.getLicenseProf(capId);
		if (profArr.getSuccess()) {
			profArrList = profArr.getOutput();
		}

		if (appMatch('Fire/Supression System/NA/NA') && wfTask == 'Fire Review' && (wfStatus == 'Hold for Correction' || wfStatus == 'Failed') && profArrList != null) {
			for (i in profArrList)
				if (profArrList[i].getEmail() + '' != '')
					email(profArrList[i].getEmail(), 'accela@elpasotexas.gov', ' Permit # ' + capIDString, ' Permit # ' + capIDString + ' Failed Fire Review and is in Hold for Correction. Please Contact Fire Planner Review @ 915-212-1531.');
		}

		if (appMatch('Fire/Supression System/NA/NA') && wfTask == 'Fire Review' && wfStatus == 'Passed' && profArrList != null) {
			for (i in profArrList)
				if (profArrList[i].getEmail() + '' != '')
					email(profArrList[i].getEmail(), 'accela@elpasotexas.gov', ' Permit # ' + capIDString, ' Permit # ' + capIDString + ' Passed Fire Review and its ready to issue. Please Contact Fire Planner Review @ 915-212-1531.');
		}

	}
	//end replaced branch: COEP_EMAIL_LIC_PRO;
}
