function ES_PLANNING_DETSITEP_ACA_ADD_FEES() {

	feeNumber = '';
	parcelAcreage = AInfo['Parcel Acreage'];
	if (parcelAcreage == 'Up to 1 acre')
		feeNumber = 321.18;
	if (parcelAcreage == '1.1 to 3.0 acres')
		feeNumber = 378.42;
	if (parcelAcreage == '3.1 to 5.0 acres')
		feeNumber = 450.50;
	if (parcelAcreage == '5.1 to 10.0 acres')
		feeNumber = 511.98;
	if (parcelAcreage == '10.1 to more acres')
		feeNumber = 645.54;
	showMessage = true;
	comment('=======> feeNumber is ' + feeNumber);
	if (publicUser && parcelAcreage != '') {
		updateFee('FP006', 'PLNDSP', 'STANDARD', feeNumber, 'Y', 'N');
		updateFee('CC003', 'PLNDSP', 'STANDARD', 1, 'Y', 'N');
		updateFee('TF001A', 'PLNDSP', 'STANDARD', 1, 'Y', 'N');
	}

}
