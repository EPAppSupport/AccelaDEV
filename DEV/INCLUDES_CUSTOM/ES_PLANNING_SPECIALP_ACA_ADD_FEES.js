function ES_PLANNING_SPECIALP_ACA_ADD_FEES() {

	feeNumber = '';
	parcelAcreage = AInfo['Parcel Acreage'];
	if (parcelAcreage == 'Up to 1 acre')
		feeNumber = 645.54;
	if (parcelAcreage == '1.1 to 3.0 acres')
		feeNumber = 707.02;
	if (parcelAcreage == '3.1 to 5.0 acres')
		feeNumber = 771.68;
	if (parcelAcreage == '5.1 to 10.0 acres')
		feeNumber = 836.34;
	if (parcelAcreage == '10.1 to more acres')
		feeNumber = 963.54;
	showMessage = true;
	comment('=======> feeNumber is ' + feeNumber);
	if (publicUser && parcelAcreage != '') {
		updateFee('FP008', 'PLNSP', 'STANDARD', feeNumber, 'Y', 'N');
		updateFee('CC003', 'PLNSP', 'STANDARD', 1, 'Y', 'N');
		updateFee('TF001A', 'PLNSP', 'STANDARD', 1, 'Y', 'N');
	}

}
