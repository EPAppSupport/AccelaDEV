function esPlanAssignNotifications() {

	comment('im at ES_PLAN_ASSIGN_NOTIFICATIONS');
	if (AInfo['Fire Review'] == 'Yes') {
		email('BartleyRE@elpasotexas.gov;FloresLU@elpasotexas.gov', 'accela@elpasotexas.gov', 'Fire Review is Active', 'Please review task Fire  Review of Record Number ' + capIDString);
	}

	if (AInfo['Subdiv Improv Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'Subdiv Improv Review is Active', 'Please review task Subdiv Improv Review of Record Number ' + capIDString);
	}

	if (AInfo['El Paso Electric Co Review'] == 'Yes') {
		email('gloria.franco@epelectric.com;william.eggleston@epelectric.com;joann.blair@epelectric.com', 'accela@elpasotexas.gov', 'El Paso Electric Co Review is Active', 'Please review task El Paso Electric Co Review of Record Number ' + capIDString);
	}

	if (AInfo['County Water Improv Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'County Water Improv Review is Active', 'Please review task County Water Improv Review of Record Number ' + capIDString);
	}

	if (AInfo['YISD Review'] == 'Yes') {
		email('jbooher@yisd.net;rcarrera3@yisd.net', 'accela@elpasotexas.gov', 'YISD Review is Active', 'Please review task YISD Review of Record Number ' + capIDString);
	}

	if (AInfo['AT and T Review'] == 'Yes') {
		email('dm8486@att.com', 'accela@elpasotexas.gov', 'AT and T Review is Active', 'Please review task AT and T Review of Record Number ' + capIDString);
	}

	if (AInfo['MPO Review'] == 'Yes') {
		email('MedinaMX@elpasotexas.gov;Iramos@elpasompo.org', 'accela@elpasotexas.gov', 'MPO Review is Active', 'Please review task MPO Review of Record Number ' + capIDString);
	}

	if (AInfo['BPI Review'] == 'Yes') {
		email('Morrison-VegaVX@elpasotexas.gov;EstalaJO@elpasotexas.gov', 'accela@elpasotexas.gov', 'BPI Review is Active', 'Please review task BPI Review of Record Number ' + capIDString);
	}

	if (AInfo['DPH Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'DPH Review is Active', 'Please review task DPH Review of Record Number ' + capIDString);
	}

	if (AInfo['Transportation Planning Review'] == 'Yes') {
		email('LopezAR@elpasotexas.gov;SmithKW@elpasotexas.gov', 'accela@elpasotexas.gov', 'Transportation Planning Review is Active', 'Please review task Transportation Planning Review of Record Number ' + capIDString);
	}

	var TSI = new Array();
	var emailTo = 'accela@elpasotexas.gov';
	if (AInfo['Sun Metro Review'] == 'Yes') {
		email('EsparzaEX@elpasotexas.gov;GarciaCK@elpasotexas.gov;BryantAM@elpasotexas.gov', 'accela@elpasotexas.gov', 'Sun Metro Review is Active', 'Please review task Sun Metro Review of Record Number ' + capIDString);
	}

	if (AInfo['CAD Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'CAD Review is Active', 'Please review task CAD Review of Record Number ' + capIDString);
	}

	if (AInfo['EPISD Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'EPISD Review is Active', 'Please review task EPISD Review of Record Number ' + capIDString);
	}

	if (AInfo['CISD Review'] == 'Yes') {
		email('greveles@canutillo-isd.org;abarraza@canutillo-isd.org', 'accela@elpasotexas.gov', 'CISD Review is Active', 'Please review task CISD Review of Record Number ' + capIDString);
	}

	if (AInfo['Texas Gas Serv Review'] == 'Yes') {
		email('eroman@txgas.com;lcruiz0716@gmail.com', 'accela@elpasotexas.gov', 'Texas Gas Serv Review is Active', 'Please review task Texas Gas Serv Review of Record Number ' + capIDString);
	}

	if (AInfo['El Paso Water Utilities Review'] == 'Yes') {
		email('flopez@epwu.org;gcedillos@epwu.org;acastillo@epwu.org', 'accela@elpasotexas.gov', 'El Paso Water Utilities Review is Active', 'Please review task El Paso Water Utilities Review of Record Number ' + capIDString);
	}

	if (AInfo['City Eng Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'City Eng Review is Active', 'Please review task City Eng Review of Record Number ' + capIDString);
	}

	if (AInfo['Parks Review'] == 'Yes') {
		email('DeLaRosaJA@elpasotexas.gov;NovakTA@elpasotexas.gov', 'accela@elpasotexas.gov', 'Parks Review is Active', 'Please review task Parks Review of Record Number ' + capIDString);
	}

	if (AInfo['ESD Review'] == 'Yes') {
		email('AvitiaJX@elpasotexas.gov;Manuel.A.Morales2@elpasoatexas.gov', 'accela@elpasotexas.gov', 'ESD Review is Active', 'Please review task ESD Review of Record Number ' + capIDString);
	}

	if (AInfo['Post Office Review'] == 'Yes') {
		email(emailTo, 'accela@elpasotexas.gov', 'Post Office Review is Active', 'Please review task Post Office Review of Record Number ' + capIDString);
	}

	loadTaskSpecific(TSI, capId);
	if (AInfo['County Eng Review'] == 'Yes') {
		email('rrivera@epcounty.com;lrodriguez@epcounty.com', 'accela@elpasotexas.gov', 'County Eng Review is Active', 'Please review task County Eng Review of Record Number ' + capIDString);
	}

	if (AInfo['SISD Review'] == 'Yes') {
		email('rpadil05@sisd.net;jjaime@sisd.net', 'accela@elpasotexas.gov', 'SISD Review is Active', 'Please review task SISD Review of Record Number ' + capIDString);
	}

	if (AInfo['Cable TV Review'] == 'Yes') {
		email('ray.mendoza@twcable.com', 'accela@elpasotexas.gov', 'Cable TV Review is Active', 'Please review Cable TV task  Review of Record Number ' + capIDString);
	}

	if (AInfo['TXDot Review'] == 'Yes') {
		email('Robert.Flores9@txdot.gov;James.Stevenson@txdot.gov;Gus.Sanchez@txdot.gov;Jaime.Perales@txdot.gov;Alfredo.Sanchez@txdot.gov', 'accela@elpasotexas.gov', 'TXDot Review is Active', 'Please review TXDot task  Review of Record Number ' + capIDString);
	}

	if (AInfo['911 Review'] == 'Yes') {
		email('thelmam@elpasocounty911.org;SoniaR@elpasocounty911.org', 'accela@elpasotexas.gov', '911 Review is Active', 'Please review task 911 Review of Record Number ' + capIDString);
	}

	if (AInfo['Land Development Review'] == 'Yes') {
		email('DalloKF@elpasotexas.gov;CastilloAM@elpasotexas.gov', 'accela@elpasotexas.gov', 'Land Development Review is Active', 'Please review task Land Development Review of Record Number ' + capIDString);
	}

	if (AInfo['EPDOT Review'] == 'Yes') {
		email('BustillosAX@elpasotexas.gov;KutzHD@elpasotexas.gov', 'accela@elpasotexas.gov', 'EPDOT Review is Active', 'Please review task EPDOT Review of Record Number ' + capIDString);
	}

}
