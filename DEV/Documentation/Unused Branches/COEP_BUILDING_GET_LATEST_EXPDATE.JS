
var LatestDate = '';
if (typeof(PERMITEXTENSION)== 'object') {
	for(eachrow in PERMITEXTENSION) 
//start replaced branch: COEP_BUILDING_GET_LATEST_EXPDATE_LOOP
 {
asiRow = PERMITEXTENSION[eachrow];
if (asiRow['New Expiration Date'] != null) {
	LatestDate = asiRow['New Expiration Date'];
	editAppSpecific('Expiration Date', LatestDate);
	}

}
//end replaced branch: COEP_BUILDING_GET_LATEST_EXPDATE_LOOP;
	}

