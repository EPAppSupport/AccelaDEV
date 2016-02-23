
if (wfTask == 'Application Submittal' && (wfStatus == 'Received' || wfStatus == 'External Class Taken') && (AInfo['Subtype'] == 'Course' || AInfo['Subtype'] == 'Challenge Exam' || AInfo['Subtype'] == 'Recognized')) {

	//start replaced branch: COEP_FOOD_HANDLER
	{
		if (wfTask == 'Close' && wfStatus == 'Scheduled' && wfGetHistDatePlusOne(capId, 'Issue', 'Revoked') == true) {
			showMessage = true;
			comment('Status Date plus 1 year is greater than SysDate ' + wfGetHistDatePlusOne(capId, 'Issue', 'Revoked'));
			cancel = true;
		}

		courseDate = '';
		var findDate = new Date();
		if (SCHEDULEINFORMATION.length > 0 && RECOGNIZEDCOURSEINFORMATION.length < 1) {
			for (eachrow in SCHEDULEINFORMATION)
				//start replaced branch: COEP_FOOD_HANDLER_COURSEDATE
			{
				if (SCHEDULEINFORMATION.length > 0 && RECOGNIZEDCOURSEINFORMATION.length < 1) {
					findDate = SCHEDULEINFORMATION[eachrow]['Course Date'];
				}

				if (SCHEDULEINFORMATION.length < 1 && RECOGNIZEDCOURSEINFORMATION.length > 0) {
					findDate = RECOGNIZEDCOURSEINFORMATION[eachrow]['Course Date'];
				}

				courseDate = findDate;

			}
			//end replaced branch: COEP_FOOD_HANDLER_COURSEDATE;
		}

		if (SCHEDULEINFORMATION.length < 1 && typeof(RECOGNIZEDCOURSEINFORMATION) == 'object') {
			for (eachrow in RECOGNIZEDCOURSEINFORMATION)
				//start replaced branch: COEP_FOOD_HANDLER_COURSEDATE
			{
				if (SCHEDULEINFORMATION.length > 0 && RECOGNIZEDCOURSEINFORMATION.length < 1) {
					findDate = SCHEDULEINFORMATION[eachrow]['Course Date'];
				}

				if (SCHEDULEINFORMATION.length < 1 && RECOGNIZEDCOURSEINFORMATION.length > 0) {
					findDate = RECOGNIZEDCOURSEINFORMATION[eachrow]['Course Date'];
				}

				courseDate = findDate;

			}
			//end replaced branch: COEP_FOOD_HANDLER_COURSEDATE;
		}

		editAppSpecific('Expiration Date', dateAddMonths(courseDate, 24));

	}
	//end replaced branch: COEP_FOOD_HANDLER;
}
