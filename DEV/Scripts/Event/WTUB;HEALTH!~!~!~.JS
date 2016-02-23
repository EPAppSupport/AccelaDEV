

//start replaced branch: ES_HEALTH_WFTASKUPDATEBEFORE
{
	if (appMatch('Health/Food Inspections/Complaints/*') && wfTask == 'Complaint Received') {

		//start replaced branch: ES_HEALTH_CHECK_COMPLAINT
		{
			if (typeof(COMPLAINTTYPE) != 'object') {
				showMessage = true;
				comment('The ASI Table Complaint Type must be populated on this CAP before updating the workflow.');
				cancel = true;
			}

			if (typeof(COMPLAINTTYPE) == 'object') {
				for (eachrow in COMPLAINTTYPE)
					//start replaced branch: ES_HEALTH_CHECK_COMPLAINT_LOOP
				{
					rowValue = COMPLAINTTYPE[eachrow];
					comment('Complaint Type is: ' + rowValue['Complaint Type']);
					if (rowValue['Complaint Type'] == null) {
						showMessage = true;
						comment("The ASI Table ' Complaint Type ' must be populated on this CAP before updating the workflow.");
						cancel = true;
					}

				}
				//end replaced branch: ES_HEALTH_CHECK_COMPLAINT_LOOP;
			}

		}
		//end replaced branch: ES_HEALTH_CHECK_COMPLAINT;
	}

	if (appMatch('Health/Food Inspections/Food Handler/*') && wfTask == 'Application Submittal' && (wfStatus == 'Received' || wfStatus == 'External Class Taken') && (AInfo['Subtype'] == 'Course' || AInfo['Subtype'] == 'Challenge Exam' || AInfo['Subtype'] == 'Recognized' || AInfo['Subtype'] == 'Permanent')) {

		//start replaced branch: ES_HEALTH_FH_CDATE
		{
			courseComp = false;
			courseComp2 = false;
			if (SCHEDULEINFORMATION.length < 1 && RECOGNIZEDCOURSEINFORMATION.length < 1) {
				showMessage = true;
				comment('ASI Table SCHEDULE INFORMATION and ASI Table RECOGNIZED COURSE INFORMATION are empty, need to fill out one of them.');
				cancel = true;
			}

			if (SCHEDULEINFORMATION.length > 0) {
				for (eachrow in SCHEDULEINFORMATION)
					//start replaced branch: ES_HEALTH_FH_CDATE_LOOP
				{
					asiRow = SCHEDULEINFORMATION[eachrow];
					todayDate = new Date(dateAdd(null, 0));
					courseComp = false;
					if (asiRow['Status'] == 'Scheduled' && asiRow['Course Date'] != null) {
						courseComp = true;
					}

				}
				//end replaced branch: ES_HEALTH_FH_CDATE_LOOP;
			}

			if (RECOGNIZEDCOURSEINFORMATION.length > 0) {
				for (eachrow in RECOGNIZEDCOURSEINFORMATION)
					//start replaced branch: COEP_HEALTH_FH_CDATE_LOOP
				{
					asiRow = RECOGNIZEDCOURSEINFORMATION[eachrow];
					todayDate = new Date(dateAdd(null, 0));
					courseComp2 = false;
					if (asiRow['Course Date'] != null) {
						courseComp2 = true;
					}

				}
				//end replaced branch: COEP_HEALTH_FH_CDATE_LOOP;
			}

			if (((courseComp == false && courseComp2 == false) || (courseComp == true && courseComp2 == true))) {
				showMessage = true;
				comment(courseComp + '  Cannot issue Food Handler permit because the latest scheduled ' Course Date ' and/or ' Course Time ' field on the ASI Table SCHEDULE INFORMATION or RECOGNIZED COURSE INFORMATION is not filled out and/or completed.');
				cancel = true;
			}

		}
		//end replaced branch: ES_HEALTH_FH_CDATE;
	}

	if (appMatch('Health/Food Inspections/Seasonal/*') && wfTask == 'Inspection' && wfStatus == 'Renewed') {

		//start replaced branch: ES_HEALTH_SEASNL_CEXPIRED_PERMIT
		{
			ExpDate = new Date(AInfo['Expiration Date']).getTime();
			CurrDate = new Date().getTime();
			diff = new Number((CurrDate - ExpDate) / 86400000).toFixed(0);
			if (diff < 180) {
				showMessage = true;
				comment('Expiration is not more than 180 days.  Please wait till 180 days after expiration have passed before renewing the permit.');
				cancel = true;
			}

		}
		//end replaced branch: ES_HEALTH_SEASNL_CEXPIRED_PERMIT;
	}

	if (appMatch('Health/Food Inspections/Public Education/*') && wfTask == 'Request' && matches(wfStatus, 'Received', 'Assigned')) {

		//start replaced branch: ES_HEALTH_PUBED_PDATE
		{
			presSched = false;
			if (typeof(SCHEDULEINFORMATION) == 'object') {
				for (eachrow in SCHEDULEINFORMATION)
					//start replaced branch: ES_HEALTH_PUBED_PDATE_LOOP
				{
					asiRow = SCHEDULEINFORMATION[eachrow];
					if (asiRow['Status'] == 'Scheduled' && asiRow['Presentation Date'] != null && asiRow['Presentation Time'] != null) {
						presSched = true;
					}

				}
				//end replaced branch: ES_HEALTH_PUBED_PDATE_LOOP;
			}

			if (presSched == false) {
				showMessage = true;
				comment('Cannot move workflow because there is no scheduled ' Presentation Date ' and/or ' Presentation Time ' field on the ASI Table Scheduled Information is not filled out.');
				cancel = true;
			}

		}
		//end replaced branch: ES_HEALTH_PUBED_PDATE;
	}

}
//end replaced branch: ES_HEALTH_WFTASKUPDATEBEFORE;
