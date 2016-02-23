
conType = conArray[y].getPeople().contactType;
emailAddr = conArray[y].getPeople().email;
lastName= conArray[y].getPeople().lastName;
firstName= conArray[y].getPeople().firstName;
middleName= conArray[y].getPeople().middleName;
if (emailAddr != undefined && conType =='Applicant') {
	email(emailAddr, 'accela@accela.com', 'ACA APPLICANT, 'TEST BODY ACA');
	}

showMessage=true;
comment(emailAddr + ', ' + lastName + ', ' + firstName + ' ' );

