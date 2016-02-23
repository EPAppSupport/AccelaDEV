
/*
	Triggers when service request has the following conditions:
	Environmental Complaints = Dead Animal Pick-up
	Personal Pet = No
	
	it updates the Work Order Submittal to completed status, closes it and activates next task - Work Order.
	
	Created on: 8/4/2015 by David Rivera
	Requested by: Jorge Avitia - []
*/
function updateTaskOfChildRecord(wfstr,wfstat,wfcomment,wfnote,cCapId) // optional process name, cap id
{
	
	var currentUserID = aa.env.getValue("CurrentUserID");
	var systemUserObj = aa.person.getUser(currentUserID).getOutput();
	
	var useProcess = false;
	var processName = "";

	var itemCap = cCapId;
	
	var workflowResult = aa.workflow.getTasks(itemCap);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else
	{ logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()); return false; }
            
	if (!wfstat) wfstat = "NA";
            
	for (i in wfObj)
		{
		var fTask = wfObj[i];
		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  && (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var dispositionDate = aa.date.getCurrentDate();
			var stepnumber = fTask.getStepNumber();
			//var processID = fTask.getProcessID();
			aa.workflow.handleDisposition(itemCap,stepnumber,wfstat,dispositionDate,wfnote,wfcomment,systemUserObj,"U");
			logDebug("Updating Workflow Task " + wfstr + " with status " + wfstat);
			aa.workflow.handleDisposition(itemCap,stepnumber,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,"Y");
			logDebug("Closing Workflow Task " + wfstr + " with status " + wfstat);
			aa.workflow.adjustTask(itemCap, 2, "Y", "N", null, null)
			logDebug("Activating Workflow Task step number: 2");			
			}                                   
		}
}

