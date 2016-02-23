function addDowntownResidentialParkingRenewalFee()
{
	logDebug("ENTER Function: addDowntownResidentialParkingRenewalFee");
	
	logDebug("Get Parent ID");
	parentId = getParentLicenseCapID(capId);

	bAddLicenseFeeSingle = false;
	bAddLicenseFeeAdditional = false;

	holdId = capId; 
	capId = parentId;

	if(feeExists("FL001", "INVOICED"))
	{
		logDebug("Found Fee for First Vehicle FL001 on License");
		bAddLicenseFeeSingle = true;
	}
	else
	if(feeExists("FL002", "INVOICED"))
	{
		logDebug("Found Fee for Additional Vehicle FL002 on License");
		bAddLicenseFeeAdditional = true;
	}

	capId = holdId;

	if(bAddLicenseFeeSingle) 
		updateFee("FL070", "RENEWALLICDTRESPARK","STANDARD", 1,"Y","N");

	if(bAddLicenseFeeAdditional) 
		updateFee("FL080", "RENEWALLICDTRESPARK","STANDARD", 1,"Y","N");
	
	logDebug("EXIT Function: addDowntownResidentialParkingRenewalFee");
}

