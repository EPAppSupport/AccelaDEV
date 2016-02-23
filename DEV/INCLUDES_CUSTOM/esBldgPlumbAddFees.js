function esBldgPlumbAddFees() {

	showDebug = false;
	showMessage = false;
	removeFee('FB116', 'STANDARD');
	removeFee('FB117', 'STANDARD');
	if (appMatch('Building/Plumbing/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
		addFee('FB106', 'BLDGPLUMB', 'STANDARD', 1, 'Y');
	}

	for (eachrow in PLUMBINGFIXTURES)
		//start replaced branch: ES_BLDGPLUMB_ADDFEES_LOOP
	{
		if (asiRow['Fixture Type'] == 'P04 - Water Closet 1-5' && asiRow['Quantity'] > 5) {
			updateFee('FB200', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P05 - Water Closet over 5' && asiRow['Quantity'] > 0) {
			updateFee('FB200', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		asiRow = PLUMBINGFIXTURES[eachrow];
		invoiceFee = 'N';
		if (publicUser)
			invoiceFee = 'Y';
		if (asiRow['Fixture Type'] == 'P10 - Additional surcharge after water connected' && asiRow['Quantity'] > 0) {
			updateFee('FB114', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P11 - Boiler: 5 horsepower or less, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB116', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P12 - Horsepower additional over 5, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB117', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P14 - Dishwasher, Washing Machine, Garbage Disposal unit, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB004', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P14 - Floor Drain,Electric Water Heater or Softener, etc. ea' && asiRow['Quantity'] > 0) {
			updateFee('FB201', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P14 - Grease Trap,Sand Trap,Separation Tanks,ea' && asiRow['Quantity'] > 0) {
			updateFee('FB202', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P14 - Dental Chair, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB204', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P15 - Commercial roof drain, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB119', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P16 - Bathtub,Shower,Lavatory,Drinking Fountain, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB120', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P16 - Sinks, Urinals, Bidets, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB203', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P17 - Vehicular dump station' && asiRow['Quantity'] > 0) {
			updateFee('FB121', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P18 - Single Sewer Ejector, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB122', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P19 - Dual Sewer Ejector, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB123', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P02 - House to sewer curb cut' && asiRow['Quantity'] > 0) {
			updateFee('FB107', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P20 - Solar heating systems' && asiRow['Quantity'] > 0) {
			updateFee('FB124', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P21 - Solar panels, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB125', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P22 - Back-up water heaters, gas' && asiRow['Quantity'] > 0) {
			updateFee('FB126', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P23 - Storage tank' && asiRow['Quantity'] > 0) {
			updateFee('FB127', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P24 - Appliances' && asiRow['Quantity'] > 0) {
			updateFee('FB105', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P25 - Swimming pools' && asiRow['Quantity'] > 0) {
			updateFee('FB136', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
			removeFee('FB106', 'STANDARD');
		}

		if (asiRow['Fixture Type'] == 'P26 - Jacuzzi (Hot Tubs), Therapy tubs, whirlpools, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB137', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P27 - Jacuzzi (Hot Tubs), Therapy tubs, whirlpools, ea additionally if included with swimming pool' && asiRow['Quantity'] > 0) {
			updateFee('FB138', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P28 - Gas water heater (pool, jacuzzi, etc.)' && asiRow['Quantity'] > 0) {
			updateFee('FB139', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P29 - Cartridge filters (pool, jacuzzi, etc.)' && asiRow['Quantity'] > 0) {
			updateFee('FB140', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P03 - Sewer tap' && asiRow['Quantity'] > 0) {
			updateFee('FB108', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P30 - Plumbing work no fixtures or sewer' && asiRow['Quantity'] > 0) {
			updateFee('FB141', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P31 - Mobile home hook-ups' && asiRow['Quantity'] > 0) {
			updateFee('FB142', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P32 - Gas Minimum Processing Fee' && asiRow['Quantity'] > 0) {
			updateFee('FB143', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P33 - Gas opening, appliance by others, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB144', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P34 - Commercial cooking unit, (ovens, etc.), ea' && asiRow['Quantity'] > 0) {
			updateFee('FB145', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P35 - Domestic cooking unit' && asiRow['Quantity'] > 0) {
			updateFee('FB146', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P36 - Gas Water Heater' && asiRow['Quantity'] > 0) {
			updateFee('FB147', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P37 - Commercial clothes dryer' && asiRow['Quantity'] > 0) {
			updateFee('FB149', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P38 - Residential clothes dryer' && asiRow['Quantity'] > 0) {
			updateFee('FB150', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P39 - Gas-Unducted heating appliances, ea' && asiRow['Quantity'] > 0) {
			updateFee('FB151', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P04 - Water Closet 1-5' && asiRow['Quantity'] < 6) {
			updateFee('FB109', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P40 - Lighting unit, log lighter' && asiRow['Quantity'] > 0) {
			updateFee('FB152', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P41 - Floor furnace' && asiRow['Quantity'] > 0) {
			updateFee('FB153', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P42 - Gas Service or Yard Line' && asiRow['Quantity'] > 0) {
			updateFee('FB154', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P43 - Gas refrigerator' && asiRow['Quantity'] > 0) {
			updateFee('FB155', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P05 - Water Closet over 5' && asiRow['Quantity'] < 6) {
			updateFee('FB109', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P06 - Water closet reset' && asiRow['Quantity'] > 0) {
			updateFee('FB110', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P07 - Inspection outside City limit' && asiRow['Quantity'] > 0) {
			updateFee('FB111', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
			removeFee('FB106', 'STANDARD');
		}

		if (asiRow['Fixture Type'] == 'P08 - Re-inspection outside City limits' && asiRow['Quantity'] > 0) {
			updateFee('FB112', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'P09 - Surcharge Outside City Limits' && asiRow['Quantity'] > 0) {
			updateFee('FB113', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
			removeFee('FB106', 'STANDARD');
		}

		if (AInfo['Type of Work'] == 'Residential' && asiRow['Fixture Type'] == 'Event Waived Fee') {
			removeFee('FB106', 'STANDARD');
		}

		if (asiRow['Fixture Type'] == 'Water Heater Over 50 Gallons (Gas), each' && asiRow['Quantity'] > 0) {
			updateFee('FB148', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'Water Heater 50 Gallons or less (Gas), each' && asiRow['Quantity'] > 0) {
			updateFee('FB147', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'Residential Cooking Unit (Gas), per unit' && asiRow['Quantity'] > 0) {
			updateFee('FB146', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

		if (asiRow['Fixture Type'] == 'Containment Backflow-Commercial(EA)' && asiRow['Quantity'] > 0) {
			updateFee('FB128', 'BLDGPLUMB', 'STANDARD', asiRow['Quantity'], invoiceFee, 'N');
		}

	}
	//end replaced branch: ES_BLDGPLUMB_ADDFEES_LOOP;

}
