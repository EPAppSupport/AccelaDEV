

function getWorkflowProcess(wfstr)
{
    var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage("**ERROR: Failed to get workflow object from custom function getWorkflowProcess: " + s_capResult.getErrorMessage()); return false; }
		
    for (i in wfObj)
	{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()))
		{
			return fTask.getProcessCode();
		}
	}
}
