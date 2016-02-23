
var TSI = new Array();
var emailTo = 'RubioAX@elpasotexas.gov';
loadTaskSpecific(TSI,capId);
if (AInfo['Planned Land Dev Plat Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - Planned Land Dev Plat Review is Active', 'Please review task Planned Land Dev Plat Review of Record Number '+capIDString);
	}

if (AInfo['BPI Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - BPI Review is Active', 'Please review task BPI Review of Record Number '+capIDString);
	}

if (AInfo['MPO Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - MPO Review is Active', 'Please review MPO Review of Record Number '+capIDString);
	}

if (AInfo['El Paso ISD'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - El Paso ISD Review is Active', 'Please review task El Paso ISD Review of Record Number ' + capIDString);
	}

if (AInfo['Parks Review'] == 'Yes') {
	email(emailTo,  'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - Parks Review is Active', 'Please review task Parks Review of Record Number ' + capIDString);
	}

if (AInfo['Fire Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - Fire Review is Active', 'Please review task Fire Review of Record Number '+capIDString);
	}

if (AInfo['Street Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - Street Review is Active', 'Please review task Street Review of Record Number '+capIDString);
	}

if (AInfo['Sun Metro Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - Sun Metro Review is Active', 'Please review task Sun Metro Review of Record Number '+capIDString);
	}

if (AInfo['HLC Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - HLC Review is Active', 'Please review task HLC Review of Record Number '+capIDString);
	}

if (AInfo['EPWU Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - El Paso Water Utilities Review is Active', 'Please review task El Paso Water Utilities Review of Record Number ' + capIDString);
	}

if (AInfo['PD Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - PD Review is Active', 'Please review task PD Review of Record Number '+capIDString);
	}

if (AInfo['TXDot Review'] == 'Yes') {
	email(emailTo,'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - TXDot Review is Active', 'Please review TXDot task  Review of Record Number '+capIDString);
	}

if (AInfo['YISD Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - YISD Review is Active', 'Please review task YISD Review of Record Number '+capIDString);
	}

if (AInfo['SISD Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov','[DEV] ' + '[TEST] ' +  'TEST - SISD Review is Active', 'Please review task SISD Review of Record Number '+capIDString);
	}

