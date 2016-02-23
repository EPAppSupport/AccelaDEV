function esCheckLicProf() {

	if ((wfTask == 'Issue' && wfStatus == 'Issued' || wfTask == 'Inspection') && capHasExpiredLicProf('EXPIRE') != false) {
		showMessage = true;
		comment('Permit cannot be issued because the licensed professional has an expired license.');
		cancel = true;
	}

}
