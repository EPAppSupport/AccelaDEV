
showDebug=true;
showMessage=true;
var subdivisionName = getGISInfo('Accela_map', 'Subdivisions', 'NAME');
var i = 0;
var percent = 0;
comment('***** Subdivision is ' + subdivisionName);
var wsURL = ('http://dev.elpasotexas.gov/AccelaBuildingService/Subdivision.asmx/GetPercentage');
var client = aa.httpClient;
var params = client.initPostParameters();
params.put('subdivisionName', subdivisionName);
var scriptResult = client.post(wsURL, params);
logDebug(scriptResult.getOutput());
eval('var obj = ' + scriptResult.getOutput());
logDebug(obj[0].Subdivision);
eval('var test = ' + scriptResult.getOutput());
percent = test[0].PercentageValue.toString();
logDebug(test[0].PercentageValue.toString());
if (percent > 50) {
	comment('Percent is greater than 50 and is not approved by PSB, got: ' + percent);
	cancel=true;
	}

