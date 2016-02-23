
// TODO: branch doesn't exist
// branch('ES_Animal_SocialMedia_AppSubmitAfter');

if ((wfTask == 'Claim' && wfStatus == 'Claim VNR')) {
	email('youngke@elpasotexas.gov;PadillaR@elpasotexas.gov;CarrascoMA@elpasotexas.gov;DavilaE2@elpasotexas.gov;BurdenKL@elpasotexas.gov;MartinezSJ@elpasotexas.gov;MarabotoGL@elpasotexas.gov;MucinoRX@elpasotexas.gov;HolguinMX@elpasotexas.gov', 'accela@elpasotexas.gov', ('Claim pending VNR/Microchip - ' + capIDString), 'Please Review');
}

if ((wfTask == 'Close' && wfStatus == 'Close')) {
	inspCancelAll();
}

if ((wfTask == 'Close' && wfStatus == 'Close')) {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'DIK') {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Submittal' && wfStatus == 'Cancel') {
	deactivateTask('Completeness Check');
	closeTask('Completeness Check', 'Record Cancelled', 'Closed by Script');
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Animal Scan' && wfStatus == 'Cancel') {
	deactivateTask('Completeness Check');
	closeTask('Completeness Check', 'Record Cancelled', 'Closed by Script');
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Animal Scan' && wfStatus == 'DOAS') {
	deactivateTask('Completeness Check');
	closeTask('Completeness Check', 'DIK', 'Closed by Script');
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Claim' && wfStatus == 'DIK') {
	deactivateTask('Completeness Check');
	closeTask('Completeness Check', 'DIK', 'Closed by Script');
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Disposal Fees Paid') {
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'DIK') {
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Record Cancelled') {
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'RTO') {
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'TNR Release') {
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Transfer') {
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Transfer Adopted') {
	deactivateTask('Euthanization');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Transfer Foster') {
	deactivateTask('Euthanization');
}

if (wfTask == 'Completeness Check' && wfStatus == 'Transfer Rescue Partner') {
	deactivateTask('Close');
	deactivateTask('Euthanization');
	closeTask('Close', 'Close', 'Closed by Script');
}

if (wfTask == 'Euthanization' && wfStatus == 'Euthanized') {
	deactivateTask('Close');
	closeTask('Close', 'Close', 'Closed by Script');
}
