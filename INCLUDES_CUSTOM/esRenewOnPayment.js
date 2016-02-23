function esRenewOnPayment() {

	if (balanceDue == 0) {
		aa.runScript('PAYMENTRECEIVEAFTER4RENEW');
		logDebug('Return fromPRA4REN: ' + aa.env.getValue('ScriptReturnMessage'));
	}

	if (balanceDue == 0 && isTaskActive('Renewal Application')) {
		closeTask('Renewal Application', 'Issue Renewal', 'Updated by script when Fees Paid');
	}

	if (balanceDue == 0) {

		//replaced branch(ES_UPDATE_RENEWAL_PARENT)
		esUpdateRenewalParent()
		//update License to 'Active';
	}

}
