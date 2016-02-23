function ES_PRA_FIRE_EMAIL() {

	email('FD-FPDPublicEducation@elpasotexas.gov', 'accela@elpasotexas.gov', 'Payment has been received for record ' + capIDString, 'Payment has been received for record ' + capIDString + ' with address ' + getCapAddress(capId));

}
