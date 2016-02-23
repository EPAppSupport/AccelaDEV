

//start replaced branch: ES_ACA_WORKFLOWS
{
	if (appMatch('Environmental/Permits/Haulers/NA')) {
		closeTask('Application Submittal', 'Completed', 'Submitted through ACA', 'Workflow advanced via EMSE script');
		closeTask('Review', 'Complete', 'Reviewed through ACA', 'Workflow advanced via EMSE script');
		updateTask('Issue', 'Issued', 'Issued through ACA', 'Workflow advanced via EMSE script');
	}

}
//end replaced branch: ES_ACA_WORKFLOWS;

// TODO: branch doesn't exists
/*
if (appMatch('Animal/License/Renewal/NA')) {
branch('ES_Animal_Renewal_Add_Fee');
}
 */

if (publicUser && appMatch('Licenses/Renewal/Security Alarm/*')) {

	//replaced branch(ES_SECURITY_ALARM_ACA_EMAIL_NOTIFICATION)
	ES_SECURITY_ALARM_ACA_EMAIL_NOTIFICATION();
}

if (publicUser && appMatch('Planning/*/*/*')) {

	//start replaced branch: ES_PLANNING_ACA_EMAIL_NOTIFICATION
	{
		if (appMatch('Planning/Zoning/*/*')) {
			email('HOFFMANAP@elpasotexas.gov;RUBIOAX@elpasotexas.gov', 'accela@elpasotexas.gov', ('ACA Record Number: ' + capIDString), 'The Record Number ' + capIDString + ' has been submitted');
		}

		if (appMatch('Planning/Subdivision/*/*')) {
			email('AustinAJ@elpasotexas.gov;OrtizNX@elpasotexas.gov', 'accela@elpasotexas.gov', ('ACA Record Number: ' + capIDString), 'The Record Number ' + capIDString + ' has been submitted');
		}

	}
	//end replaced branch: ES_PLANNING_ACA_EMAIL_NOTIFICATION;
}

if (publicUser && appMatch('Building/*/*/*')) {

	//start replaced branch: ES_BUILDING_ACA_EMAIL_NOTIFICATION
	{
		if ((appMatch('Building/Residential/*/*') || appMatch('Building/Commercial/*/*')) && (AInfo['Expedited'] == 'PBA' || AInfo['Expedited'] == 'CPR')) {
			email('LamasMX@elpasotexas.gov;NelighMP@elpasotexas.gov;EstalaAX@elpasotexas.gov;Readra@elpasotexas.gov;gibsonEK@elpasotexas.gov;DelaCruzJA@elpasotexas.gov', 'accela@elpasotexas.gov', ('A new Expedited permit is submitted online, Permit Number: ' + capIDString), 'A new Expedited permit is submitted online, permit number is ' + capIDString + ' has been submitted');
			// original before added the three leading email addresses(appMatch('Building/Residential/New/*') || appMatch('Building/Commercial/New/*')) && AInfo['Expedited'] == 'PBA'  email('ledezmaja@elpasotexas.gov','accela@elpasotexas.gov',('ACA Record Number: ' + capIDString), 'The Record Number ' + capIDString + ' has been submitted');
		}

	}
	//end replaced branch: ES_BUILDING_ACA_EMAIL_NOTIFICATION;
}
