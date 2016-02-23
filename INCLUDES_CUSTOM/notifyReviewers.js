

/*
	Emails the person defined for each discipline (task) active for building records. 
	Identifies if record is an expedited record and changes the subject and email body to notify that it is
	an expedited record.
	
	Created on: 6/3/2015 by David Rivera
	Requested by: Adriana Wilcox - [145042]
*/
function notifyReviewers(Expedited)
{
	var sender = "accela@elpasotexas.gov";
	var subject, emailBody;
	var testEnv = ""; //<-----Assign to empty string when in production.

	if (Expedited == "PBA" || Expedited == "CRP")
	{
		subject =  testEnv +  " Expedited record " + capIDString + "; ";
		emailBody = "Good day, <br><br> <b>Expedited</b> record " + capIDString + " is now in ";
	}
	else{
		subject =  testEnv + " Record " + capIDString + "; ";
		emailBody = "Good day, <br><br> Record " + capIDString + " is now in ";
	}

	var wfo = aa.workflow.getTasks(capId).getOutput();
	//aa.print(capid);
	var taskActive;
	var taskName;
	for (i in wfo)
	{
		taskActive = wfo[i].getActiveFlag();
		taskName = wfo[i].getTaskDescription();
		//aa.print(taskActive + "-" + taskName);
		if (taskActive == 'Y')
		{
			if (taskName == "Airport Review") { aa.sendMail(sender, "chavezj1@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Fire Review") { aa.sendMail(sender, "RuizAM@elpasotexas.gov; FD-FPDPlanReview@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Subdivision Review") { aa.sendMail(sender, "garciar1@elpasotexas.gov; OrtizNX@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Engineering Review") { aa.sendMail(sender, "martineza@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Plumbing Review") { aa.sendMail(sender, "stilesja@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Zoning Review") { aa.sendMail(sender, "martineza@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Electrical Review") { aa.sendMail(sender, "sernarj@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Public Safety Review") { aa.sendMail(sender, "martineza@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Health Food Review") { aa.sendMail(sender, "david.sublasky@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Landscaping Review") { aa.sendMail(sender, "kaniadj@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Historical Review") { aa.sendMail(sender, "velazquezpx@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Irrigation Review") { aa.sendMail(sender, "kaniadj@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Architectural Review") { aa.sendMail(sender, "martineza@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); }
			if (taskName == "Subdivision Imp Review") { aa.sendMail(sender, "dallokf@elpasotexas.gov; castilloam@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Planning Zoning Review") { aa.sendMail(sender, "mcelroyms@elpasotexas.gov; rubioax@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Streets Review") { aa.sendMail(sender, "martineza@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Mechanical Review") { aa.sendMail(sender, "stilesja@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Environmental Review") { aa.sendMail(sender, "martineza@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Land Development Review") { aa.sendMail(sender, "dallokf@elpasotexas.gov; castilloam@elpasotexas.gov; MoyaNX@elpasotexas.gov; GardeaJM@elpasotexas.gov; GutierrezJ2@elpasotexas.gov; SanchezEH@elpasotexas.gov; UnzuetaJX@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
			if (taskName == "Engineering Traffic Review") { aa.sendMail(sender, "martineza@elpasotexas.gov", "", subject + taskName + " is Active", emailBody  + taskName); logDebug("Email sent"); } 
		}
	}
}
/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
|  Notification Template Functions (End)
/------------------------------------------------------------------------------------------------------*/

