

//start replaced branch: ES_RENEW_ON_PAYMENT
{
	if (balanceDue == 0) {
		aa.runScript('PAYMENTRECEIVEAFTER4RENEW');
		logDebug('Return fromPRA4REN: ' + aa.env.getValue('ScriptReturnMessage'));
	}

	if (balanceDue == 0 && isTaskActive('Renewal Application')) {
		closeTask('Renewal Application', 'Issue Renewal', 'Updated by script when Fees Paid');
	}

	if (balanceDue == 0) {

		//replaced branch(ES_UPDATE_RENEWAL_PARENT)
		ES_UPDATE_RENEWAL_PARENT();
		//update License to 'Active';
	}

}
//end replaced branch: ES_RENEW_ON_PAYMENT;
