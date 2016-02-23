
if ((wfTask == 'Issue' || wfTask == 'Issued') && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('Task cannot be completed. There is a balance on the application. All invoiced fees must be paid before permit issuance. ');
	cancel = true;
}

if (wfTask == 'Completeness Check' && wfStatus != 'Cancelled' && wfStatus != 'Resubmitted' && isTaskComplete('Electrical Review') == false) {

	//start replaced branch: ES_COUNT_SQFT
	{
		totalSqFt = 0;
		if (typeof(BUILDINGINFORMATION) == 'object') {
			for (eachrow in BUILDINGINFORMATION)
				//start replaced branch: ES_COUNT_SQFT_LOOP
			{
				sqftRow = BUILDINGINFORMATION[eachrow];
				totalSqFt = totalSqFt + parseFloat(sqftRow['1st Floor']) + parseFloat(sqftRow['2nd Floor']) + parseFloat(sqftRow['3rd Floor']);
				if (totalSqFt > 0) {
					comment('The total square footage is:' + totalSqFt);
				}

			}
			//end replaced branch: ES_COUNT_SQFT_LOOP;
		}

		if (totalSqFt >= 2500 && isTaskStatus('Electrical Review', 'Failed')) {
			showMessage = true;
			comment('The workflow task cannot be updated because an Electrical Review is required when the building sq ft >= 2500 sq ft.');
			cancel = true;
		}

	}
	//end replaced branch: ES_COUNT_SQFT;
}

if (wfTask == 'Inspection' && wfStatus == 'Extension Issued' && wfGetHistCount(capId, 'Inspection', 'Extension Issued') >= 4) {
	showMessage = true;
	comment('Cannot allow more than 4 Inspection Extensions');
	cancel = true;
}

if ((wfTask == 'Issue Certificate' && wfStatus == 'Issued' && AInfo['Conditional Release'] == 'Yes')) {
	showMessage = true;
	comment('Cannot continue due to Conditional Release, please contact Barbra Shipp or Brenda Cantu for more details');
	cancel = true;
}
