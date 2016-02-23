

//start replaced branch: ES_ENGSPPRIV_ADDFEES
{
	if ((typeof(TYPE) == 'object' || typeof(TEMPORARY) == 'object')) {
		addFee('FSP010', 'SPRIV', 'STANDARD', 1, 'N');
	}

	if (typeof(DOWNTOWN) == 'object') {
		addFee('FSP015', 'SPRIV', 'STANDARD', 1, 'N');
	}

	//start replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP
	{
		if (typeof(TYPE) == 'object') {
			for (eachrow in TYPE)
				//start replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP_TYPE
			{
				asiRow = TYPE[eachrow];
				if (asiRow['Item'] == 'Outdoor pay telephones' && asiRow['Quantity'] > 0) {
					updateFee('FSP125', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Awning, canopy, marquee, sign (legally existing)' && asiRow['Quantity'] > 0) {
					updateFee('FSP055', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Awning, canopy, marquee, sign (NEW)' && asiRow['Quantity'] > 0) {
					updateFee('FSP060', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Security roll-up door' && asiRow['Quantity'] > 0) {
					updateFee('FSP065', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Taxi stand' && asiRow['Quantity'] > 0) {
					updateFee('FSP020', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Underground storage vault or structure in CBD' && asiRow['Quantity'] > 0) {
					updateFee('FSP070', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Designated food vending concessions in the downtown area' && asiRow['Quantity'] > 0) {
					updateFee('FSP075', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Pipelines, whether overhead, surface or subsurface' && asiRow['Quantity'] > 0) {
					updateFee('FSP080', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Accessibility ramps required by code' && asiRow['Quantity'] > 0) {
					updateFee('FSP085', 'SPRIV', 'STANDARD', asiRow['Quantity'], 'Y', 'N');
				}

				if (asiRow['Item'] == 'Cables' && asiRow['Type'] == 'Surface' && asiRow['Quantity'] > 0) {
					updateFee('FSP090', 'SPRIV', 'STANDARD', (asiRow['Quantity'] * asiRow['CAD Sq Ft'] * asiRow['Encroachment Sq Ft'] * .1), 'Y', 'N');
				}

				if (asiRow['Item'] == 'Cables' && asiRow['Type'] == 'Subsurface' && asiRow['Quantity'] > 0) {
					updateFee('FSP095', 'SPRIV', 'STANDARD', (asiRow['Quantity'] * asiRow['CAD Sq Ft'] * asiRow['Encroachment Sq Ft'] * .1 * .5), 'Y', 'N');
				}

				if (asiRow['Item'] == 'Cables' && asiRow['Type'] == 'Aerial' && asiRow['Quantity'] > 0) {
					updateFee('FSP100', 'SPRIV', 'STANDARD', (asiRow['Quantity'] * asiRow['CAD Sq Ft'] * asiRow['Encroachment Sq Ft'] * .1 * .75), 'Y', 'N');
				}

				if (asiRow['Type'] == 'Aerial Other' && asiRow['Quantity'] > 0) {
					updateFee('FSP170', 'SPRIV', 'STANDARD', (asiRow['Quantity'] * asiRow['CAD Sq Ft'] * asiRow['Encroachment Sq Ft'] * .1 * .75), 'Y', 'N');
				}

				if (asiRow['Type'] == 'Surface Other' && asiRow['Quantity'] > 0) {
					updateFee('FSP45', 'SPRIV', 'STANDARD', (asiRow['Quantity'] * asiRow['CAD Sq Ft'] * asiRow['Encroachment Sq Ft'] * .1), 'Y', 'N');
				}

				if (asiRow['Type'] == 'Sub-surface Other' && asiRow['Quantity'] > 0) {
					updateFee('FSP175', 'SPRIV', 'STANDARD', (asiRow['Quantity'] * asiRow['CAD Sq Ft'] * asiRow['Encroachment Sq Ft'] * .1 * .5), 'Y', 'N');
				}

			}
			//end replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP_TYPE;
		}

		if (typeof(TEMPORARY) == 'object') {
			for (eachrow in TEMPORARY)
				//start replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP_TEMPORARY
			{
				asiRow = TEMPORARY[eachrow];
				duration = parseInt(AInfo['Closure Duration (Days)']);
				comment('Days Closed = ' + AInfo['GENERAL.Days Closed']);
				if (asiRow['Request Type'] == 'Temporary street display') {
					addFee('FSP145', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'Temporary street display' && asiRow['Bracket Type'] == 'Single') {
					addFee('FSP146', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'Temporary street display' && asiRow['Bracket Type'] == 'Double') {
					addFee('FSP147', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'Banner Program') {
					addFee('FSP150', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'Temporary banner') {
					addFee('FSP155', 'SPRIV', 'STANDARD', AInfo['GENERAL.Event Duration (Days)'], 'Y');
				}

				if (asiRow['Request Type'] == 'Street closure in a residential/apartment zone, exceeding 24 hours') {
					addFee('FSP160', 'SPRIV', 'STANDARD', (parseInt(AInfo['GENERAL.Days Closed'])), 'Y');
				}

				if (asiRow['Request Type'] == 'Street closure in a commercial/manufacturing zone, exceeding 24 hours') {
					addFee('FSP165', 'SPRIV', 'STANDARD', (parseInt(AInfo['GENERAL.Days Closed'])), 'Y');
				}

				if (asiRow['Request Type'] == 'Street closure in a comercial/manufacturing zone, 24 hours or less') {
					addFee('FSP165', 'SPRIV', 'STANDARD', (parseInt(AInfo['GENERAL.Days Closed'])), 'Y');
				}

			}
			//end replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP_TEMPORARY;
		}

		if (typeof(DOWNTOWN) == 'object') {
			for (eachrow in DOWNTOWN)
				//start replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP_DOWNTOWN
			{
				asiRow = DOWNTOWN[eachrow];
				if (asiRow['Request Type'] == 'Street furniture') {
					addFee('FSP030', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'Street closure exceeding 24 hours') {
					addFee('FSP050', 'SPRIV', 'STANDARD', parseInt(AInfo['Closure Duration (Days)']), 'Y');
				}

				if (asiRow['Request Type'] == 'New security roll-up door') {
					addFee('FSP130', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'New, relocated, repaired or replaced canopy or awning') {
					addFee('FSP110', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'New, relocated, repaired or replaced wall sign') {
					addFee('FSP115', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'New, relocated, repaired or replaced marquee, kiosk, or other sign') {
					addFee('FSP120', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'Outdoor cafe, restaurant, or market place') {
					addFee('FSP125', 'SPRIV', 'STANDARD', 1, 'Y');
				}

				if (asiRow['Request Type'] == 'Street closure, 24 hours or less') {
					addFee('FSP140', 'SPRIV', 'STANDARD', parseInt(AInfo['Closure Duration (Days)']), 'Y');
				}

			}
			//end replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP_DOWNTOWN;
		}

	}
	//end replaced branch: ES_ENGSPPRIV_ADDFEES_LOOP;

}
//end replaced branch: ES_ENGSPPRIV_ADDFEES;
