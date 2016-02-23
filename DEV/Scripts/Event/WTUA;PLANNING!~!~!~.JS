
inspResult = null;

//start replaced branch: ES_PLANNING_FEES
{
	if (appMatch('Planning/Subdivision/Improvement Permits/ROW') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FP001', 'PLNIMPROW', 'STANDARD', 1, 'N');
	}

	if (appMatch('Planning/Subdivision/Subdivision/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FP002', 'PLNIMPROW', 'STANDARD', 1, 'N');
	}

	if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['Parcel Acreage'] != null) {

		//start replaced branch: ES_PLANNING_DTL_SITE_PLAN_ADD_FEES
		{
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
			if (parcelAcreage != '') {
				updateFee('FP006', 'PLNDSP', 'STANDARD', feeNumber, 'Y', 'N');
			}

		}
		//end replaced branch: ES_PLANNING_DTL_SITE_PLAN_ADD_FEES;
	}

	if (appMatch('Planning/Zoning/Rezoning/NA') && wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['GENERAL.Field Acreage'] > 0) {
		addFee('FP007', 'PLNREZON', 'STANDARD', 1, 'N');
	}

	if (appMatch('Planning/Zoning/Special Permit/NA') && wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['Parcel Acreage'] != null) {

		//start replaced branch: ES_PLANNING_SPECIAL_PERMIT_ADD_FEES
		{
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
			if (parcelAcreage != '') {
				updateFee('FP008', 'PLNDSP', 'STANDARD', feeNumber, 'Y', 'N');
			}

		}
		//end replaced branch: ES_PLANNING_SPECIAL_PERMIT_ADD_FEES;
	}

	if (appMatch('Planning/Subdivision/Ammending Final/NA') && wfTask == 'Application Submittal' && wfStatus == 'Submitted') {
		addFee('FP009', 'PLNAMNDF', 'STANDARD', 1, 'N');
	}

	if (appMatch('Planning/Subdivision/Plat Determination/NA') && wfTask == 'Application Submittal' && wfStatus == 'Submitted') {
		addFee('FP010', 'PLNPLAT', 'STANDARD', 1, 'N');
	}

	if (appMatch('Planning/Zoning/Sign Demo Permit/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FP048', 'PLNSGNDEM', 'STANDARD', 1, 'N');
	}

	if (appMatch('Engineering/Flood Zone Verification/NA/NA') && wfTask == 'Request Received' && wfStatus == 'Completed') {
		addFee('FP049', 'ENGFLD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Planning/Zoning/PWSF Communications/NA') && wfTask == 'Completeness Check' && wfStatus == 'Passed') {
		addFee('FB039', 'BLDGGEN', 'STANDARD', 1, 'N');
	}

}
//end replaced branch: ES_PLANNING_FEES;
if (wfTask == 'Task Assignment' && matches(wfStatus, 'Assign Electronic Review', 'Assign Paper Review')) {
	logDebug('Call function autoRouteReviews(E, Y)');
	autoRouteReviews('E', 'Y', 'ALL PLN');
	autoRouteReviews('E', 'Y', 'ALL PLN2');
}

//replaced branch(ES_WORKFLOWTASKUPDATEAFTER_ALL)
ES_WORKFLOWTASKUPDATEAFTER_ALL();
