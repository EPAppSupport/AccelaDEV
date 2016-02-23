
zoningDist = AInfo['Zoning Dist'];
if (!matches(zoningDist, 'G-MU General Mixed Use','R-MU Residential Mixed Use','I-MU Industrial Mixed Use')) {
	
//replaced branch(ES_PLANNING_SPECIALP_ACA_ADD_FEES)
ES_PLANNING_SPECIALP_ACA_ADD_FEES();
	}

if (AInfo['Special Permit Type'] == 'PWSF (Personal Wireless Service Facility)') {
	sender = 'accela@elpasotexas.gov';
	theRecipient = 'chavezj1@elpasotexas.gov;salloumam@elpasotexas.gov;mcelroyms@elpasotexas.gov;rubioax@elpasotexas.gov';
	subject = ('Planning Zoning Record Number: ' + capIDString);
	content = ('The Planning Zoning Record Number ' + capIDString + ' has been submitted'+ '<BR><BR>' +'This is an Expedited review for a Personal Wireless Service Facility Special Permit.  The expedited review is Required so that the City of El Paso will be in compliance with new FCC Regulations governing the expedited processing time on these types of facilities. Please review within 5 days of review of the distribution.');
	email(theRecipient, sender, subject, content);
	}

