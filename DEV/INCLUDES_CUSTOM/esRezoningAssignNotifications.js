function esRezoningAssignNotifications() {

	var TSI = new Array();
	var emailTo = 'chavezj1@elpasotexas.gov;rubioax@elpasotexas.gov;mcelroyms@elpasotexas.gov';
	var sender = 'accela@elpasotexas.gov';
	if (AInfo['Parks Review'] == 'Yes') {
		email('delarosaja@elpasotexas.gov', 'accela@elpasotexas.gov', ' Parks Review is Active', emailBody + 'Please review task Parks Review of Record Number ' + capIDString);
	}

	if (AInfo['Fire Review'] == 'Yes') {
		email('floreslu@elpasotexas.gov;arriolaox@elpasotexas.gov;bartleyre@elpasotexas.gov', 'accela@elpasotexas.gov', 'Fire Review is Active', emailBody + 'Please review task Fire Review of Record Number ' + capIDString);
	}

	if (AInfo['Street Review'] == 'Yes') {
		email('doat@elpasotexas.gov;bustillosax@elpasotexas.gov;kutzhd@elpasotexas.gov;bennekd@elpasotexas.gov', 'accela@elpasotexas.gov', 'Street Review is Active', emailBody + 'Please review task Street Review of Record Number ' + capIDString);
	}

	if (AInfo['Sun Metro Review'] == 'Yes') {
		email('esparzaex@elpasotexas.gov;segoviaib@elpasotexas.gov;bryantam@elpasotexas.gov', 'accela@elpasotexas.gov', 'Sun Metro Review is Active', emailBody + 'Please review task Sun Metro Review of Record Number ' + capIDString);
	}

	if (AInfo['HLC Review'] == 'Yes') {
		email('velasquezpx@elpasotexas.gov', 'accela@elpasotexas.gov', 'HLC Review is Active', emailBody + 'Please review task HLC Review of Record Number ' + capIDString);
	}

	if (AInfo['EPWU Review'] == 'Yes') {
		email('velasquezpx@elpasotexas.gov', 'accela@elpasotexas.gov', 'El Paso Water Utilities Review is Active', emailBody + 'Please review task El Paso Water Utilities Review of Record Number ' + capIDString);
	}

	if (AInfo['PD Review'] == 'Yes') {
		email('14412@elpaostexas.gov;AC779@elpasotexas.gov', 'accela@elpasotexas.gov', 'PD Review is Active', emailBody + 'Please review task PD Review of Record Number ' + capIDString);
	}

	if (AInfo['TXDot Review'] == 'Yes') {
		email('Margarita.Montes@txdot.gov;walter.devine@txdot.gov;james.stevenson@txdot.gov;mararita.montes@txdot.gov', 'accela@elpasotexas.gov', 'TXDot Review is Active', emailBody + 'Please review TXDot task  Review of Record Number ' + capIDString);
	}

	if (AInfo['YISD Review'] == 'Yes') {
		email('rcarrera@yisd.net', 'accela@elpasotexas.gov', 'YISD Review is Active', emailBody + 'Please review task YISD Review of Record Number ' + capIDString);
	}

	if (AInfo['SISD Review'] == 'Yes') {
		email('rpdil05@sisd.net', 'accela@elpasotexas.gov', 'SISD Review is Active', emailBody + 'Please review task SISD Review of Record Number ' + capIDString);
	}

	var emailBody = '  ' + '<BR>';
	if (AInfo['Canutillo Review'] == 'Yes') {
		email('rleon@canutillo-isd.org', 'accela@elpasotexas.gov', 'Canutillo Review is Active', emailBody + 'Please review task Canutillo Review of Record Number ' + capIDString);
	}

	if (AInfo['Communication Review'] == 'Yes') {
		email('MendezF@elpasotexas.gov', 'accela@elpasotexas.gov', 'Communication Review is Active', emailBody + 'Please review task Communication Review of Record Number ' + capIDString);
	}

	if (AInfo['RF Engineering Review'] == 'Yes') {
		email('john.hargrove@newsignals.net', 'accela@elpasotexas.gov', 'RF Engineering Review Review is Active', emailBody + 'Please review task RF Engineering Review Review of Record Number ' + capIDString);
	}

	if (AInfo['Historical Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'Historical Review is Active', emailBody + 'Please review task Historical Review of Record Number ' + capIDString);
	}

	if (AInfo['Zoning Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'Zoning Review is Active', emailBody + 'Please review task Zoning Review of Record Number ' + capIDString);
	}

	if (AInfo['PST Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'PST Review is Active', emailBody + 'Please review task PST Review of Record Number ' + capIDString);
	}

	if (AInfo['Electrical Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'Electrical Review is Active', emailBody + 'Please review task Electrical Review of Record Number ' + capIDString);
	}

	if (AInfo['Landscape Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'Landscape Review is Active', emailBody + 'Please review task Landscape Review of Record Number ' + capIDString);
	}

	if (AInfo['Fast Track'] == 'Yes') {
		var emailBody = 'This item needs to be fast tracked in order to meet FCC regulations on Personal Wireless Service Facilities.' + '<BR>';
	}

	if (AInfo['Irrigation Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'Irrigation Review is Active', emailBody + 'Please review task Irrigation Review of Record Number ' + capIDString);
	}

	if (AInfo['Special Permit Type'] == 'PWSF (Personal Wireless Service Facility)') {
		var emailBody = 'This is an Expedited review for a Personal Wireless Service Facility Special Permit.  The expedited review is Required so that the City of El Paso will be in compliance with new FCC Regulations governing the expedited processing time on these types of facilities. Please review within 5 days of review of the distribution.' + '<BR>';
	}

	loadTaskSpecific(TSI, capId);
	if (AInfo['Planned Land Dev Plat Review'] == 'Yes') {
		email('dallokf@elpasotexas.gov;unzuetajx@elpasotexas.gov', 'accela@elpasotexas.gov', 'Planned Land Dev Plat Review is Active', emailBody + 'Please review task Planned Land Dev Plat Review of Record Number ' + capIDString);
	}

	if (AInfo['BPI Review'] == 'Yes') {
		email('delacruzja@elpasotexas.gov;chavirad1@elpasotexas.gov;LamasMX@elpasotexas.gov', 'accela@elpasotexas.gov', 'BPI Review is Active', emailBody + 'Please review task BPI Review of Record Number ' + capIDString);
	}

	if (AInfo['MPO Review'] == 'Yes') {
		email('rwilliams@elpasompo.org;cstokes@elpasompo.org;grandados@elpasompo.org', 'accela@elpasotexas.gov', 'MPO Review is Active', emailBody + 'Please review MPO Review of Record Number ' + capIDString);
	}

	if (AInfo['El Paso ISD'] == 'Yes') {
		email('rwilliams@elpasompo.org;cstokes@elpasompo.org;grandados@elpasompo.org', 'accela@elpasotexas.gov', 'El Paso ISD Review is Active', emailBody + 'Please review task El Paso ISD Review of Record Number ' + capIDString);
	}

}
