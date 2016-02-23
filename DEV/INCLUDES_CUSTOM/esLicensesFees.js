function esLicensesFees() {

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Temporary Establishment - Unexposed Food') {
		addFee('FL002', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Recurrent Establishment - Unexposed Food') {
		addFee('FL003', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Seasonal Establishment - Unexposed Food') {
		addFee('FL004', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Temporary Establishment - Exposed Food') {
		addFee('FL005', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Recurrent Establishment - Exposed Food') {
		addFee('FL006', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Seasonal Establishment - Exposed Food') {
		addFee('FL007', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Home Child Care Facility - Less than 12 Children') {
		addFee('FL008', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Day Care Center - More than 12 Recipients') {
		addFee('FL009', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Mobile Establishment - Unexposed Food') {
		addFee('FL010', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Mobile Establishment - Exposed Food') {
		addFee('FL011', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Food Product - Under 200 Sq Ft, Prepackaged & No Potentially Hazardous Food') {
		addFee('FL012', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Food Service/Food Product - Under 3000 Square Feet') {
		addFee('FL013', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Food Service/Food Product - 3001 to 6000 Square Feet') {
		addFee('FL014', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Food Service/Food Product - 6001 to 9000 Square Feet') {
		addFee('FL015', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Food Service/Food Product - 9001 or More Square Feet') {
		addFee('FL016', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Outdoor Market') {
		addFee('FL017', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Adult Foster Care Home/Private Care Home - 4 or Less Care Recipients') {
		addFee('FL018', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Personal Care Home - 5-8 Care Recipients') {
		addFee('FL019', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Personal Care Home - 9-18 Care Recipients') {
		addFee('FL020', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Vendor/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type'] == 'Primary') {
		addFee('FL065', 'LICVEND', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Money Exchange/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL067', 'LICMONEXC', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Temp Vendor/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL068', 'LICTMPVEND', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Gas Heating/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL069', 'LICGAS', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Hotel Motel/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL070', 'LICHOTEL', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Lodging/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL072', 'LICLODGE', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Residential Parking/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL073', 'LICRESPK', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Home Occ/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL074', 'LICHOME', 'STANDARD', 1, 'N');
		addFee('FL075', 'LICHOME', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Secondhand Dealer/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['Type'] == 'Primary') {
		addFee('FL076', 'LIC2ND', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Charitable Solicitation/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL078', 'LICCHAR', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Parade/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL079', 'LICPARADE', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Amplification/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Days Between Event and Application'] > 3) {
		addFee('FL080', 'LICAMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Temp Event/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL081', 'LICTEMP', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Sexually Oriented Business/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type'] == 'Renewal') {
		addFee('FL094', 'LICSEX', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Swimming Pool and Spa/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required')) {

		//start replaced branch: ES_LICPOOLSPA_ADDFEES
		{
			if (typeof(POOLANDSPAINFORMATION) == 'object') {
				for (eachrow in POOLANDSPAINFORMATION)
					//start replaced branch: ES_LICPOOLSPA_ADDFEES_LOOP
				{
					asiRow = POOLANDSPAINFORMATION[eachrow];
					showMessage = true;
					if (asiRow['No. of Pools'] > 0 && AInfo['New Applicant'] == 'Yes') {
						addFee('FL095', 'LICPOOL', 'STANDARD', asiRow['No. of Pools'], 'N');
					}

					if (asiRow['No. of Spas'] > 0 && AInfo['New Applicant'] == 'Yes') {
						addFee('FL096', 'LICPOOL', 'STANDARD', asiRow['No. of Spas'], 'N');
					}

					if (asiRow['No. of Pools'] > 0 && AInfo['New Applicant'] == 'No') {
						addFee('FL097', 'LICPOOL', 'STANDARD', asiRow['No. of Pools'], 'N');
					}

					if (asiRow['No. of Spas'] > 0 && AInfo['New Applicant'] == 'No') {
						addFee('FL098', 'LICPOOL', 'STANDARD', asiRow['No. of Spas'], 'N');
					}

				}
				//end replaced branch: ES_LICPOOLSPA_ADDFEES_LOOP;
			}

		}
		//end replaced branch: ES_LICPOOLSPA_ADDFEES;
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Tattoo' && AInfo['Renewal'] == 'No') {
		addFee('FL102', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Tattoo and Body Piercing' && AInfo['Renewal'] == 'No') {
		addFee('FL104', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Body Piercing' && AInfo['Renewal'] == 'No') {
		addFee('FL107', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Laundry/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL115', 'LICLAUND', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Sign/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of License'] == 'Sign Painting Only') {
		addFee('FL085', 'LICSIGN', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Sign/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of License'] == 'On/Off Premise') {
		addFee('FL086', 'LICSIGN', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Sign/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of License'] == 'Inflatable Sign B-3') {
		addFee('FL087', 'LICSIGN', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Sign/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of License'] == 'Inflatable Sign B-4') {
		addFee('FL088', 'LICSIGN', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Secondhand Dealer/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Submitted' && AInfo['Type'] == 'Secondary') {
		addFee('FL077', 'LIC2ND', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Secondhand Dealer/NA/NA') && wfTask == 'Police Review' && wfStatus == 'Passed' && AInfo['Type'] == 'Secondary') {
		invoiceFee('FL077', 'STANDARD');
	}

	if (appMatch('Licenses/Secondhand Dealer/NA/NA') && wfTask == 'Police Review' && wfStatus == 'Passed' && AInfo['Type'] == 'Primary') {
		invoiceFee('FL076', 'STANDARD');
	}

	if (appMatch('Licenses/Itinerant Vendor/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FL118', 'LICITINVEN', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Sexually Oriented Business/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type'] == 'Initial') {
		addFee('FL093', 'LICSEX', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Sexually Oriented Business Emp/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type'] == 'Initial') {
		addFee('FL110', 'LICSEX', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Sexually Oriented Business Emp/NA/NA') && wfTask == 'Police Review' && wfStatus == 'Approved' && AInfo['Type'] == 'Renewal') {
		addFee('FL112', 'LICSEX', 'STANDARD', 1, 'N');
		invoiceFee('FL112', 'STANDARD');
	}

	var D = new Date();
	if (appMatch('Licenses/Car Dealer/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && D.getMonth() >= 4) {
		showMessage = true;
		var T = 12 - D.getMonth() + 3;
		comment('Numb:' + T);
		addFee('FL090', 'LICCARDEAL', 'STANDARD', T, 'N');
	}

	if (appMatch('Licenses/Car Dealer/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && D.getMonth() <= 3) {
		showMessage = true;
		var D = new Date();
		var T = 3 - D.getMonth();
		comment('Numb:' + T);
		addFee('FL090', 'LICCARDEAL', 'STANDARD', T, 'N');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Tattoo' && AInfo['Renewal'] == 'Yes') {
		addFee('FL103', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Body Piercing' && AInfo['Renewal'] == 'Yes') {
		addFee('FL108', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Tattoo and Body Piercing' && AInfo['Renewal'] == 'Yes') {
		addFee('FL105', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Temporary Body Piercing') {
		addFee('FL110', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Temporary Tattoo') {
		addFee('FL109', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/NA/NA') && wfTask == 'Application Submittal' && (wfStatus == 'Completed' || wfStatus == 'No Review Required') && AInfo['Type of License'] == 'Temporary Tattoo/Body Piercing') {
		addFee('FL111', 'LICTBPEMP', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Food/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['License Type'] == 'Meat Establishment, Warehouse, Food Processing Plant') {
		addFee('FL001', 'LICFOOD', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Alcohol/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {

		//start replaced branch: COEP_LICENSE_ALCOHOL_ADDFEES
		{
			if (typeof(LIQUORCLASS) == 'object') {
				for (eachrow in LIQUORCLASS)
					//start replaced branch: COEP_LICENSE_ALCOHOL_ADDFEES_LOOP
				{
					asiRow = LIQUORCLASS[eachrow];
					if (asiRow['Class'] == 'MB-Mixed Bev after 3rd year') {
						updateFee('FLA100', 'LICALCOHOL', 'STANDARD', 1, 'N', 'N');
					}

					if (asiRow['Class'] == 'LB-Mixed Beverage Late Hours') {
						updateFee('FLA110', 'LICALCOHOL', 'STANDARD', 1, 'N', 'N');
					}

					if (asiRow['Class'] == 'PE-Beverage Cartage') {
						updateFee('FLA120', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BG-Beer/Wine On Premise') {
						updateFee('FLA130', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BL-Beer/Wine Later Hours') {
						updateFee('FLA140', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BE-Beer On Premise') {
						updateFee('FLA150', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'MI-Mini Bar After 3rd year') {
						updateFee('FLA160', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == "CB-Caterer's After 3rd year") {
						updateFee('FLA170', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BQ-Beer/Wine Off Premise') {
						updateFee('FLA180', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BF-Beer Off Premise') {
						updateFee('FLA190', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'P-Package Store') {
						updateFee('FLA200', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'Q-Package Store Wine Only') {
						updateFee('FLA210', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'LP-Local Distributor') {
						updateFee('FLA220', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BC-Branch Distributor') {
						updateFee('FLA230', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BB-General Distributor') {
						updateFee('FLA240', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'W-Wholesale Distributor') {
						updateFee('FLA250', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'X-General Wholesale #B') {
						updateFee('FLA260', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'LX-Local Wholesale #B') {
						updateFee('FLA270', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == "BI-Importer's") {
						updateFee('FLA280', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == "BJ-Importer's Carrier") {
						updateFee('FLA290', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'Dancing') {
						updateFee('FLA300', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'Billiard Hall (each pool table)') {
						updateFee('FLA310', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == "Z-Wine Bottler's Permit") {
						updateFee('FLA320', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'G-Winery Permit') {
						updateFee('FLA330', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'PS-Package Store Tasting Permit') {
						updateFee('FLA340', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

					if (asiRow['Class'] == 'BP-Brew Pub') {
						updateFee('FLA350', 'LICALCOHOL', 'STANDARD', 1, 'Y', 'N');
					}

				}
				//end replaced branch: COEP_LICENSE_ALCOHOL_ADDFEES_LOOP;
			}

		}
		//end replaced branch: COEP_LICENSE_ALCOHOL_ADDFEES;
	}

	if (appMatch('Licenses/Flea Market/*/*') && wfTask == 'Completeness Check' && wfStatus == 'Approved' && AInfo['Renewal'] == 'Yes') {
		addFee('FL260', 'LICFLEAMARKET', 'STANDARD', 1, 'N');
		invoiceFee('FL260', 'STANDARD');
	}

	if (appMatch('Licenses/Flea Market/*/*') && wfTask == 'Completeness Check' && wfStatus == 'Approved' && AInfo['Renewal'] == 'No') {
		addFee('FL250', 'LICFLEAMARKET', 'STANDARD', 1, 'N');
		invoiceFee('FL250', 'STANDARD');
	}

	if (appMatch('Licenses/Amplification/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Days Between Event and Application'] < 4) {
		addFee('FL090', 'LICAMP', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Temp Event/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Days Between Event and Application'] < 7) {
		addFee('FL090', 'LICTEMP', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Vendor/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type'] == 'Secondary') {
		addFee('FL066', 'LICVEND', 'STANDARD', 1, 'Y');
	}

	if (appMatch('Licenses/Animal/Breeders Permit/NA') && inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass')) {
		addFee('EA001', 'ANIMALBREEDER', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Animal/Establishment/Sales') && inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass')) {
		addFee('EA002', 'ANIMALESTSALES', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Animal/Exhibit or Show/NA') && inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass')) {
		addFee('EA015', 'ANIMALEXHIBIT', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Animal/Litter/NA') && inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass')) {
		addFee('EA007', 'ANIMALLITTER', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Animal/Fowl, Rabbits, Livestock/NA') && inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass') && AInfo['SITE INFORMATION.Animal Size'] == 'Small') {
		addFee('EA10', 'ANIMALFOWLS', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Animal/Fowl, Rabbits, Livestock/NA') && inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass') && (AInfo['SITE INFORMATION.Animal Size'] == 'Large' || AInfo['SITE INFORMATION.Animal Size'] == 'Both')) {
		addFee('EA005', 'ANIMALFOWLS', 'STANDARD', 1, 'N');
	}

	if (appMatch('Licenses/Tattoo Studio/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
		addFee('FLTS001', 'LICTATTSTUDIO ', STANDARD, 1, 'Y');
	}

}
