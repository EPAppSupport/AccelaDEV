

//start replaced branch: COEP_MISSED_GARBAGE_FEE
{
	isZero = false;
	isFee = false;
	if (typeof(SUPERVISORLOG) == 'object') {
		for (eachrow in SUPERVISORLOG)
			//start replaced branch: COEP_MISSED_GARBAGE_FEE_LOOP
		{
			asiRow = SUPERVISORLOG[eachrow];
			if (asiRow['Fees'] == '$0') {
				isZero = true;
				comment('Found zero');
			}

			if (asiRow['Fees'] == '$10' || asiRow['Fees'] == '$25') {
				isFee = true;
			}

		}
		//end replaced branch: COEP_MISSED_GARBAGE_FEE_LOOP;
	}

	if (isZero == true) {
		closeTask('Field Work Order', 'Complete no Bill', '', 'Workflow Advanced by Script');
		closeTask('Finance Review', 'Complete', '', 'Workflow Advanced by Script');
		updateTask('Close', 'Closed', '', 'Done by Script');
		closeTask('Close', 'Closed', '', 'Workflow Advanced by Script');
		updateAppStatus('Closed', 'Closed');
	}

	if (isFee == true) {
		closeTask('Field Work Order', 'Complete to be Invoiced', '', 'Workflow Advanced by Script');
	}

}
//end replaced branch: COEP_MISSED_GARBAGE_FEE;
if (typeof(SUPERVISORLOG) == 'object') {
	for (eachrow in SUPERVISORLOG)
		//start replaced branch: ES_MISSED_GARBAGE_LOOP
	{
		if (asiRow['Reason'] == 'Bin(s) dropped into truck') {
			var newChild = createChild('AMS', 'ESD', 'Containers', 'Container Replacement', capId);
			var savedcapid = capId;
			comment('capid ' + capId);
			capId = newChild;
			comment('new capID' + capId);
			assignTask('Work Order Submittal', 'CONTRERASBX');
			capId = savedcapid;
		}

	}
	//end replaced branch: ES_MISSED_GARBAGE_LOOP;
}
