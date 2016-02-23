
if (AInfo['Park Zone #'] != null && AInfo['Calculated Total Parkland Fees'] > 0 && AInfo['Verified Parkland Fees'] == 'Yes') {

	//start replaced branch: COEP_ADD_PARKS_FEES
	{
		parkzone = AInfo['Park Zone #'];
		amount = AInfo['Calculated Total Parkland Fees'];
		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-1') {
			addFee('FSPD015', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-2') {
			addFee('FSPD016', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-3') {
			addFee('FSPD017', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-4') {
			addFee('FSPD018', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-5') {
			addFee('FSPD019', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-6') {
			addFee('FSPD020', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-7') {
			addFee('FSPD021', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'C-8') {
			addFee('FSPD022', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-1') {
			addFee('FSPD030', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-2') {
			addFee('FSPD031', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-3') {
			addFee('FSPD032', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-4') {
			addFee('FSPD033', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-5') {
			addFee('FSPD034', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-6') {
			addFee('FSPD035', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-7') {
			addFee('FSPD036', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-8') {
			addFee('FSPD037', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-9') {
			addFee('FSPD038', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-10') {
			addFee('FSPD039', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'E-11') {
			addFee('FSPD040', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'MV-1') {
			addFee('FSPD023', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'MV-2') {
			addFee('FSPD024', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'MV-3') {
			addFee('FSPD025', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'MV-4') {
			addFee('FSPD026', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'MV-5') {
			addFee('FSPD027', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'MV-6') {
			addFee('FSPD028', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'MV-7') {
			addFee('FSPD029', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NE-1') {
			addFee('FSPD041', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NE-2') {
			addFee('FSPD042', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NE-3') {
			addFee('FSPD043', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NE-4') {
			addFee('FSPD044', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NE-5') {
			addFee('FSPD045', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NE-6') {
			addFee('FSPD046', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NE-7') {
			addFee('FSPD047', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-1') {
			addFee('FSPD001', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-2') {
			addFee('FSPD002', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-3') {
			addFee('FSPD003', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-4') {
			addFee('FSPD004', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-5') {
			addFee('FSPD005', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-6') {
			addFee('FSPD006', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-7') {
			addFee('FSPD007', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-8') {
			addFee('FSPD008', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-9') {
			addFee('FSPD009', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-10') {
			addFee('FSPD010', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-11') {
			addFee('FSPD011', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-12') {
			addFee('FSPD012', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-13') {
			addFee('FSPD013', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

		if (appMatch('Planning/Subdivision/Subdivision/Combo') && parkzone == 'NW-14') {
			addFee('FSPD014', 'PLNSDSD', 'STANDARD', amount, 'N');
		}

	}
	//end replaced branch: COEP_ADD_PARKS_FEES;
}
