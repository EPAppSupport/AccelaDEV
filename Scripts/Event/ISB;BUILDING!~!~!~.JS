

//start replaced branch: ES_BLDG_INSPSCHEDULEBEFORE
{

	//start replaced branch: ES_CHECK_FINAL_CERT
	{
		numRows = 0;
		approvedFldPlnCert = null;
		if (inspType == '800 Final Building Inspection' && AInfo['Flood Plain'] == 'Yes' && typeof(SITEINFORMATION) != 'object') {
			showMessage = true;
			comment('Inspection cannot be scheduled. Final Flood Plain Cert has not been submitted.');
			cancel = true;
		}

		if (inspType == '800 Final Building Inspection' && AInfo['Flood Plain'] == 'Yes' && typeof(SITEINFORMATION) == 'object') {
			for (eachrow in SITEINFORMATION)
				//start replaced branch: ES_CHECK_FINAL_CERT_LOOP
			{
				siteRow = SITEINFORMATION[eachrow];
				if (siteRow['Type'] == 'Final Flood Plain Cert') {
					numRows = (numRows + 1);
				}

				if (siteRow['Type'] == 'Final Flood Plain Cert' && siteRow['Status'] != 'Approved') {
					approvedFldPlnCert = 'NO';
				}

			}
			//end replaced branch: ES_CHECK_FINAL_CERT_LOOP;
		}

		if (inspType == '800 Final Building Inspection' && AInfo['Flood Plain'] == 'Yes' && (numRows == 0 || approvedFldPlnCert == 'NO')) {
			showMessage = true;
			comment('Inspection cannot be scheduled. Final Flood Plain Cert has not been submitted.');
			cancel = true;
		}

	}
	//end replaced branch: ES_CHECK_FINAL_CERT;
	if (AInfo['Expiration Date'] != null) {

		//start replaced branch: COEP_CHECK_EXPDATE
		{
			new Date(AInfo['GENERAL.Expiration Date']);
			var myDate = new Date();
			myDate = sysDate.getMonth() + '/' + sysDate.getDayOfMonth() + '/' + sysDate.getYear();
			comment('myDate: [' + myDate + ']   Expiration Date: [' + AInfo['Expiration Date'] + ']');
			if (AInfo['GENERAL.Expiration Date'] <= myDate) {
				showMessage = true;
				comment('Permit is Expired, Inspection cannot be Scheduled');
				cancel = true;
			}

		}
		//end replaced branch: COEP_CHECK_EXPDATE;
	}

	//start replaced branch: ES_BLDG_CHCK_INCONST
	{
		numRows = 0;
		inConstruction = null;

	}
	//end replaced branch: ES_BLDG_CHCK_INCONST;
	if (capHasExpiredLicProf('EXPIRE') != false) {
		showMessage = true;
		comment('<font size=small><b>License is Expired:</b></font><br><br>Inspection cannot be created because the licensed professional has an expired license<br><br>');
		cancel = true;
	}

}
//end replaced branch: ES_BLDG_INSPSCHEDULEBEFORE;
if (matches(inspType, '320 Electrical Final Insp', '800 Final Building Inspection', '220 Irrigation Final Insp', '630 Mechanical Final Insp', '740 Plumbing Final Inspection') && balanceDue > 0) {
	showMessage = true;
	comment('Cannot schedule inspection. There is a balance for on the record.');
	cancel = true;
}

if (matches(inspType, '320 Electrical Final Insp', '800 Final Building Inspection', '220 Irrigation Final Insp', '630 Mechanical Final Insp', '740 Plumbing Final Inspection') && AInfo['Conditional Release'] == 'Yes') {
	showMessage = true;
	comment('Record has Condition Release = Yes, please contact Barbra Shipp or One Stop Shop for more information.');
	cancel = true;
}

if ((!appMatch('Building/Existing Building C of O/NA/NA') && !appMatch('Building/Commercial/Tenant Improvement/NA')) && !matches(capStatus, 'Issued', 'Issued TCO', 'Inspection')) {
	showMessage = true;
	comment('Cannot allow Inspections until record Status is Issued, Issued TCO or Inspection');
	cancel = true;
}
