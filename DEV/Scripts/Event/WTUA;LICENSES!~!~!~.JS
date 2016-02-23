
inspResult = null;

//replaced branch(ES_LICENSES_FEES)
ES_LICENSES_FEES();

//start replaced branch: ES_LICENSE_EDIT_EXPIRATION
{
	if ((appMatch('Licenses/Hotel Motel/*/*') || appMatch('Licenses/Amusement Occupation Tax/*/*')) && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '1 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if ((appMatch('Licenses/Tattoo Body Piercing Employee/*/*') || appMatch('Licenses/Lodging/*/*')) && wfTask == 'Issue' && (wfStatus == 'Issued' || wfStatus == 'Issue') && AInfo['Expiration Date'] == null) {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if ((appMatch('Licenses/Itinerant Vendor/*/*') || appMatch('Licenses/Fire/*/*')) && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Expiration Date'] == null) {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Laundry/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '1 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
	}

	if (appMatch('Licenses/Security Alarm/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '1 Year') {
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Secondhand Dealer/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
	}

	if (appMatch('Licenses/Money Exchange/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
	}

	if (appMatch('Licenses/Trailer Court/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && compareDate('03/31/' + sysDate.getYear()) == false) {
		editAppSpecific('Expiration Date', '03/31/' + sysDate.getYear());
	}

	if (appMatch('Licenses/Trailer Court/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && compareDate('03/31/' + sysDate.getYear()) == true) {
		editAppSpecific('Expiration Date', dateAddMonths('03/31/' + sysDate.getYear(), 12));
	}

	if (appMatch('Licenses/Car Dealer/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && (AInfo['Term of License'] == '1 Year' || AInfo['Term of License'] == null)) {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Flea Market/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Lodging/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Mobile Service Unit/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY.toString(), 12));
	}

	if (appMatch('Licenses/Residential Parking/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Sexually Oriented Business/*/*') && wfTask == 'Application Submittal' && wfStatus == 'Temp License Issued') {
		editAppSpecific('Expiration Date', dateAdd(wfDateMMDDYYYY.toString(), 20));
	}

	if (appMatch('Licenses/Sexually Oriented Business/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY.toString(), 12));
	}

	if (appMatch('Licenses/Sexually Oriented Business Emp/*/*') && wfTask == 'Application Submittal' && wfStatus == 'Temp License Issued') {
		editAppSpecific('Expiration Date', dateAdd(wfDateMMDDYYYY.toString(), 20));
	}

	if (appMatch('Licenses/Swimming Pool and Spa/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY.toString(), 12));
	}

	if (appMatch('Licenses/Sign/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '1 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Sexually Oriented Business Emp/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Expiration Date'] != null) {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'].toString(), 12));
	}

	if (appMatch('Licenses/Temp Event/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAdd(AInfo['End Date'], 1));
	}

	if (appMatch('Licenses/Vendor/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Shoe Shine/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY.toString(), 12));
	}

	if ((appMatch('Licenses/Hotel Motel/*/*') || appMatch('Licenses/Amusement Occupation Tax/*/*')) && wfTask == 'Issue' && wfStatus == 'Issue Renewal' && AInfo['Term of License'] == '1 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(AInfo['Expiration Date']);
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Laundry/*/*') && wfTask == 'Issue' && wfStatus == 'Issue Renewal' && AInfo['Term of License'] == '1 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
	}

	if (appMatch('Licenses/Car Dealer/*/*') && wfTask == 'Issue' && wfStatus == 'Issue Renewal' && (AInfo['Term of License'] == '1 Year' || AInfo['Term of License'] == null)) {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(AInfo['Expiration Date']);
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Home Occupation/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
	}

	if (appMatch('Licenses/Charitable Solicitation/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAdd(wfDateMMDDYYYY, 365));
	}

	if (appMatch('Licenses/Animal/*/*') && (!appMatch('Licenses/Animal/Breeders Permit/NA') || !appMatch('Licenses/Animal/Exhibit or Show/NA') || !appMatch('Licenses/Animal/Litter/NA')) && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('EXPIRATION DATE', dateAddMonths(null, 12));
	}

	if (appMatch('Licenses/Animal/Exhibit or Show/NA') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('EXPIRATION DATE', dateAdd(null, 30));
	}

	if (appMatch('Licenses/Animal/Breeders Permit/NA') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('EXPIRATION DATE', dateAddMonths(null, 36));
	}

	if (appMatch('Licenses/Security Alarm/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '3 Year') {
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 36));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/CreditAccessBusiness/*/*') && wfTask == 'Issued' && wfStatus == 'Issued' && AInfo['License Term'] == '1') {
		editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY.toString(), 12));
	}

	if (appMatch('Licenses/CreditAccessBusiness/*/*') && wfTask == 'Issued' && wfStatus == 'Issued' && AInfo['License Term'] == '2') {
		editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY.toString(), 24));
	}

	if (appMatch('Licenses/DowntownResidentialParking/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Alcohol/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '1 Year') {
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Alcohol/NA/NA') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '2 Year') {
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 24));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Car Dealer/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 24));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 24));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Car Dealer/*/*') && wfTask == 'Issue' && wfStatus == 'Issue Renewal' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 24));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(AInfo['Expiration Date']);
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Laundry/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 24));
	}

	if (appMatch('Licenses/Laundry/*/*') && wfTask == 'Issue' && wfStatus == 'Issue Renewal' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 24));
	}

	if (appMatch('Licenses/Hotel Motel/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 24));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 24));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Hotel Motel/*/*') && wfTask == 'Issue' && wfStatus == 'Issue Renewal' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 24));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(AInfo['Expiration Date']);
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/Sign/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 24));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 24));
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/City Registration/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '1 Year') {
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 12));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(null, 12));
	}

	if (appMatch('Licenses/City Registration/*/*') && wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['Term of License'] == '2 Year') {
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(dateAddMonths(null, 24));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(null, 24));
	}

	if (appMatch('Licenses/City Registration/*/*') && wfTask == 'Issue' && wfStatus == 'Renewal' && AInfo['Term of License'] == '1 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(AInfo['Expiration Date']);
		thisLic.setStatus('Active');
	}

	if (appMatch('Licenses/City Registration/*/*') && wfTask == 'Issue' && wfStatus == 'Renewal' && AInfo['Term of License'] == '2 Year') {
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 24));
		thisLic = new licenseObject(capId);
		thisLic.setExpiration(AInfo['Expiration Date']);
		thisLic.setStatus('Active');
	}

}
//end replaced branch: ES_LICENSE_EDIT_EXPIRATION;
if (wfTask == 'Issue' && wfStatus == 'Issued') {

	//start replaced branch: ES_PRINT_LIC
	{
		var reportName = 'No Report';
		if (appMatch('Licenses/Amplification/NA/NA')) {
			var reportName = 'Amplification';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Amusement Occupation Tax/NA/NA')) {
			var reportName = 'Amusement Occupation Tax';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Charitable Solicitation/NA/NA')) {
			var reportName = 'Charitable Solicitation';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Flea Market/NA/NA')) {
			var reportName = 'Flea Market';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Food/NA/NA')) {
			var reportName = 'Food';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Home Occupation/NA/NA')) {
			var reportName = 'Home Occupation';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Hotel Motel/NA/NA')) {
			var reportName = 'Hotel Motel';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Laundry/NA/NA')) {
			var reportName = 'Laundry';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Lodging/NA/NA')) {
			var reportName = 'Lodging';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Money Exchange/NA/NA')) {
			var reportName = 'Money Exchange';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Residential Parking/NA/NA')) {
			var reportName = 'Residential Parking';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Sexually Oriented Business/NA/NA')) {
			var reportName = 'Sexually Oriented Business';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Sexually Oriented Business Emp/NA/NA')) {
			var reportName = 'Sexually Oriented Business Employee';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Shoe Shine/NA/NA')) {
			var reportName = 'Shoe Shine';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Sign/NA/NA')) {
			var reportName = 'Sign';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Swimming Pool and Spa/NA/NA')) {
			var reportName = 'Swimming Pool and Spa';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA')) {
			var reportName = 'Tattoo Body Piercing Employee';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Tax Exempt Vendor/NA/NA')) {
			var reportName = 'Tax Exempt Vendor';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Temp Event/NA/NA')) {
			var reportName = 'Temp Event';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Temp Vendor/NA/NA')) {
			var reportName = 'Temp Vendor';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Trailer Court/NA/NA')) {
			var reportName = 'Trailer Court';
			comment('Report Name = ' + reportName);
		}

		if (appMatch('Licenses/Vendor/NA/NA')) {
			var reportName = 'Vendor';
			comment('Report Name = ' + reportName);
		}

		if (reportName != 'No Report') {
			var bReport = false;
			var user = 'admin';
			report = aa.reportManager.getReportModelByName(reportName);
			report = report.getOutput();
			var permit = aa.reportManager.hasPermission(reportName, user);
			if (permit.getOutput().booleanValue())
				bReport = true;
			var parameters = aa.util.newHashMap();
			if (bReport)
				var msg = aa.reportManager.runReport(parameters, report);
			showMessage = true;
			if (bReport)
				aa.env.setValue('ScriptReturnCode', '0');
			if (bReport)
				aa.env.setValue('ScriptReturnMessage', msg.getOutput());
			comment('Report Print Line executed - Report Name = ' + reportName);
		}

	}
	//end replaced branch: ES_PRINT_LIC;
}

//replaced branch(ES_WORKFLOWTASKUPDATEAFTER_ALL)
ES_WORKFLOWTASKUPDATEAFTER_ALL();
if (wfTask == 'Issue' && wfStatus == 'Issued') {
	onlineUser = createPublicUserFromApplicantInfo();
}

if (wfTask == 'Issue' && wfStatus == 'Issued') {
	if (onlineUser)
		attachResult = aa.cap.updateCreatedAccessBy4ACA(capId, 'PUBLICUSER' + onlineUser.getUserSeqNum(), 'Y', 'Y');
}
