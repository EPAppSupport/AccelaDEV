
capIdString = capId.getCustomID();
capContactResult = aa.people.getCapContactByCapID(capId);
conArray= capContactResult.getOutput();
for(y in conArray) 
//start replaced branch: ACA_ASA_EMAIL_APPLICANT
 {
if ((conArray[y].getPeople().contactType == 'APPLICANT')) {
	appFirstName = conArray[y].getPeople().firstName;
	appEmail = conArray[y].getPeople().email;
	senderEmail = 'accela@elpasotexas.gov';
	email(appEmail, senderEmail, 'New ' + appTypeArray[2] + ' submitted', 'Dear ' + appFirstName + '<BR> <BR> Your new <b>' + appTypeArray[1] + ' ' + appTypeArray[2] + '</b> with record ID <b>' + capIDString  + '</b> has been submitted. <BR><BR> To access your application please go to the link below:<BR>http://epermit.elpasotexas.gov/CitizenAccess/ ');
	}

}
//end replaced branch: ACA_ASA_EMAIL_APPLICANT;
email('DeLaCruzJA@elpasotexas.gov;ChaviraD1@elpasotexas.gov;LamasMX@elpasotexas.gov', 'accela@elpasotexas.gov', appTypeArray[1] + ' ' + appTypeArray[2] + ' Submitted - ' + capIDString, 'Attention, <BR> <BR> Record ID <b>' + capIDString + '</b> has been submitted through ACA. <BR><BR> Group: <b>' + appTypeArray[0] + '</b><BR> Type: <b>' + appTypeArray[1] + '</b><BR> Subtype: <b>' + appTypeArray[2] + '</b><BR> Category: <b>'  + appTypeArray[3] + '</b>');

