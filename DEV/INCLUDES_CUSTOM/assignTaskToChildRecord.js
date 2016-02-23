/*

Override function - Original function is 'assignTask'.
Purpose: To assign a person to a workflow task when a child record is created.

Params:
wfstr - Workflow task name.
username - Accela username ID to be assigned.
cCapId - child Cap ID.

By: David Rivera
Modified On: 3/20/2015

*/

function assignTaskToChildRecord(wfstr,username,cCapId) 
{

	var useProcess = false;
	var processName = "";
	
	var taskUserResult = aa.person.getUser(username);
	if (taskUserResult.getSuccess())
		taskUserObj = taskUserResult.getOutput();  //  User Object
	else
		{ logMessage("**ERROR: Failed to get user object: " + taskUserResult.getErrorMessage()); return false; }

	var workflowResult = aa.workflow.getTasks(cCapId);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else
		{ logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()); return false; }

	for (i in wfObj)
	{
		var fTask = wfObj[i];
		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  && (!useProcess || fTask.getProcessCode().equals(processName)))
		{
			fTask.setAssignedUser(taskUserObj);
			var taskItem = fTask.getTaskItem();
			var adjustResult = aa.workflow.assignTask(taskItem);

			logMessage("Assigned Workflow Task: " + wfstr + " to " + username);
			logDebug("Assigned Workflow Task: " + wfstr + " to " + username);
		}			
	}
}

