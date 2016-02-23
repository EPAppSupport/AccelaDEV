function ES_PLANNING_REZONING_ACA_ADD_FEES() {

	feeNumber = '';
	parcelAcreage = AInfo['Parcel Acreage'];
	if (parcelAcreage == 'Up to 1 acre')
		feeNumber = 835.28;
	if (parcelAcreage == '1.1 to 10 acres')
		feeNumber = 902.06;
	if (parcelAcreage == '10.1 to 30 acres')
		feeNumber = 968.84;
	if (parcelAcreage == '30.1 to 50 acres')
		feeNumber = 1029.26;
	if (parcelAcreage == '50.1 to 75 acres')
		feeNumber = 1090.74;
	if (parcelAcreage == '75.1 to more acres')
		feeNumber = 1541.24;
	showMessage = true;
	comment('=======> feeNumber is ' + feeNumber);

}
