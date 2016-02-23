
if (wfTask == 'Inspection' && wfStatus == 'Issued TCO' && AInfo['Expiration Date'] > dateAdd(null, 30)) {
	editAppSpecific('Expiration Date', dateAdd(null, 30));
}

if (wfTask == 'Issue' && wfStatus == 'Issued') {
	editAppSpecific('Expiration Date', dateAdd(null, 180));
	showMessage = true;
	comment('Expiration Date : ' + AInfo['Expiration Date']);
}

if (wfTask == 'Issue' && wfStatus == 'Issued') {

	//start replaced branch: ES_TITLE_19 WEBSERVICE
	{
		var subdivisionName = getGISInfo('Accela_map', 'Subdivisions', 'NAME');
		var i = 0;
		var percent = 0;
		comment('***** Subdivision is ' + subdivisionName);
		var wsURL = ('http://dev.elpasotexas.gov/AccelaBuildingService/Subdivision.asmx/UpdateSubdivisionCount');
		var client = aa.httpClient;
		var params = client.initPostParameters();
		params.put('subdivisionName', subdivisionName);
		var scriptResult = client.post(wsURL, params);
		logDebug(scriptResult.getOutput());

	}
	//end replaced branch: ES_TITLE_19 WEBSERVICE;
}

if (wfTask == 'Application Submittal' && wfStatus == 'Completed') {

	//replaced branch(ES_WORKFLOW_CASE_EMAIL_NOTIFICATION)
	ES_WORKFLOW_CASE_EMAIL_NOTIFICATION();
}

if ((wfStatus == 'Failed' || wfStatus == 'Fail')) {

	//replaced branch(ES_WORKFLOW_CASE_EMAIL_NOTIFICATION)
	ES_WORKFLOW_CASE_EMAIL_NOTIFICATION();
}
