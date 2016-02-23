

//start replaced branch: ES_Animal_WFTUA
 {
if (appMatch('Animal/License/NA/NA') && wfTask == 'Issue' && wfStatus == 'About to Expire') {
	lic = new licenseObject(capIDString);
	lic.setStatus('About to Expire');
	}

if (appMatch('Animal/License/Renewal/NA') && wfStatus == 'Issue Renewal') {
	
//replaced branch(ES_Animal_Update_Renewal_Parent)
ES_Animal_Update_Renewal_Parent();
	//update License to 'Active';
	}

if (appMatch('Animal/License/Renewal/NA') && wfStatus == 'Issue Renewal') {
	logDebug('Running WTUA4Renewal');
	aa.runScript('WORKFLOWTASKUPDATEAFTER4RENEW');
	logDebug('Messages in WTUA4Renewal:<br>'+ aa.env.getValue('ScriptReturnMessage'));
	}

}
//end replaced branch: ES_Animal_WFTUA;

