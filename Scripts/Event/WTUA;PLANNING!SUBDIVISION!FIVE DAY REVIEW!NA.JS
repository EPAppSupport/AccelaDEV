
if (wfTask == 'Task Assignment' && (wfStatus == 'Assign Electronic Review' || wfStatus == 'Assign Paper Review')) {

	//start replaced branch: ES_SUB_FIVE_DAY_ASSIGN_NOTIFICATIONS
	{
		var TSI = new Array();
		var emailTo = 'accela@elpasotexas.gov';
		loadTaskSpecific(TSI, capId);
		if (AInfo['Land Development Review'] == 'Yes') {
			email('DalloKF@elpasotexas.gov;CastilloAM@elpasotexas.gov', 'accela@elpasotexas.gov', 'Land Development Review is Active', 'Please review task Land Development Review of Record Number ' + capIDString);
		}

		if (AInfo['EPWU - Storm Water Review'] == 'Yes') {
			email('flopez@epwu.org;gcedillos@epwu.org;acastillo@epwu.org', 'accela@elpasotexas.gov', 'EPWU - Storm Water Review is Active', 'Please review task EPWU - Storm Water Review of Record Number ' + capIDString);
		}

		if (AInfo['EPWU - PSB Review'] == 'Yes') {
			email('flopez@epwu.org;gcedillos@epwu.org;	acastillo@epwu.org', 'accela@elpasotexas.gov', 'EPWU - Storm Water Review is Active', 'Please review task EPWU - Storm Water Review of Record Number ' + capIDString);
		}

		if (AInfo['Parks Review'] == 'Yes') {
			email('DeLaRosaJA@elpasotexas.gov;OrtizJA@elpasotexas.gov;NovakTA@elpasotexas.gov', 'accela@elpasotexas.gov', 'Parks Review is Active', 'Please review task Parks Review of Record Number ' + capIDString);
		}

		if (AInfo['911 Review'] == 'Yes') {
			email('thelmam@elpasocounty911.org;SoniaR@elpasocounty911.org', 'accela@elpasotexas.gov', '911 Review is Active', 'Please review task 911 Review of Record Number ' + capIDString);
		}

	}
	//end replaced branch: ES_SUB_FIVE_DAY_ASSIGN_NOTIFICATIONS;
}

if (wfTask == 'Application Submittal' && wfStatus == 'Assigned') {

	//replaced branch(ES_WORKFLOW_CASE_EMAIL_NOTIFICATION)
	ES_WORKFLOW_CASE_EMAIL_NOTIFICATION();
}
