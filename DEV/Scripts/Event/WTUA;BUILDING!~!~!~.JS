
if (wfStatus != 'Approved per BPI Director') {
	inspResult = null;
	
//start replaced branch: ES_BUILDING_FEES
 {
if (appMatch('Building/Right of Way/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['ROW'] == 'Sidewalk') {
	addFee('FB045','BLDGROW','STANDARD',1,'N');
	}

if (appMatch('Building/Right of Way/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['ROW'] == 'Driveway') {
	addFee('FB047','BLDGROW','STANDARD',1,'N');
	}

if (appMatch('Building/Mechanical/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['PROJECTDOX.CRC Directive'] != 'Yes') {
	
//start replaced branch: ES_BLDGMECH_ADDFEES
 {
if (AInfo['GENERAL.Type of Work'] != 'New Residential') {
	addFee('FB084','BLDGMECH','STANDARD',1,'N');
	}

if (typeof(MECHANICALEQUIPMENT) == 'object') {
	for (eachrow in MECHANICALEQUIPMENT) 
//start replaced branch: ES_BLDGMECH_ADDFEES_LOOP
 {
asiRow = MECHANICALEQUIPMENT[eachrow];
showMessage=true;
comment(asiRow['Fixture Type'] );
if (asiRow['Fixture Type'] == 'M02 - Boiler: 5 horsepower or less, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB111','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M03 - Boiler Horsepower additional over 5, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB112','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M04 - Each evaporative cooler' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB085','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M05 - Each force air or gravity heater or furnace' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB086','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M06 - Non-ducted heating appliances; wall, space, unit infrared heaters, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB087','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M07 - Combination heating-cooling unit or refrigeration unit, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB088','BLDGMECH','STANDARD',(asiRow['Units'] * 46.64) + (6.36 * asiRow['Quantity/Tons']),'Y');
	}

if (asiRow['Fixture Type'] == 'M08 - Heat exchanger, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB089','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M09 - Air handlers and mixing boxes, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB090','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M10 - Perimeter convectors, per linear foot' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB091','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M11 - Cooling tower' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB092','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M12 - Power units: icemakers, walk-in coolers, reach-in coolers,etc., ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB093','BLDGMECH','STANDARD',(asiRow['Units'] * 24.38) + (6.36 * asiRow['Quantity/Tons']),'Y');
	}

if (asiRow['Fixture Type'] == 'M13 - Icemakers not a portion of heating and cooling system no tons' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB110','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M14 - Condensate Drains' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB095','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M15 - Solar Systems (excluding duct work)' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB096','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M16 - Collectors' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB097','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M17 - Hood and/or exhaust fan, duct: Residential' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB098','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M18 - Hood and/or exhaust fan, duct: Non-Residential' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB099','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M19 - Restroom exhaust fan and/or duct/Dryer Vent: Residential' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB100','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M20 - Restroom exhaust fan and/or duct/Dryer Vent: Non-Residential' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB101','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M21 - Fire dampers, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB102','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M22 - Humidifiers, ea' && asiRow['Quantity/Tons'] > 0) {

	updateFee('FB103','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M23 - Ducts: 1-10 openings' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB104','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M24 - Ducts: 11-20 openings' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB113','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M25 - Ducts: 21-30 openings' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB114','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'M26 - Ducts: over 30 openings' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB115','BLDGMECH','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

}
//end replaced branch: ES_BLDGMECH_ADDFEES_LOOP;
	}

}
//end replaced branch: ES_BLDGMECH_ADDFEES;
	}

if (appMatch('Building/Plumbing/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['PROJECTDOX.CRC Directive'] != 'Yes' && AInfo['GENERAL.Type of Work'] != 'New Residential') {
	addFee('FB106','BLDGPLUMB','STANDARD',1,'N');
	
//replaced branch(ES_BLDGPLUMB_ADDFEES)
ES_BLDGPLUMB_ADDFEES();
	}

if (appMatch('Building/Reroof/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
	addFee('FB160','BLDGGEN','STANDARD',1,'Y');
	}

if (appMatch('Building/Demolition/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	addFee('FB161','BLDGGEN','STANDARD',1,'Y');
	}

if ((appMatch('Building/Residential/Swimming Pool-Spa/NA') || appMatch('Building/Retaining Walls/NA/NA')) && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	addFee('FB039','BLDGGEN','STANDARD',1,'N');
	}

if (appMatch('Building/Irrigation/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of Use'] == 'Commercial') {
	
//start replaced branch: ES_BLDGIRR_ADDFEES
 {
if (AInfo['Type of Use'] == 'Commercial') {
	addFee('FB095','BLDGIRR','STANDARD',1,'Y');
	}

if (AInfo['Type of Use'] == 'Residential') {
	addFee('FB090','BLDGIRR','STANDARD',1,'Y');
	}

if (typeof(IRRIGATIONFIXTURES) == 'object') {
	for (eachrow in IRRIGATIONFIXTURES) 
//start replaced branch: ES_BLDGIRR_ADDFEES_LOOP
 {
asiRow = IRRIGATIONFIXTURES[eachrow];
if (asiRow['Fixture Type'] == 'Backflow Devices' && asiRow['Quantity'] > 0) {
	addFee('FB131','BLDGIRR','STANDARD',asiRow['Quantity'],'Y');
	}

if (asiRow['Fixture Type'] == 'Bubblers' && asiRow['Quantity'] > 0) {
	addFee('FB134','BLDGIRR','STANDARD',asiRow['Quantity'],'Y');
	}

if (asiRow['Fixture Type'] == 'Control Valves' && asiRow['Quantity'] > 0) {
	addFee('FB130','BLDGIRR','STANDARD',asiRow['Quantity'],'Y');
	}

if (asiRow['Fixture Type'] == 'Drips' && asiRow['Quantity'] > 0) {
	addFee('FB133','BLDGIRR','STANDARD',asiRow['Quantity'],'Y');
	}

if (asiRow['Fixture Type'] == 'Sprinkler Heads' && asiRow['Quantity'] > 0) {
	addFee('FB132','BLDGIRR','STANDARD',asiRow['Quantity'],'Y');
	}

if (asiRow['Fixture Type'] == 'Sub Subsurface (Per Sq Yards)' && asiRow['Quantity'] > 0) {
	addFee('FB135','BLDGIRR','STANDARD',asiRow['Quantity'],'Y');
	}

}
//end replaced branch: ES_BLDGIRR_ADDFEES_LOOP;
	}

}
//end replaced branch: ES_BLDGIRR_ADDFEES;
	}

if (appMatch('Building/Siding/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
	addFee('FB038','BLDGGEN','STANDARD',1,'Y');
	}

if (appMatch('Building/Electrical/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of Work'] == 'Elec Permit A') {
	updateFee('FB050','BLDGELEC', 'STANDARD',estValue,'N','N');
	}

if (appMatch('Building/Electrical/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Type of Work'] == 'Elec Permit B') {
	
//start replaced branch: ES_BLDGELEC_ADDFEES
 {
if (AInfo['Type of Work'] != 'New Residential') {
	updateFee('FB051','BLDGELEC','STANDARD',1,'N','N');
	removeFee('FB069','STANDARD');
	removeFee('FB070','STANDARD');
	}

if (typeof(ELECTRICALEQUIPMENT) == 'object') {
	for (eachrow in ELECTRICALEQUIPMENT) 
//start replaced branch: ES_BLDGELEC_ADDFEES_LOOP
 {
asiRow = ELECTRICALEQUIPMENT[eachrow];
if (asiRow['Fixture Type'] == 'E02 - Service Entrance - Temporary, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB052','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E05 - Outlets 1 to 20 ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB055','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E06 - Outlets 21 to 40 ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB090','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E07 - Outlets Over 40 ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB091','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E08 - Fixtures 1 to 20 ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB056','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E09 - Fixtures 21 to 40 ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB092','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E10 - Fixtures Over 40 ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB093','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E11 - Range, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB057','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','Y');
	}

if (asiRow['Fixture Type'] == 'E12 - Dryer, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB058','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E13 - Water heater, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB059','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E14 - Furnace, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB060','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E15 - Dishwater, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB061','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E16 - Garbage disposal, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB062','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E17 - Trash compactor, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB063','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E18 - Bathroom heater, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB064','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E19 - Evaporative cooler, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB065','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E20 - Refrigerated air conditioner, per ton' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB066','BLDGELEC','STANDARD',(asiRow['Quantity/Tons'] * asiRow['Units']) ,'Y','N');
	}

if (asiRow['Fixture Type'] == 'E21 - Transformer type welder, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB067','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E22 - X-ray machine, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB068','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E23 - Fractional motor 1-10 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB069','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'E24 - Fractional motor over 10 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB085','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'E25 - Motor 1 to 20 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB070','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'E26 - Motor over 20 H.P. ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB086','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y');
	}

if (asiRow['Fixture Type'] == 'E27 - Line work, per pole' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB071','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E28 - Streamer lights, per circuit' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB072','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E29 - Feed rail and bus way, per linear foot' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB073','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E30 - Under floor duct or cellular raceway per linear foot' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB074','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E31 - Power or lighting transformer per k.v.a.' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB075','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E32 - Mobile home' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB076','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E33 - T.V. Outlets-Base Fee' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB077','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E35 - Swimming pool; hot-tub; spa; jacuzzi; ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB078','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E36 - Temporary installation such as carnivals, show windows, conventions, etc., ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB079','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E37 - Generators' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB080','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E38 - Others not covered' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB081','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E40 - Solar heating systems' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB087','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

if (asiRow['Fixture Type'] == 'E41 - Solar panels, ea' && asiRow['Quantity/Tons'] > 0) {
	updateFee('FB088','BLDGELEC','STANDARD',asiRow['Quantity/Tons'],'Y','N');
	}

}
//end replaced branch: ES_BLDGELEC_ADDFEES_LOOP;
	}

}
//end replaced branch: ES_BLDGELEC_ADDFEES;
	}

if (appMatch('Building/Windows/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	addFee('FB038','BLDGGEN','STANDARD',1,'Y');
	}

if (appMatch('Building/Tents/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	addFee('FB004','BLDGTENT','STANDARD',(AInfo['Number of Months'] * AInfo['Sq Ft of Structure']),'Y');
	}

if (appMatch('Building/Right of Way/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue' && AInfo['ROW'] == 'Sidewalk/Driveway') {
	addFee('FB045A','BLDGROW','STANDARD',1,'N');
	}

if (appMatch('Building/Temporary Amusement/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
	addFee('FB166','BLDGTMPAMUS','STANDARD',AInfo['No. of Rides']*AInfo['No. of Months Operating'],'N');
	}

if (appMatch('Building/Commercial/Tenant Improvement/NA') && !feeExists('PRMT') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	addFee('FB012','COMMTI','STANDARD',1,'N');
	}

if ((appMatch('Building/Residential/New/NA') || appMatch('Building/3rd/Residential/New')) && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	
//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES
 {
totalSqFt = 0;
if (typeof(BUILDINGINFORMATION) == 'object') {
	for (eachrow in BUILDINGINFORMATION) 
//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP
 {
sqftRow = BUILDINGINFORMATION[eachrow];
totalSqFt = totalSqFt + parseFloat(sqftRow['Total Adjusted Sq Ft']);

}
//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP;
	}

if (totalSqFt >= 1) {
	updateFee('FB028','RESNEW','STANDARD',1,'N');
	}

}
//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES;
	}

if (appMatch('Building/3RD/Residentail/New') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	
//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES
 {
totalSqFt = 0;
if (typeof(BUILDINGINFORMATION) == 'object') {
	for (eachrow in BUILDINGINFORMATION) 
//start replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP
 {
sqftRow = BUILDINGINFORMATION[eachrow];
totalSqFt = totalSqFt + parseFloat(sqftRow['Total Adjusted Sq Ft']);

}
//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES_LOOP;
	}

if (totalSqFt >= 1) {
	updateFee('FB028','RESNEW','STANDARD',1,'N');
	}

}
//end replaced branch: ES_BLDG_RES_SQFT_ADDFEES;
	}

if (appMatch('Building/Fences/NA/NA') && wfTask == 'Completeness Check' && wfStatus == 'Ready to Issue') {
	addFee('FB038','RES3RD','STANDARD',1,'N');
	invoiceFee('FB038','STANDARD');
	}

}
//end replaced branch: ES_BUILDING_FEES;
	}

if (wfTask == 'Task Assignment' && matches(wfStatus, 'Assign Electronic Review', 'Assign Paper Review')) {
	logDebug('Call function autoRouteReviews(E, Y, ALL BLDG)');
	autoRouteReviews('E', 'Y', 'ALL BLDG');
	}

if (wfTask == 'Issue' && wfStatus == 'Issued') {
	
//replaced branch(ES_UPDATE_EXP_DATE)
ES_UPDATE_EXP_DATE();
	}

if (wfTask == 'Issue' && wfStatus == 'Issued') {
	
//start replaced branch: ES_PRINT_BLDG
 {
var reportName = 'No Report';
if (appMatch('Building/3rd/Commercial/Addition')) {
	var reportName = '3rd Commercial Addition';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/3rd/Commercial/New')) {
	var reportName = '3rd Commercial New';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/3rd/Commercial/Shell')) {
	var reportName = '3rd Commercial Shell';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/3rd/Commercial/Tenant Improvement')) {
	var reportName = '3rd Commercial Tenant Improvement';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/3rd/Residential/Accessory Structure')) {
	var reportName = '3rd Residential Accessory Structure';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/3rd/Residential/Addition')) {
	var reportName = '3rd Residential Addition';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/3rd/Residential/Alteration')) {
	var reportName = '3rd Residential Alteration';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Existing Building C of O/NA/NA')) {
	var reportName = 'Certificate of Occupancy';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Commercial/Addition/NA')) {
	var reportName = 'Commercial Addition';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Commercial/New/NA')) {
	var reportName = 'Commerical New';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Commercial/Shell/NA')) {
	var reportName = 'Commercial Shell';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Commercial/Swimming Pool-Spa/NA')) {
	var reportName = 'Commercial Swimming Pool - Spa';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Commercial/Tenant Improvement/NA')) {
	var reportName = 'Commercial Tenant Improvement';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Demolition/NA/NA')) {
	var reportName = 'Demolition';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Electrical/NA/NA')) {
	var reportName = 'Electrical';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Fences/NA/NA')) {
	var reportName = 'Fence';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Foundation/NA/NA')) {
	var reportName = 'Foundation';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Irrigation/NA/NA')) {
	var reportName = 'Irrigation';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Mechanical/NA/NA')) {
	var reportName = 'Mechanical';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Placement/NA/NA')) {
	var reportName = 'Placement';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Plumbing/NA/NA')) {
	var reportName = 'Plumbing';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Reroof/NA/NA')) {
	var reportName = 'Reroof';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Residential/Accessory Structure/NA')) {
	var reportName = 'Residential Accessory Structure';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Residential/Addition/NA')) {
	var reportName = 'Residential Addition';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Residential/Alteration/NA')) {
	var reportName = 'Residential Alteration';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Residential/New/NA')) {
	var reportName = 'Residential New';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Residential/Swimming Pool-Spa/NA')) {
	var reportName = 'Residential Swimming Pool-Spa';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Retaining Walls/NA/NA')) {
	var reportName = 'Retaining Wall';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Right of Way/NA/NA')) {
	var reportName = 'Right of Way';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Shared Parking/NA/NA')) {
	var reportName = 'Shared Parking';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Siding/NA/NA')) {
	var reportName = 'Siding';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Temporary Amusement/NA/NA')) {
	var reportName = 'Temporary Amusement';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Temporary Placement/NA/NA')) {
	var reportName = 'Temporary Placement';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Tents/NA/NA')) {
	var reportName = 'Tent';
	comment('Report Name = '+reportName);
	}

if (appMatch('Building/Windows/NA/NA')) {
	var reportName = 'Windows';
	comment('Report Name = '+reportName);
	}

if (reportName != 'No Report') {
	var bReport=false;
	var user='admin';
	report = aa.reportManager.getReportModelByName(reportName);
	report = report.getOutput();
	var permit = aa.reportManager.hasPermission(reportName,user);
	if(permit.getOutput().booleanValue()) bReport=true;
	var parameters = aa.util.newHashMap();
	if( bReport ) var msg = aa.reportManager.runReport(parameters,report);
	showMessage=true;
	if( bReport) aa.env.setValue('ScriptReturnCode', '0');
	if( bReport) aa.env.setValue('ScriptReturnMessage', msg.getOutput() );
	}

}
//end replaced branch: ES_PRINT_BLDG;
	}


//replaced branch(ES_WORKFLOWTASKUPDATEAFTER_ALL)
ES_WORKFLOWTASKUPDATEAFTER_ALL();

//start replaced branch: ES_BLDG_WFTASKUPDATEAFTER
 {
var CapAddress = getCapAddress(capId);
if ((appMatch('Building/3rd/*/*') || appMatch('Building/Residential/*/*') || appMatch('Building/Commercial/*/*')) && wfTask=='Completeness Check' && wfStatus=='Resubmitted' && getTaskCnt(capId, 'Completeness Check','Resubmitted') == 4) {
	addFee('FPR001', 'COMMNEW', 'STANDARD', 1,'N');
	}

if (appMatch('Building/Commercial/*/*') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && AInfo['Grease Trap']=='Yes') {
	email('sgalindo@epwu.org;
	Nenye@epwu.org','accela@elpasotexas.gov',('Record ' + capIDString + ' has been updated.'), ('Grease Traps are required for Business/Project: ' + capName + '.  The business address is ' + CapAddress + '.  If an EPWU Registration number was provided, the number is ' + AInfo['EPWU Registration']));
	}

if (wfTask == 'Task Assignment' && wfStatus == 'Assign Electronic Review') {
	
//start replaced branch: ES_BLDG_ASSIGN_NOTIFICATIONS
 {
comment('im at ES_BLDG_ASSIGN_NOTIFICATIONS');

}
//end replaced branch: ES_BLDG_ASSIGN_NOTIFICATIONS;
	}

}
//end replaced branch: ES_BLDG_WFTASKUPDATEAFTER;

//start replaced branch: WF_CREATE_BAUD_10TH_PLAN
 {
if (((appMatch('Building/Residential/New/NA') || appMatch('Building/3rd/Residential/New') || appMatch('Building/Commercial/New/NA'))  && wfTask == 'Issue'  && wfStatus == 'Issued' && getAssignedToStaff() != null)) {
	userRecordAudit();
	}

}
//end replaced branch: WF_CREATE_BAUD_10TH_PLAN;
if ((wfTask == 'Close' && wfStatus == 'Closed')) {
	addLockConditionToRecord(capId,'Record','Closed Condition','No changes allowed if Close task is Closed','Lock','Applied(Applied)');
	}

