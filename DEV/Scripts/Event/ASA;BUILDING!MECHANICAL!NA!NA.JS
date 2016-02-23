

//start replaced branch: COEP_BLDG_MECH_ADDASIT
{
	addRowArray1 = new Array;
	addRowArray1['Equipment Type'] = '';
	addRowArray1['Fixture Type'] = '';
	addRowArray1['Quantity'] = '';
	addRowArray1['Units'] = '';
	addRowArray1['Notes'] = '';
	if (typeof(MECHANICALEQUIPMENT) != 'object') {
		addToASITable('MECHANICAL EQUIPMENT', addRowArray1);
	}

}
//end replaced branch: COEP_BLDG_MECH_ADDASIT;
if (AInfo['Refrigerated Air'] == 'Yes') {

	//start replaced branch: COEP_SERVICEREQUEST_REF_AIR
	{
		var subject = ('Record ( ' + capIDString + ')  has a ' + AInfo['Refrigerated Air Type'] + ' Refrigeration Air Type');
		var bodyText = '  You are requested to retrieve and review the record when a record with New or Conversion Refrigerated Air Type is created.  You can view specific permit data by inserting the record number at this address:  http://aca.elpasotexas.gov/CitizenAccess/  <BR><BR>  If you believe you should not get this email, contact Suzy Santo at santosx@elpasotexas.gov.';
		email('Leslie.chagnon@epelectric.com;Richard.delafuente@epelectric.com', 'accela@elpasotexas.gov', subject, bodyText);

	}
	//end replaced branch: COEP_SERVICEREQUEST_REF_AIR;
}

addRowArray1 = new Array;
addRowArray1['Equipment Type'] = '';
addRowArray1['Fixture Type'] = '';
addRowArray1['Quantity/Tons'] = '';
addRowArray1['Units'] = '';
addRowArray1['Notes'] = '';
addRowArray1['Alt Id'] = '';
if (MECHANICALEQUIPMENT.length < 1) {
	addToASITable('MECHANICAL EQUIPMENT', addRowArray1);
}

parentRecordID = AInfo['Building Permit Number'];
resNew = false;
resAdditionOrAlteration = false;
resCommercial = false;
if (publicUser && matches(parentRecordID, '', null)) {
	updateFee('FB084', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
}

if (publicUser && matches(parentRecordID, '', null) && typeof(MECHANICALEQUIPMENT) == 'object') {
	for (eachrow in MECHANICALEQUIPMENT)
		//start replaced branch: ES_BLDGMECH_ADDFEES_LOOP
	{
		asiRow = MECHANICALEQUIPMENT[eachrow];
		showMessage = true;
		comment(asiRow['Fixture Type']);
		if (asiRow['Fixture Type'] == 'M02 - Boiler: 5 horsepower or less, ea' && asiRow['Quantity/Tons'] > 0) {
			updateFee('FB111', 'BLDGMECH', 'STANDARD', asiRow['Quantity/Tons'], 'Y');
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

	}
	//end replaced branch: ES_BLDGMECH_ADDFEES_LOOP;
}

if (publicUser && matches(parentRecordID, '', null)) {
	updateFee('TF001', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
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
		updateFee('FRN001', 'BLDGMECH', 'STANDARD', resNewFeeAmount, 'Y', 'N');
	updateFee('TF001', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
}

if (resAdditionOrAlteration || resCommercial) {
	updateFee('FB084', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
	updateFee('TF001', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
	updateFee('CC003', 'BLDGMECH', 'STANDARD', 1, 'Y', 'N');
}
