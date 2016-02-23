
if (wfTask == 'Application Submittal' && wfStatus == 'Submitted') {

	//start replaced branch: COEP_PAVEMENT_CUT_ORDER
	{
		subjectMail = ('Pavement Cut Order ' + capId);
		bodyMail = ('Pavement Cut Order ' + capIDString);
		if (appMatch('Engineering/Pavement Cut/*/*') && wfTask == 'Application Submittal' && wfStatus == 'Submitted') {
			email('lopezrx@elpasotexas.gov', 'accela@elpasotexas.gov', subjectMail, bodyMail);
		}

	}
	//end replaced branch: COEP_PAVEMENT_CUT_ORDER;
}

if (wfTask == 'Issue' && wfStatus == 'Issued') {
	editAppSpecific('Expiration Date', dateAdd(null, 30));
}
