
if (wfStatus == 'Issue Renewal') {

	//replaced branch(ES_UPDATE_RENEWAL_PARENT)
	ES_UPDATE_RENEWAL_PARENT();
	//update License to 'Active';
}

if (wfStatus == 'Issue Renewal') {
	logDebug('Running WTUA4Renewal');
	aa.runScript('WORKFLOWTASKUPDATEAFTER4RENEW');
	logDebug('Messages in WTUA4Renewal:<br>' + aa.env.getValue('ScriptReturnMessage'));
}
