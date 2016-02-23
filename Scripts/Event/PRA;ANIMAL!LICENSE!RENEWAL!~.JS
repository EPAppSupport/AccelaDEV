

//start replaced branch: ES_Animal_Renew_On_Payment
{
	if (balanceDue == 0) {
		aa.runScript('PAYMENTRECEIVEAFTER4RENEW');
		logDebug('Return fromPRA4REN: ' + aa.env.getValue('ScriptReturnMessage'));
	}

	if (balanceDue == 0 && isTaskActive('Renewal Application')) {
		closeTask('Renewal Application', 'Issue Renewal', 'Updated by script when Fees Paid');
	}

	if (balanceDue == 0) {

		//replaced branch(ES_Animal_Update_Renewal_Parent)
		ES_Animal_Update_Renewal_Parent();
		//update License to 'Active';
	}

}
//end replaced branch: ES_Animal_Renew_On_Payment;
