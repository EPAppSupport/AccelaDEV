function esTitle19Webservice() {

	showDebug = true;
	showMessage = true;
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
