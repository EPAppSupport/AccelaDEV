function ES_Animal_Update_Renewal_Parent() {

	saveId = capId;
	parentLicenseCAPID = getParentCapIDForReview(capId);
	comment('ParentLic CAPID = ' + parentLicenseCAPID);
	capId = parentLicenseCAPID;
	logDebug(capId);
	updateAppStatus('Active', 'Renewal Approved By: ' + capIDString, parentLicenseCAPID);
	aa.expiration.activeLicensesByCapID(capId);
	// added this line to force the Parent Expiration to flip to Active and move date forward - this should happen in the PRA4renew but not working;
	if (AInfo['USDA Licensed Vaccine'] == '1 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 12));
		thisLic.setStatus('Active');
	}

	if (AInfo['USDA Licensed Vaccine'] == '3 Year') {
		thisLic = new licenseObject();
		thisLic.setExpiration(dateAddMonths(thisLic.b1ExpDate, 24));
		thisLic.setStatus('Active');
	}

	capId = saveId;

}
