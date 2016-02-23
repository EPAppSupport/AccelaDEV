//The closeTask() function was modifed to add optional capId parameter.
//For EDR, function was modified to alter workflow properties so that email address and comments are displayed in ACA
function closeTask(wfstr,wfstat,wfcomment,wfnote) // optional process name, capId
{
	var useProcess = false;
	var processName = "";
	if (arguments.length == 5) 
	{
		processName = arguments[4]; // subprocess
		useProcess = true;
	}
	var itemCap = capId;
	if (arguments.length == 6) itemCap = arguments[5]; // use cap ID specified in args

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
			var processID = fTask.getProcessID();

			//Custom section to set workflow task ACA Display properties
			var taskModel = fTask.getTaskItem();
			taskModel.setIsRestrictView4ACA("Y");
			taskModel.setAsgnEmailDisp("Y");
			taskModel.setRestrictRole("1111100000"); //This value can be retrieved via SQL Query from an existing workflow task.  select RESTRICT_ROLE from gprocess where serv_prov_code = '{Agency}' and b1_per_id1='13B22' and b1_per_id2='00000' and b1_per_id3='00670' and sd_pro_des='{Task Name}';
			aa.workflow.editTask(fTask);
			
			if (useProcess)
				aa.workflow.handleDisposition(itemCap,stepnumber,processID,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,"Y");
			else
				aa.workflow.handleDisposition(itemCap,stepnumber,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,"Y");
			
			logMessage("Closing Workflow Task: " + wfstr + " with status " + wfstat);
			logDebug("Closing Workflow Task: " + wfstr + " with status " + wfstat);
		}			
	}
}	

