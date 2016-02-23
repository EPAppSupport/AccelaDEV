
pCapID = getParent();
comment('Parent CAP ID is: ' + pCapID);
if (pCapID != false) {
	pCapObj = aa.cap.getCap(pCapID).getOutput();
	pGroupType = pCapObj.getCapType().getType();
	pGroupTypeString = pGroupType.toString();
	pSubType = pCapObj.getCapType().getSubType();
	pGroupTypeString = pGroupType.toString();
}

if (pCapID != false && ((pGroupTypeString == '3rd' && pSubTypeString == 'Commercial') || pGroupTypeString == 'Commercial')) {
	editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), pCapID);
}

if (pCapID != false && ((pGroupTypeString == '3rd' && pSubTypeString == 'Commercial') || pGroupTypeString == 'Commercial')) {
	siblingCapID = getChildren('*/*/*/*', pCapID);
}

if (siblingCapID != false && typeof(siblingCapID) == 'object') {
	for (eachchild in siblingCapID)
		//start replaced branch: ES_UPDATE_CHILD_EXPDATE_LOOP
	{
		eachChildCapID = childrenCapID[eachchild];
		if (eachChildCapID != null) {
			editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), eachChildCapID);
		}

		eachSiblingCapID = siblingCapID[eachchild];
		if (eachSiblingCapID != null) {
			editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), eachSiblingCapID);
		}

	}
	//end replaced branch: ES_UPDATE_CHILD_EXPDATE_LOOP;
}

if ((inspResult == 'Fail w ReFee' || inspResult == 'Fail w/Refee')) {

	//start replaced branch: ES_ADD_BLDG_REINSP_FEES
	{
		if (appMatch('Building/Mechanical/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGMECH', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Electrical/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGELEC', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Plumbing/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB158', 'BLDGPLUMB', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Siding/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Reroof/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Fences/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Windows/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Residential/Addition/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'RESADD', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Residential/Alteration/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'RESALT', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Residential/Swimming Pool-Spa/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Commercial/New/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMMNEW', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Commercial/Shell/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMMSHELL', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Commercial/TI/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMMTI', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Commercial/Swimming Pool-Spa/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMMPOOL', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Placement/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Demolition/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Commercial/Addition/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMMADD', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/3rd/Commercial/Addition') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMM3P', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/3rd/Commercial/New') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMMNEW', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/3rd/Commercial/Shell') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMM3P', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/3rd/Commercial/Tenant Improvement') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMM3P', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/3rd/Residential/New') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'RES3RD', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Commercial/Tenant Improvement/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'COMMTI', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Existing Building C of O/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDEBCOO', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Irrigation/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGIRR', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Foundation/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'NOFEE', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Historic/APP/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'NOFEE', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Historic/Project/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'NOFEE', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Historic/BLD/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'NOFEE', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Public Education/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'NOFEE', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Residential/New/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'RESNEW', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Right of Way/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB046', 'BLDGROW', 'STANDARD', 1, 'N');
			invoiceFee('FB046', 'STANDARD');
		}

		if (appMatch('Building/Shared Parking/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'NOFEE', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Retaining Walls/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Temporary Placement/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Temporary Amusement/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Tents/NA/NA') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Residential/Accessory Structure/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'RESACC', 'STANDARD', 1, 'N');
			invoiceFee('FB082', 'STANDARD');
		}

		if (appMatch('Building/Weatherization/*/*') && (inspResult == 'Fail w ReFee' || inspResult == 'Fail w/Refee')) {
			addFee('FB500', 'WEATHERIZATION', 'STANDARD', 1, 'Y');
		}

		if (matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FF004', 'FIRESUP', 'STANDARD', 1, 'Y');
		}

	}
	//end replaced branch: ES_ADD_BLDG_REINSP_FEES;
}

// TODO: branch doesn't exist (disabled standard choice)
/*
branch('ES_IRSA_BLDG_FEES');
 */

//start replaced branch: ES_BLDG_INSPRESULTSUBMITAFTER
{
	inspCode = inspType.substr(0, 3);
	if (appMatch('Building/Tents/*/*') && isTaskActive('Inspection') && (checkInspectionResult('400 Fire Department Final', 'Pass') && checkInspectionResult('800 Final Building Inspection', 'Pass'))) {
		showMessage = true;
		comment('Inspections are present and have passed!');
		branchTask('Inspection', 'Pass', 'Updated via Event Script');
	}

}
//end replaced branch: ES_BLDG_INSPRESULTSUBMITAFTER;
if ((inspType == '300 Elec Temporary Service' || inspType == '310 Electrical Service Release' || inspType == '300 Temporary Service Inspection' || inspType == '370 Electrical Service Change Inspection') && inspResult == 'Pass') {
	email('Laurie.Fleming@epelectric.com;Rosa.Nigro@epelectric.com;Yara.Diaz@epelectric.com;Ivonne.Escriche@epelectric.com', 'accela@elpasotexas.gov', ('The ' + inspType + ' has passed for permit # ' + capIDString), ('The ' + inspType + ' has passed for permit # ' + capIDString));
}

if (inspType == '740 Plumbing Final Inspection' && inspResult == 'Pass') {

	//start replaced branch: ES_BUILDING_PLUMBING_EMAIL_ONEGAS_NOTIFICATION
	{
		addrResult = aa.address.getAddressByCapId(myCap);
		addrArray = new Array();
		addrArray = addrResult.getOutput();
		capStreetNumber = addrArray[0].getHouseNumberStart();
		capStreetName = addrArray[0].getStreetName();
		email('RVALDEZ@onegas.com;carolyn.sanford@onegas.com;julie.villarreal@onegas.com;slimgas-austinmetro@onegas.com;slimgas-metroelpaso@onegas.com', 'accela@elpasotexas.gov', ('The ' + inspType + ' has passed for permit # ' + capIDString + ' at address ' + capStreetNumber + ' ' + capStreetName), ('The ' + inspType + ' has passed for permit # ' + capIDString + ' at address ' + capStreetNumber + ' ' + capStreetName));

	}
	//end replaced branch: ES_BUILDING_PLUMBING_EMAIL_ONEGAS_NOTIFICATION;
}

if (publicUser && (inspResult == 'Fail w ReFee' || inspResult == 'Fail w/Refee')) {

	//start replaced branch: ES_ADD_BLDG_REINSP_FEES_ACA
	{
		if (appMatch('Building/Mechanical/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGMECH', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Electrical/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGELEC', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Plumbing/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB158', 'BLDGPLUMB', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Siding/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Reroof/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Fences/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/Windows/*/*') && !matches(inspType, '400 Fire Department Final', '475 Fire Suppression', '480 Fire Alarm', '485 Fire Sprinkler', '490 Fire Pump Test', '495 Fire Hydrant')) {
			addFee('FB082', 'BLDGGEN', 'STANDARD', 1, 'Y');
			addTechnologyFeeForReInspectionFee();
		}

		if (appMatch('Building/After Hours Construction/NA/NA')) {
			addFee('TF001A', 'AFTERHOURSPERMIT', 'STANDARD', 1, 'N');
			appMatch('Building/Commercial/Completion/NA');
		} else {
			addFee('TF001A', 'BCCOMP', 'STANDARD', 1, 'N');
			appMatch('Building/Existing Building C of O/NA/NA');
		}

		if (appMatch('Building/3rd/Demolition/NA')) {
			addFee('TF001A', 'BLDGGEN', 'STANDARD', 1, 'N');
			appMatch('Building/3rd/Retaining Walls/NA');
		} else {
			addFee('TF001A', 'BLDGGEN', 'STANDARD', 1, 'N');
			appMatch('Building/Demolition/NA/NA');
		}

		if (appMatch('Building/Irrigation/NA/NA')) {
			addFee('TF001A', 'BLDGIRR', 'STANDARD', 1, 'N');
			appMatch('Building/3rd/Mechanical/NA');
		} else {
			addFee('TF001A', 'BLDGMECH', 'STANDARD', 1, 'N');
			appMatch('Building/Mechanical/Completion/NA');
		}

		if (appMatch('Building/Solar Panel/NA/NA')) {
			addFee('TF001A', 'BLDGSOLAR', 'STANDARD', 1, 'N');
			appMatch('Building/Tents/NA/NA');
		} else {
			addFee('TF001A', 'BLDGTENT', 'STANDARD', 1, 'N');
			appMatch('Building/Temporary Amusement/NA/NA');
		}

		if (appMatch('Building/Commercial/New/NA')) {
			addFee('TF001A', 'COMMNEW', 'STANDARD', 1, 'N');
			appMatch('Building/Mixed Use/NA/NA');

		} else {
			addFee('TF001A', 'COMMNEW', 'STANDARD', 1, 'N');
			appMatch('Building/Commercial/Swimming Pool-Spa/NA');
		}

		if (appMatch('Building/Land Development/SWP3/Construction')) {
			addFee('TF001A', 'PLNSWP3', 'STANDARD', 1, 'N');
			appMatch('Building/Land Development/SWP3/Dewatering');
		} else {
			addFee('TF001A', 'PLNSWP3', 'STANDARD', 1, 'N');
			appMatch('Building/Land Development/SWP3/Industrial');
		}

		if (appMatch('Building/Residential/New/NA')) {
			addFee('TF001A', 'RESNEW', 'STANDARD', 1, 'N');
			appMatch('Building/3rd/Solar/NA');
		} else {
			addFee('TF001A', 'SOLARTHIRD', 'STANDARD', 1, 'N');
		}

	}
	//end replaced branch: ES_ADD_BLDG_REINSP_FEES_ACA;
}
