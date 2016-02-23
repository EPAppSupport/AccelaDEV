
 
 
/*
Creates an ACA account from the Applicant contact information. This is triggered when the workflow task Issue gets a status
of Issued.

By: David Rivera
By: Janeth Chavez
Modified On: 4/16/2015
Modified On: 5/20/2015
*/

function createPublicUserFromApplicantInfo() 
{
	var servProvCode = "ELPASO";
	var contactType = "APPLICANT";
	var contact;
	var newEmail;	
        var newUserId;
	
	var capContactResult = aa.people.getCapContactByCapID(capId);
	if (capContactResult.getSuccess()) {
		var Contacts = capContactResult.getOutput();
		for (yy in Contacts) {
			logDebug(Contacts[yy].getCapContactModel().getPeople().getContactType())
			if (contactType.equals(Contacts[yy].getCapContactModel().getPeople().getContactType()))
				contact = Contacts[yy];
		}
	}

	if (!contact)
	{ logDebug("Couldn't create public user for " + contactType + ", no such contact"); return false; }

	// Check if exists already
	var getUserResult = aa.publicUser.getPublicUserByEmail(contact.getEmail())
	if (getUserResult.getSuccess()) {
		var userModel = getUserResult.getOutput()
		logDebug("found the user already");
		if (userModel) return userModel;  // send back the existing user
	}

	// Create a new one	
	// Check for email. If no email provided, then firstName.lastName@needemail.com is created as user name in ACA.
	
	var publicUser = aa.publicUser.getPublicUserModel();
	
	
	if(contact.getEmail() == null)
	{
		newEmail = contact.getFirstName() + "." + contact.getLastName() + "@needemail.com";
		newUserId = contact.getFirstName() + "." + contact.getLastName() // Jan
		publicUser.setUserID(newUserId); //Jan
		publicUser.setEmail(newEmail);

	}
	else
	{
		newEmail = contact.getEmail();
		publicUser.setUserID(newEmail);
		publicUser.setEmail(newEmail);
	}
	
	publicUser.setFirstName(contact.getFirstName());
	publicUser.setLastName(contact.getLastName());		
	publicUser.setPassword("06b035c4671d9e05616486d0f7b73a331afe1bba"); //password : Rider1
	publicUser.setNeedChangePassword("Y");
publicUser.setAuditID("PublicUser");
	publicUser.setAuditStatus("A");
	publicUser.setCellPhone(contact.getCapContactModel().getPeople().getPhone2());

	var result = aa.publicUser.createPublicUser(publicUser);

	if (result.getSuccess()) {
		aa.print("Created public user " + newUserId + "  sucessfully."); //Jan
				
		var userSeqNum = result.getOutput();
		var userModel = aa.publicUser.getPublicUser(userSeqNum).getOutput()

		// create for agency
		aa.publicUser.createPublicUserForAgency(userModel);

		// activate for agency
		var userPinBiz = aa.proxyInvoker.newInstance("com.accela.pa.pin.UserPINBusiness").getOutput()
		userPinBiz.updateActiveStatusAndLicenseIssueDate4PublicUser(servProvCode,userSeqNum,"ADMIN");


	}

	else {
		logDebug("**Warning creating public user " + newUserId + "  failure: " + result.getErrorMessage()); return null;  //Jan
	}


// get the reference contact ID.   We will use to connect to the new public user
    refContactNum = contact.getCapContactModel().getRefContactNumber();
	if (refContactNum)
	{
	logDebug("CreatePublicUserFromContact: Linking this public user with reference contact : " + refContactNum);
	aa.licenseScript.associateContactWithPublicUser(userModel.getUserSeqNum(), refContactNum);
	}
}
