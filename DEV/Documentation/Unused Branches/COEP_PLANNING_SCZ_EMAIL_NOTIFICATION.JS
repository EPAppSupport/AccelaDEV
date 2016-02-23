
var emailSubject = ('Record : ' + capIDString + ' is in a SCZ zone ');
var emailBody = ('The record ID : ' + capIDString + ' is in a SCZ zone. ');
if (appMatch('Planning/Zoning/*/*') && getGISInfo('Accela_map', 'Zoning', 'ZONE_') == 'SCZ') {
	email('GibsonEk@elpasotexas.gov;
	KissackLF@elpasotexas.gov','accela@elpasotexas.gov',emailSubject,emailBody);
	activateTask('Smart Code Review');
	}

