function ES_ADD_LICFIRE_LICTYPE_FEES() {

	if (typeof(APPLICATIONINFO) == 'object') {
		for (eachrow in APPLICATIONINFO)
			//start replaced branch: ES_ADD_LICFIRE_LICTYPE_FEES_LOOP
		{
			licTypeRow = APPLICATIONINFO[eachrow];
			if (licTypeRow['License Type'] == 'Aerosol Products' && !feeExists('FL023')) {
				addFee('FL023', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Aviation Facilities' && !feeExists('FL024')) {
				addFee('FL024', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Battery Systems' && !feeExists('FL025')) {
				addFee('FL025', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Blasting Operations' && !feeExists('FL026')) {
				addFee('FL026', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == "Blaster's License" && !feeExists(' FL027 ')) {
				addFee(' FL027 ', ' LICFIRE ', ' STANDARD ', 1, ' N ');
			}

			if (licTypeRow[' License Type '] == "Blaster's License Renewal" && !feeExists('FL028')) {
				addFee('FL028', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Combustible dust-producting Operations' && !feeExists('FL029')) {
				addFee('FL029', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Combustible Fibers' && !feeExists('FL030')) {
				addFee('FL030', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Compressed Gases' && !feeExists('FL032')) {
				addFee('FL032', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Covered Mall Building' && !feeExists('FL033')) {
				addFee('FL033', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Cryogenic Fluids' && !feeExists('FL034')) {
				addFee('FL034', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Explosives' && !feeExists('FL035')) {
				addFee('FL035', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Flammable Liquids' && !feeExists('FL036')) {
				addFee('FL036', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Floor Finishing' && !feeExists('FL037')) {
				addFee('FL037', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'For-Use Permits' && !feeExists('FL038')) {
				addFee('FL038', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Fruit Ripening' && !feeExists('FL039')) {
				addFee('FL039', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Fumigation' && !feeExists('FL040')) {
				addFee('FL040', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Hazardous Materials' && !feeExists('FL041')) {
				addFee('FL041', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'HPM Facilities' && !feeExists('FL042')) {
				addFee('FL042', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'High Pile Storage' && !feeExists('FL043')) {
				addFee('FL043', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Industrial Ovens' && !feeExists('FL044')) {
				addFee('FL044', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Lumber Yards' && !feeExists('FL045')) {
				addFee('FL045', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Vehicles in Assembly' && !feeExists('FL046')) {
				addFee('FL046', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'LP-Gas' && !feeExists('FL047')) {
				addFee('FL047', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Magnesium' && !feeExists('FL048')) {
				addFee('FL048', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Open Burning' && !feeExists('FL049')) {
				addFee('FL049', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Organic Coatings' && !feeExists('FL050')) {
				addFee('FL050', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Places of Assembly' && !feeExists('FL051')) {
				addFee('FL051', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Private Fire Hydrants' && !feeExists('FL052')) {
				addFee('FL052', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Pryroxylin Plastics' && !feeExists('FL053')) {
				addFee('FL053', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Refrigeration Equipment' && !feeExists('FL054')) {
				addFee('FL054', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Repair Garages' && !feeExists('FL055')) {
				addFee('FL055', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Rooftop Heliports' && !feeExists('FL056')) {
				addFee('FL056', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Spraying/Dipping' && !feeExists('FL057')) {
				addFee('FL057', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Tents and Canopies' && !feeExists('FL059')) {
				addFee('FL059', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Tire Storage' && !feeExists('FL060')) {
				addFee('FL060', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Waste Handling' && !feeExists('FL061')) {
				addFee('FL061', 'LICFIRE', 'STANDARD', 1, 'N');
			}

			if (licTypeRow['License Type'] == 'Wood Products' && !feeExists('FL062')) {
				addFee('FL062', 'LICFIRE', 'STANDARD', 1, 'N');
			}

		}
		//end replaced branch: ES_ADD_LICFIRE_LICTYPE_FEES_LOOP;
	}

}
