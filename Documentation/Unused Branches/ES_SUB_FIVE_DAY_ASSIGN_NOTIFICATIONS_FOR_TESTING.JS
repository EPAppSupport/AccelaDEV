
var TSI = new Array();
var emailTo = 'ledezmaja@elpasotexas.gov';
loadTaskSpecific(TSI,capId);
if (AInfo['Land Development Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov', 'TEST - Land Development Review is Active', 'Please review task Land Development Review of Record Number '+capIDString + '<br/>Please review/respond before ' + dueDate);
	}

if (AInfo['EPWU - Storm Water Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov', 'TEST - EPWU - Storm Water Review is Active', 'Please review task EPWU - Storm Water Review of Record Number ' + capIDString + '<br/>Please review/respond before ' + dueDate);
	}

if (AInfo['EPWU - PSB Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov', 'TEST - EPWU - Storm Water Review is Active', 'Please review task EPWU - Storm Water Review of Record Number ' + capIDString + '<br/>Please review/respond before ' + dueDate);
	}

if (AInfo['Parks Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov', 'TEST - Parks Review is Active', 'Please review task Parks Review of Record Number ' + capIDString + '<br/>Please review/respond before ' + dueDate);
	}

if (AInfo['911 Review'] == 'Yes') {
	email(emailTo, 'accela@elpasotexas.gov', 'TEST - 911 Review is Active', 'Please review task 911 Review of Record Number '+capIDString + '<br/>Please review/respond before ' + dueDate);
	}

