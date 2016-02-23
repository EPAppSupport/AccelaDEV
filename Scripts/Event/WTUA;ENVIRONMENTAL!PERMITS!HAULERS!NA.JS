
if (wfTask == 'Issue' && (wfStatus == 'Suspended' || wfStatus == 'Revoked')) {
	addAppCondition('Record', 'Applied(Applied)', 'Suspended/Revoked', 'Condition Added because workflow was Suspended or Revoked', 'Lock');

	//start replaced branch: ES_ADD_ENVHAULERS_PENALTY_FEES
	{
		rowCount = 0;
		if (typeof(VEHICLE) == 'object') {
			for (eachrow in VEHICLE)
				//start replaced branch: ES_ADD_ENVHAULERS_FEES_LOOP
			{
				rowCount = rowCount + 1;

			}
			//end replaced branch: ES_ADD_ENVHAULERS_FEES_LOOP;
		}

		if (rowCount > 0 && wfTask == 'Issue' && wfStatus == 'Suspended') {
			addFee('EV220', 'ENVHP', 'STANDARD', rowCount, 'N');
		}

		if (rowCount > 0 && wfTask == 'Issue' && wfStatus == 'Revoked') {
			addFee('EV230', 'ENVHP', 'STANDARD', rowCount, 'N');
		}

	}
	//end replaced branch: ES_ADD_ENVHAULERS_PENALTY_FEES;
}

if (wfTask == 'Issue' && wfStatus == 'Issued' && compareDate('08/31/' + sysDate.getYear()) == false) {
	editAppSpecific('Expiration Date', '08/31/' + sysDate.getYear());
}

if (wfTask == 'Issue' && wfStatus == 'Issued' && compareDate('06/31/' + sysDate.getYear()) == true) {
	editAppSpecific('Expiration Date', dateAddMonths('08/31/' + sysDate.getYear(), 12));
}
