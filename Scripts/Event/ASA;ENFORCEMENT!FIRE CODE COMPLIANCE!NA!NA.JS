

//start replaced branch: ENF_FIRECODECOMPLIANCE_getGIS_DATA
{
	var gisData = getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea');
	var isDowntown = gisData.substr(0, 8);
	var isLowerDyer = gisData.substr(0, 5);
	if (isDowntown == 'Downtown') {
		editAppSpecific('18.40 Downtown', getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea'));
	}

	if (isLowerDyer == 'Lower') {
		editAppSpecific('18.40 Northeast', getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea'));
	}

}
//end replaced branch: ENF_FIRECODECOMPLIANCE_getGIS_DATA;
if (AInfo['Certificate of Occupancy'] == 'No') {

	//start replaced branch: ES_ENFORCEMENT_COO
	{
		if (appMatch('Enforcement/Fire Code Compliance/NA/NA')) {
			var newChild = createChild('Building', 'Existing Building C of O', 'NA', 'NA', 'Child of record ID ' + capIDString);
		}

		if (appMatch('Licenses/Fire/NA/NA')) {
			var newChild = createChild('Building', 'Existing Building C of O', 'NA', 'NA', 'Child of record ID ' + capIDString);
		}

		var tempCapId = capId;
		capId = newChild;
		assignTask('Application Submittal', 'GARCIAAA');
		var childIdString = capId.getCustomID();
		var subject = ('ACCELA RecordID: ' + childIdString);
		var emBody = ('Record Id. ' + childIdString + ' has been created and assigned to you. To access this record please log into Accela website. Thanks.');
		email('GarciaAA@elpasotexas.gov', 'accela@elpasotexas.gov', subject, emBody);

	}
	//end replaced branch: ES_ENFORCEMENT_COO;
}

//start replaced branch: ENF_FIRECODECOMPLIANCE_getGIS_DATA
{
	var gisData = getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea');
	var isDowntown = gisData.substr(0, 8);
	var isLowerDyer = gisData.substr(0, 5);
	if (isDowntown == 'Downtown') {
		editAppSpecific('18.40 Downtown', getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea'));
	}

	if (isLowerDyer == 'Lower') {
		editAppSpecific('18.40 Northeast', getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea'));
	}

}
//end replaced branch: ENF_FIRECODECOMPLIANCE_getGIS_DATA;
