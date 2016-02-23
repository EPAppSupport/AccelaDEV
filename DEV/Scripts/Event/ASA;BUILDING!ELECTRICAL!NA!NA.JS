
if (AInfo['Type of Work'] == 'Elec Permit B') {

	//start replaced branch: COEP_BLDG_ELEC_ADDASIT
	{
		addRowArray1 = new Array;
		addRowArray1['Equipment Type'] = '';
		addRowArray1['Fixture Type'] = '';
		addRowArray1['Quantity'] = '';
		addRowArray1['Units'] = '';
		addRowArray1['Notes'] = '';
		addRowArray1['Alt Id'] = '';
		if (typeof(ELECTRICALEQUIPMENT) != 'object') {
			addToASITable('ELECTRICAL EQUIPMENT', addRowArray1);
		}

	}
	//end replaced branch: COEP_BLDG_ELEC_ADDASIT;
}

addRowArray1 = new Array;
addRowArray1['Equipment Type'] = '';
addRowArray1['Fixture Type'] = '';
addRowArray1['Quantity/Tons'] = '';
addRowArray1['Units'] = '';
addRowArray1['Notes'] = '';
addRowArray1['Alt Id'] = '';
if (ELECTRICALEQUIPMENT.length < 1) {
	addToASITable('ELECTRICAL EQUIPMENT', addRowArray1);
}

parentRecordID = AInfo['Building Permit Number'];
resNew = false;
resAdditionOrAlteration = false;
resCommercial = false;
if (publicUser && matches(parentRecordID, '', null)) {
	updateFee('FB051', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
}

if (publicUser && matches(parentRecordID, '', null) && typeof(ELECTRICALEQUIPMENT) == 'object') {
	for (eachrow in ELECTRICALEQUIPMENT)
		//start replaced branch: ES_BLDGELEC_ADDFEES_LOOP
	{
		asiRow = ELECTRICALEQUIPMENT[eachrow];
		if (asiRow['Fixture Type'] == 'E02 - Service Entrance - Temporary, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB052', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E05 - Outlets 1 to 20 ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB055', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E06 - Outlets 21 to 40 ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB090', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E07 - Outlets Over 40 ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB091', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E08 - Fixtures 1 to 20 ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB056', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E09 - Fixtures 21 to 40 ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB092', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E10 - Fixtures Over 40 ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB093', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E11 - Range, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB057', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'Y');
		}

		if (asiRow['Fixture Type'] == 'E12 - Dryer, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB058', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E13 - Water heater, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB059', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E14 - Furnace, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB060', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E15 - Dishwater, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB061', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E16 - Garbage disposal, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB062', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E17 - Trash compactor, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB063', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E18 - Bathroom heater, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB064', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E19 - Evaporative cooler, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB065', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E20 - Refrigerated air conditioner, per ton' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB066', 'BLDGELEC', 'STANDARD', (asiRow['Quantity/Tons'] * asiRow['Units']), 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E21 - Transformer type welder, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB067', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E22 - X-ray machine, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB068', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E23 - Fractional motor 1-10 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB069', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
		}

		if (asiRow['Fixture Type'] == 'E24 - Fractional motor over 10 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB085', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
		}

		if (asiRow['Fixture Type'] == 'E25 - Motor 1 to 20 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB070', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
		}

		if (asiRow['Fixture Type'] == 'E26 - Motor over 20 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB086', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
		}

		if (asiRow['Fixture Type'] == 'E27 - Line work, per pole' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB071', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E28 - Streamer lights, per circuit' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB072', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E29 - Feed rail and bus way, per linear foot' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB073', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E30 - Under floor duct or cellular raceway per linear foot' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB074', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E31 - Power or lighting transformer per k.v.a.' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB075', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E32 - Mobile home' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB076', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E33 - T.V. Outlets-Base Fee' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB077', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E35 - Swimming pool; hot-tub; spa; jacuzzi; ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB078', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E36 - Temporary installation such as carnivals, show windows, conventions, etc., ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB079', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E37 - Generators' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB080', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E38 - Others not covered' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB081', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E40 - Solar heating systems' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB087', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

		if (asiRow['Fixture Type'] == 'E41 - Solar panels, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB088', 'BLDGELEC', 'STANDARD', asiRow['Quantity/Tons'], 'Y', 'N');
		}

	}
	//end replaced branch: ES_BLDGELEC_ADDFEES_LOOP;
}

if (publicUser && matches(parentRecordID, '', null)) {
	updateFee('TF001', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
}

if (publicUser && !matches(parentRecordID, '', null)) {
	pCapId = aa.cap.getCapID(parentRecordID).getOutput();
	pCap = aa.cap.getCap(pCapId).getOutput();
	pAppTypeResult = pCap.getCapType();
	pAppTypeString = pAppTypeResult.toString();
	pAppTypeArray = pAppTypeString.split('/');
}

if (publicUser && !matches(parentRecordID, '', null)) {
	if (pAppTypeArray[0] == 'Building' && pAppTypeArray[1] == 'Residential' && pAppTypeArray[2] == 'New')
		resNew = true;
	if (pAppTypeArray[0] == 'Building' && pAppTypeArray[1] == 'Residential' && (pAppTypeArray[2] == 'Addition' || pAppTypeArray[2] == 'Alteration'))
		resAdditionOrAlteration = true;
	if (pAppTypeArray[0] == 'Building' && pAppTypeArray[1] == 'Commercial')
		resCommercial = true;
}

if (resNew) {
	holdId = capId;
	capId = pCapId;
	resNewFeeAmount = feeAmount('FB028', 'INVOICED');
	capId = holdId;
	if (resNewFeeAmount > 0)
		updateFee('FRN001', 'BLDGELEC', 'STANDARD', resNewFeeAmount, 'Y', 'N');
	updateFee('TF001', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
}

if (resAdditionOrAlteration) {
	updateFee('FB051', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
	updateFee('TF001', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
}

if (resCommercial) {
	holdId = capId;
	capId = pCapId;
	var addInfo = aa.cap.getBValuatn4AddtInfo(capId).getOutput();
	var parValuation = addInfo.getEstimatedValue();
	capId = holdId;
	if (parValuation > 0)
		updateFee('FB050', 'BLDGELEC', 'STANDARD', parValuation, 'N', 'N');
	updateFee('TF001', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
}

if (publicUser && !matches(parentRecordID, '', null) && !resNew && !resAdditionOrAlteration && !resCommercial) {
	updateFee('FB051', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
	updateFee('TF001', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGELEC', 'STANDARD', 1, 'Y', 'N');
}
