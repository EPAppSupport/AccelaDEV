function COEP_LICENSES_RENEWAL_YEARS() {
	numberOfYears = '';
	if (AInfo['Term of License'] == '1 Year') {
		numberOfYears = 1;
	}

	if (AInfo['Term of License'] == '2 Year') {
		numberOfYears = 2;
	}

	if (appMatch('Licenses/Alcohol/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Reviews Required')) {

		//start replaced branch: COEP_LIC_ALCOHOL_TERMOFLIC_ADDFEE
		{
			showDebug = false;
			showMessage = false;
			if (typeof(LIQUORCLASS) == 'object') {
				for (eachrow in LIQUORCLASS)
					//start replaced branch: COEP_LIC_ALCOHOL_TERMOFLIC_ADDFEE_LOOP
				{
					asiRow = LIQUORCLASS[eachrow];
					if (asiRow['Class'] == 'BQ-Beer/Wine Off Premise') {
						updateFee('FLA180', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BF-Beer Off Premise') {
						updateFee('FLA190', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'P-Package Store') {
						updateFee('FLA200', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'Q-Package Store Wine Only') {
						updateFee('FLA210', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'LP-Local Distributor') {
						updateFee('FLA220', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BC-Branch Distributor') {
						updateFee('FLA230', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BB-General Distributor') {
						updateFee('FLA240', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'W-Wholesale Distributor') {
						updateFee('FLA250', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'X-General Wholesale #B') {
						updateFee('FLA260', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'LX-Local Wholesale #B') {
						updateFee('FLA270', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'MB-Mixed Bev after 3rd year') {
						addFee('FLA100', 'LICALCOHOL', 'STANDARD', numberOfYears, 'N');
					}

					if (asiRow['Class'] == "BI-Importer's") {
						updateFee('FLA280', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == "BJ - Importer's Carrier") {
						updateFee('FLA290', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'Dancing') {
						updateFee('FLA300', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'Billiard Hall(each pool table)') {
						updateFee('FLA310', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == "Z-Wine Bottler's Permit ") {
						updateFee('FLA320', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'G - Winery Permit') {
						updateFee('FLA330', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'PS - Package Store Tasting Permit') {
						updateFee('FLA340', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BP - Brew Pub') {
						updateFee('FLA350', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'LB - Mixed Beverage Late Hours') {
						updateFee('FLA110', 'LICALCOHOL', 'STANDARD', numberOfYears, 'N', 'N');
					}

					if (asiRow['Class'] == 'PE - Beverage Cartage') {
						updateFee('FLA120', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BG - Beer/Wine On Premise') {
						updateFee('FLA130', 'LICALCOHOL', 'STANDARD', numberOfYears, 'N', 'N');
					}

					if (asiRow['Class'] == 'BL - Beer/Wine Later Hours') {
						updateFee('FLA140', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BE - Beer On Premise') {
						updateFee('FLA150', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == 'MI - Mini Bar After 3rd year') {
						updateFee('FLA160', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

					if (asiRow['Class'] == " CB - Caterer's After 3rd year") {
						updateFee('FLA170', 'LICALCOHOL', 'STANDARD', numberOfYears, 'Y', 'N');
					}

				}
				//end replaced branch: COEP_LIC_ALCOHOL_TERMOFLIC_ADDFEE_LOOP;
			}

			if (numberOfYears == 1) {
				editAppSpecific('Expiration Date', dateAddMonths(null, 12));
			}

			if (numberOfYears == 2) {
				editAppSpecific('Expiration Date', dateAddMonths(null, 24));
			}

		}
		//end replaced branch: COEP_LIC_ALCOHOL_TERMOFLIC_ADDFEE;
	}

	if (appMatch('Licenses/Car Dealer/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {

		//start replaced branch: COEP_CAR_RENEWAL_ADDFEE
		{
			if (numberOfYears == 1) {
				addFee('FL090', 'LICCARDEAL', 'STANDARD', 145, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 12));
			}

			if (numberOfYears == 2) {
				addFee('FL090', 'LICCARDEAL', 'STANDARD', 290, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 24));
			}

		}
		//end replaced branch: COEP_CAR_RENEWAL_ADDFEE;
	}

	if (appMatch('Licenses/Swimming Pool and Spa/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {

		//start replaced branch: COEP_SWIM_RENEWAL_ADDFEE
		{
			if (numberOfYears == 1) {
				addFee('FL097', 'LICPOOL', 'STANDARD', 1, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 12));
			}

			if (numberOfYears == 2) {
				addFee('FL097', 'LICPOOL', 'STANDARD', 2, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 24));
			}

		}
		//end replaced branch: COEP_SWIM_RENEWAL_ADDFEE;
	}

	if (appMatch('Licenses/Home Occupation/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {

		//start replaced branch: COEP_HOMEOCC_RENEWAL_ADDFEE
		{
			if (numberOfYears == 1) {
				addFee('FL074', 'LICHOME', 'STANDARD', 1, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 12));
			}

			if (numberOfYears == 2) {
				addFee('FL074', 'LICHOME', 'STANDARD', 2, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 24));
			}

		}
		//end replaced branch: COEP_HOMEOCC_RENEWAL_ADDFEE;
	}

	if (appMatch('Licenses/Laundry/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {

		//start replaced branch: COEP_LAUNDRY_RENEWAL_ADDFEE
		{
			if (numberOfYears == 1) {
				addFee('FL115', 'LICLAUND', 'STANDARD', 1, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 12));
			}

			if (numberOfYears == 2) {
				addFee('FL115', 'LICLAUND', 'STANDARD', 2, 'N');
				editAppSpecific('Expiration Date', dateAddMonths(null, 24));
			}

		}
		//end replaced branch: COEP_LAUNDRY_RENEWAL_ADDFEE;
	}

	if (appMatch('Licenses/Sign/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {

		//start replaced branch: COEP_SIGN_RENEWAL_ADDFEE
		{
			if (AInfo['Type of License'] == 'Sign Painting Only') {
				addFee('FL085', 'LICSIGN', 'STANDARD', numberOfYears, 'N');
			}

			if (AInfo['Type of License'] == 'On/Off Premise') {
				addFee('FL086', 'LICSIGN', 'STANDARD', numberOfYears, 'N');
			}

			if (AInfo['Type of License'] == 'Inflatable Sign B - 3') {
				addFee('FL087', 'LICSIGN', 'STANDARD', numberOfYears, 'N');
			}

			if (AInfo['Type of License'] == 'Inflatable Sign B - 4') {
				addFee('FL088', 'LICSIGN', 'STANDARD', numberOfYears, 'N');
			}

		}
		//end replaced branch: COEP_SIGN_RENEWAL_ADDFEE;
	}

}
