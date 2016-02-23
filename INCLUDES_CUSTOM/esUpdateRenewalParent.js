function esUpdateRenewalParent() {

	saveId = capId;
	parentLicenseCAPID = getParentCapIDForReview(capId);
	comment('ParentLic CAPID = ' + parentLicenseCAPID);
	if (!publicUser && AInfo['Term of License'] == '2 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 12));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 24));
	}

	if (!publicUser && AInfo['Term of License'] == '3 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 24));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 36));
	}

	capId = saveId;
	capId = parentLicenseCAPID;
	logDebug(capId);
	updateAppStatus('Active', 'Renewal Approved By: ' + capIDString, parentLicenseCAPID);
	if (!publicUser && (appMatch('Licenses/Renewal/Vendor/NA') || appMatch('Licenses/Renewal/Flea Market/NA') || appMatch('Licenses/Renewal/Lodging/NA') || appMatch('Licenses/Renewal/DowntownResidentialParking/NA') || appMatch('Licenses/Renewal/Residential Parking/NA'))) {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 6));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
	}

	if (publicUser && (appMatch('Licenses/Renewal/Vendor/NA') || appMatch('Licenses/Renewal/Flea Market/NA') || appMatch('Licenses/Renewal/Lodging/NA') || appMatch('Licenses/Renewal/DowntownResidentialParking/NA') || appMatch('Licenses/Renewal/Residential Parking/NA'))) {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 12));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
	}

	if (publicUser && AInfo['Term of License'] == '1 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 12));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
	}

	if (publicUser && AInfo['Term of License'] == '2 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 24));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 24));
	}

	if (publicUser && AInfo['Term of License'] == '3 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 36));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 36));
	}

	if (!publicUser && AInfo['Term of License'] == '1 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 6));
		thisLic.setStatus('Active');
		editAppSpecific('Expiration Date', dateAddMonths(AInfo['Expiration Date'], 12));
	}

}
