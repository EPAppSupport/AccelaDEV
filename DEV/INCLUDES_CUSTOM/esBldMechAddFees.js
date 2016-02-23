function esBldMechAddFees() {

	if (AInfo['GENERAL.Type of Work'] != 'New Residential') {
		addFee('FB084', 'BLDGMECH', 'STANDARD', 1, 'N');
	}

	if (typeof(MECHANICALEQUIPMENT) == 'object') {
		for (eachrow in MECHANICALEQUIPMENT)
			//start replaced branch: ES_BLDGMECH_ADDFEES_LOOP
		{
			asiRow = MECHANICALEQUIPMENT[eachrow];
			showMessage = true;
			comment(asiRow['Fixture Type']);
			if (asiRow['Fixture Type'] == 'M10 - Perimeter convectors, per linear foot' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB091', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M11 - Cooling tower' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB092', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M12 - Power units: icemakers, walk-in coolers, reach-in coolers,etc., ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB093', 'BLDGMECH', 'STANDARD', (asiRow['Units'] * 24.38) + (6.36 * asiRow['Quantity/Tons']), 'Y');
			}

			if (asiRow['Fixture Type'] == 'M13 - Icemakers not a portion of heating and cooling system no tons' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB110', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M14 - Condensate Drains' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB095', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M15 - Solar Systems (excluding duct work)' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB096', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M16 - Collectors' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB097', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M17 - Hood and/or exhaust fan, duct: Residential' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB098', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M18 - Hood and/or exhaust fan, duct: Non-Residential' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB099', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M19 - Restroom exhaust fan and/or duct/Dryer Vent: Residential' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB100', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M02 - Boiler: 5 horsepower or less, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB111', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M20 - Restroom exhaust fan and/or duct/Dryer Vent: Non-Residential' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB101', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M21 - Fire dampers, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB102', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M22 - Humidifiers, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB103', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M23 - Ducts: 1-10 openings' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB104', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M24 - Ducts: 11-20 openings' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB113', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M25 - Ducts: 21-30 openings' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB114', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M26 - Ducts: over 30 openings' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB115', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M03 - Boiler Horsepower additional over 5, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB112', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M04 - Each evaporative cooler' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB085', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M05 - Each force air or gravity heater or furnace' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB086', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M06 - Non-ducted heating appliances; wall, space, unit infrared heaters, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB087', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M07 - Combination heating-cooling unit or refrigeration unit, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB088', 'BLDGMECH', 'STANDARD', (asiRow['Units'] * 46.64) + (6.36 * asiRow['Quantity/Tons']), 'Y');
			}

			if (asiRow['Fixture Type'] == 'M08 - Heat exchanger, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB089', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

			if (asiRow['Fixture Type'] == 'M09 - Air handlers and mixing boxes, ea' && asiRow['Quantity/Tons'] > 0) {
				updateFee('FB090', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
			}

		}
		//end replaced branch: ES_BLDGMECH_ADDFEES_LOOP;
	}

}
