

//replaced branch(ES_ADD_LICFIRE_LICTYPE_FEES)
ES_ADD_LICFIRE_LICTYPE_FEES();
var emailRecipient = 'delacruzja@elpasotexas.gov;RuizAM@elpasotexas.gov';
var occupancy = false;
var cOfUse = false;
var notify = false;
if (AInfo['Valid Certificate of Occupancy on Site'] == 'Yes') {
	occupancy = true;
	}

if (AInfo['Change of Use'] == 'Yes') {
	cOfUse = true;
	}

if (AInfo['Notify Building Department'] == 'Yes') {
	notify = true;
	}

if (notify && occupancy &&  !cOfUse) {
	email(emailRecipient, 'accela@elpasotexas.gov', 'Valid Certificate of Occupancy on Site for ' + capIDString, 'Valid Certificate of Occupancy on Site was set to yes for ' + capIDString);
	}

if (notify && cOfUse && !occupancy) {
	email(emailRecipient, 'accela@elpasotexas.gov', 'Change of Use for ' + capIDString, 'Change of Use was set to yes for ' + capIDString);
	}

if (notify && occupancy && cOfUse) {
	email(emailRecipient, 'accela@elpasotexas.gov', 'Valid Certificate of Occupancy on Site and Change of Use for ' + capIDString, 'Valid Certificate of Occupancy on Site and Change of Use were set to yes for ' + capIDString);
	}

