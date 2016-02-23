
//start replaced branch: ES_ANIMAL_INVOICEFEEAFTER

for (x in FeeObjs)
	if (FeeObjs[x].getFeeCod() == 'EA0135')
		//start replaced branch: ES_SEND_PET_OWNER_EMAIL
	{
		emailSubject = 'Animal Registration for ' + capIDString;
		emailBody = "Please login to El Paso's Citizen Access portal http://epermit.elpasotexas.gov/CitizenAccess/ to pay your registration fee and complete the process. You will be able to print your registration document after payment has been completed. Your record ID is " + capIDString;
		emailContact(emailSubject, emailBody, 'PET OWNER');

	}
//end replaced branch: ES_SEND_PET_OWNER_EMAIL;
//end replaced branch: ES_ANIMAL_INVOICEFEEAFTER;
